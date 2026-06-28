import {
  ArrowUpRight,
  BarChart3,
  BookOpenCheck,
  CheckCircle2,
  Coffee,
  FileText,
  Folder,
  GitBranch,
  GraduationCap,
  Heart,
  Layers3,
  LogIn,
  MessageCircle,
  Moon,
  Network,
  PenLine,
  Play,
  Sparkles,
  Star,
  Trophy,
  User,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link, NavLink, Route, Routes, useParams } from "react-router-dom";
import {
  ATTEMPTS_STORAGE_KEY,
  Attempt,
  MASTERY_LABELS,
  Mastery,
  QUESTION_TYPE_LABELS,
  Question,
  SOURCE_TYPE_LABELS,
  SUBJECT_NAMES,
  knowledgePoints,
  questions,
  resourceSources,
} from "./data/psychology312";

type AttemptsByQuestion = Record<string, Attempt>;

const betaFeatures = [
  { label: "记忆卡片", icon: Layers3, active: true },
  { label: "实验范式", icon: Network, active: true },
  { label: "真题大观", icon: PenLine, active: true },
  { label: "导图 Agent", icon: GitBranch },
  { label: "院校 PK", icon: GraduationCap },
  { label: "排行榜", icon: Trophy },
];

const emptyAttempt: Attempt = {
  questionId: "",
  mastery: "unmarked",
  isCollected: false,
  answeredAt: "",
};

function readAttempts(): AttemptsByQuestion {
  try {
    const raw = window.localStorage.getItem(ATTEMPTS_STORAGE_KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function getAttempt(attempts: AttemptsByQuestion, questionId: string): Attempt {
  return attempts[questionId] ?? { ...emptyAttempt, questionId };
}

function isAnswered(attempt?: Attempt) {
  return Boolean(attempt?.answeredAt);
}

function answerMatches(question: Question, selected?: string | string[]) {
  if (!selected) return false;
  const expected = Array.isArray(question.answer) ? question.answer : [question.answer];
  const actual = Array.isArray(selected) ? selected : [selected];
  return expected.length === actual.length && expected.every((item) => actual.includes(item));
}

function todayIso() {
  return new Date().toISOString();
}

function formatAnswer(answer: string | string[]) {
  return Array.isArray(answer) ? answer.join("、") : answer;
}

function questionTypeName(type: Question["type"]) {
  return QUESTION_TYPE_LABELS[type];
}

function buildHeatmap(attempts: AttemptsByQuestion) {
  const days = Array.from({ length: 90 }, (_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - (89 - index));
    return { key: date.toISOString().slice(0, 10), count: 0 };
  });
  const byDay = new Map(days.map((day) => [day.key, day]));
  Object.values(attempts).forEach((attempt) => {
    if (!attempt.answeredAt) return;
    const key = attempt.answeredAt.slice(0, 10);
    const day = byDay.get(key);
    if (day) day.count += 1;
  });
  return days.map((day) => Math.min(day.count, 4));
}

function getDashboardData(attempts: AttemptsByQuestion) {
  const answered = Object.values(attempts).filter(isAnswered);
  const done = answered.length;
  const total = questions.length;
  const completion = Math.round((done / total) * 100);
  const collected = Object.values(attempts).filter((item) => item.isCollected).length;
  const subjectStats = SUBJECT_NAMES.map((name) => {
    const subjectQuestions = questions.filter((question) => question.subject === name);
    const doneInSubject = subjectQuestions.filter((question) => isAnswered(attempts[question.id]));
    const mastered = doneInSubject.filter((question) => attempts[question.id]?.mastery === "mastered").length;
    const shaky = doneInSubject.filter((question) => attempts[question.id]?.mastery === "shaky").length;
    const unknown = doneInSubject.filter((question) => attempts[question.id]?.mastery === "unknown").length;
    const mastery = doneInSubject.length ? Math.round((mastered / subjectQuestions.length) * 100) : 0;
    return {
      name,
      total: subjectQuestions.length,
      done: doneInSubject.length,
      mastery,
      strong: mastered,
      shaky,
      weak: unknown,
    };
  });
  const average = Math.round(subjectStats.reduce((sum, item) => sum + item.mastery, 0) / subjectStats.length);
  const heatmap = buildHeatmap(attempts);
  const activeDays = heatmap.filter((level) => level > 0).length;
  const todayQuestion =
    questions.find((question) => !isAnswered(attempts[question.id])) ??
    questions.find((question) => ["shaky", "unknown"].includes(attempts[question.id]?.mastery ?? "")) ??
    questions[0];

  return { answered, average, collected, completion, done, heatmap, activeDays, subjectStats, todayQuestion, total };
}

function getKnowledgePoint(question: Question) {
  return knowledgePoints.find((point) => point.id === question.knowledgePointIds[0]);
}

function getWeaknessItems(attempts: AttemptsByQuestion) {
  const priority = new Map(
    [
      "kp-anova",
      "kp-experiment-design",
      "kp-reliability",
      "kp-signal-detection",
      "kp-t-test",
      "kp-attention-selective",
      "kp-memory-working",
    ].map((id, index) => [id, index]),
  );
  return knowledgePoints
    .map((point) => {
      const linked = questions.filter((question) => question.knowledgePointIds.includes(point.id));
      const risky = linked.filter((question) => {
        const attempt = attempts[question.id];
        return !attempt || ["shaky", "unknown", "unmarked"].includes(attempt.mastery);
      }).length;
      return {
        id: point.id,
        name: point.name,
        subject: point.subject,
        value: linked.length ? Math.round((risky / linked.length) * 100) : 0,
        advice: `${point.chapter}还需要回到教材和题目反复确认`,
      };
    })
    .sort((a, b) => b.value - a.value || (priority.get(a.id) ?? 99) - (priority.get(b.id) ?? 99))
    .slice(0, 5);
}

function getWeeklyStats(attempts: AttemptsByQuestion) {
  const labels = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  const counts = labels.map((day) => ({ day, count: 0 }));
  Object.values(attempts).forEach((attempt) => {
    if (!attempt.answeredAt) return;
    counts[new Date(attempt.answeredAt).getDay()].count += 1;
  });
  return [...counts.slice(1), counts[0]];
}

function getTypeStats(attempts: AttemptsByQuestion) {
  return Object.entries(QUESTION_TYPE_LABELS).map(([type, label]) => {
    const typedQuestions = questions.filter((question) => question.type === type);
    const answered = typedQuestions.filter((question) => attempts[question.id]?.isCorrect !== undefined);
    const correct = answered.filter((question) => attempts[question.id]?.isCorrect).length;
    return { type: label, accuracy: answered.length ? Math.round((correct / answered.length) * 100) : 0 };
  });
}

function Header() {
  const tabs = [
    ["首页面板", "/dashboard/"],
    ["真题总览", "/dashboard/questions"],
    ["真题分析", "/dashboard/analysis"],
    ["知识图谱", "/dashboard/graph"],
    ["数据统计", "/dashboard/stats"],
  ];

  return (
    <header className="topbar">
      <a className="brand" href="/">
        <span className="brand-mark" aria-hidden="true">
          <span />
          <span />
        </span>
        <span>312心理学考研智能备考平台</span>
      </a>
      <nav className="topnav" aria-label="主导航">
        {tabs.map(([label, to]) => (
          <NavLink key={to} to={to} end={to === "/dashboard/"}>
            {label}
          </NavLink>
        ))}
      </nav>
      <div className="top-actions">
        <button className="icon-button" aria-label="切换深色模式">
          <Moon size={18} />
        </button>
        <button className="login-button">
          <LogIn size={18} />
          登录
        </button>
      </div>
    </header>
  );
}

function StatCards({ data }: { data: ReturnType<typeof getDashboardData> }) {
  const stats = [
    { label: "欢迎回来", value: "用户", icon: User },
    { label: "已做题数", value: data.done.toString(), detail: `完成度 ${data.completion}%`, icon: BookOpenCheck },
    { label: "题库题量", value: `${data.total}题`, detail: "v1 原创样题库", icon: FileText, action: "立即刷题" },
    { label: "312通关进度", value: `${data.completion}%`, icon: Sparkles },
  ];

  return (
    <section className="stat-grid" aria-label="学习统计">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <article className="stat-card" key={stat.label}>
            <Icon className="stat-line-icon" size={22} />
            <div>
              <p>{stat.label}</p>
              <strong>{stat.value}</strong>
              {stat.detail ? <span>{stat.detail}</span> : null}
            </div>
            {stat.action ? (
              <Link className="ghost-action" to={`/dashboard/questions/${data.todayQuestion.id}`}>
                {stat.action}
                <Play size={14} />
              </Link>
            ) : null}
          </article>
        );
      })}
    </section>
  );
}

function RecommendationPanel({ question }: { question: Question }) {
  const point = getKnowledgePoint(question);
  return (
    <section className="panel recommendation-panel">
      <div>
        <span className="tag">今日推荐</span>
        <h3>{question.title}</h3>
        <p>
          先做 1 道低负担题，把七科复习从“想一想”推进到“做一题”。考点：
          {point?.name ?? "核心知识点"}
        </p>
      </div>
      <Link className="big-start-button" to={`/dashboard/questions/${question.id}`}>
        开始 5 分钟刷题
        <Play size={16} />
      </Link>
    </section>
  );
}

function HeatmapCard({ data }: { data: ReturnType<typeof getDashboardData> }) {
  return (
    <section className="panel heatmap-card">
      <h3>做题贡献（最近90天）</h3>
      <div className="heat-stats">
        <div>
          <strong>{data.activeDays}</strong>
          <span>做题天数</span>
        </div>
        <div>
          <strong>{data.done}</strong>
          <span>累计题数</span>
        </div>
      </div>
      <div className="heatmap-wrap">
        <div className="weekday-labels">
          <span>周一</span>
          <span>周三</span>
          <span>周五</span>
        </div>
        <div>
          <div className="month-labels">
            <span>4月</span>
            <span>5月</span>
            <span>6月</span>
          </div>
          <div className="heatmap-grid">
            {data.heatmap.map((level, index) => (
              <span key={index} className={`heat heat-${level}`} title={`第${index + 1}天`} />
            ))}
          </div>
        </div>
      </div>
      <div className="legend">
        <span>少</span>
        {[0, 1, 2, 3, 4].map((level) => (
          <i key={level} className={`heat heat-${level}`} />
        ))}
        <span>多</span>
      </div>
    </section>
  );
}

function NoticeBoard() {
  return (
    <section className="panel notice-card">
      <h3>公告栏</h3>
      <div className="notice-list">
        <article>
          <span className="tag">系统</span>
          <strong>题库内核 v1 已开启本地练习</strong>
          <b>new</b>
          <time>2026-06-17 23:30</time>
        </article>
        <article>
          <span className="tag">系统</span>
          <strong>真题来源索引保留为待授权资料池</strong>
          <b>new</b>
          <time>2026-06-17 22:20</time>
        </article>
      </div>
    </section>
  );
}

function StudyPrompt() {
  return (
    <section className="panel promo-panel">
      <h3>心理学考研怎么提分？先把七科框架搭稳！</h3>
      <a className="promo-card bilibili-card" href="https://www.bilibili.com" target="_blank" rel="noreferrer">
        <span>312备考</span>
        <small>有问题请找他</small>
        <div className="avatar">心</div>
        <strong>心理学备考研究室</strong>
        <em>Bilibili</em>
      </a>
      <div className="promo-card wechat-card">
        <span>312备考</span>
        <small>扫码关注</small>
        <div className="qr">312</div>
        <strong>普心实验统计</strong>
        <em>微信公众号</em>
      </div>
    </section>
  );
}

function ProgressPanel({ data }: { data: ReturnType<typeof getDashboardData> }) {
  return (
    <section className="panel progress-panel">
      <div className="section-title">
        <h3>七科掌握进度</h3>
        <span>七科平均掌握率 {data.average}%</span>
      </div>
      <div className="subject-grid">
        {data.subjectStats.map((subject) => {
          const progress = subject.total ? Math.round((subject.done / subject.total) * 100) : 0;
          const remaining = subject.total - subject.done;
          return (
            <article className="subject-card" key={subject.name}>
              <header>
                <strong>{subject.name}</strong>
                <span>{subject.total}题</span>
              </header>
              <div className="subject-numbers">
                <div>
                  <b>{progress}%</b>
                  <span>做题进度</span>
                </div>
                <div>
                  <b>{subject.mastery}%</b>
                  <span>掌握率</span>
                </div>
              </div>
              <div className="progress-track">
                <i style={{ width: `${progress}%` }} />
              </div>
              <div className="pill-row">
                <span className="pill good">掌握 {subject.strong}</span>
                <span className="pill warn">不熟 {subject.shaky}</span>
                <span className="pill bad">不会 {subject.weak}</span>
                <span className="pill muted">未做 {remaining}</span>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function BetaPanel() {
  return (
    <section className="panel side-panel">
      <h3>Beta 功能</h3>
      <div className="beta-grid">
        {betaFeatures.map((feature) => {
          const Icon = feature.icon;
          return (
            <button className={feature.active ? "available" : ""} key={feature.label}>
              <Icon size={17} />
              {feature.label}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function FavoritesPanel({ attempts }: { attempts: AttemptsByQuestion }) {
  const collected = questions.filter((question) => attempts[question.id]?.isCollected);
  return (
    <section className="panel favorites-panel">
      <div className="section-title">
        <h3>我的收藏夹</h3>
        <button>收藏 {collected.length} 题</button>
      </div>
      {collected.length ? (
        <div className="favorite-list">
          {collected.slice(0, 5).map((question) => (
            <Link to={`/dashboard/questions/${question.id}`} key={question.id}>
              <strong>{question.title}</strong>
              <span>{question.subject} · {questionTypeName(question.type)}</span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="empty-folder">
          <Folder size={48} />
          <span>暂无收藏夹</span>
        </div>
      )}
    </section>
  );
}

function SideActions() {
  return (
    <div className="side-actions">
      <button>
        <MessageCircle size={22} />
        <span>
          <strong>意见反馈</strong>
          Bug / 建议 / 问题
        </span>
      </button>
      <button className="support">
        <Heart size={22} />
        <span>
          <strong>支持项目</strong>
          请作者喝杯咖啡 <Coffee size={13} />
        </span>
      </button>
    </div>
  );
}

function DashboardPage({ attempts }: { attempts: AttemptsByQuestion }) {
  const data = useMemo(() => getDashboardData(attempts), [attempts]);
  return (
    <main className="app-shell">
      <RecommendationPanel question={data.todayQuestion} />
      <StatCards data={data} />
      <div className="dashboard-grid">
        <div className="main-column">
          <div className="top-panels">
            <HeatmapCard data={data} />
            <NoticeBoard />
            <StudyPrompt />
          </div>
          <ProgressPanel data={data} />
        </div>
        <aside className="side-column">
          <BetaPanel />
          <FavoritesPanel attempts={attempts} />
          <SideActions />
        </aside>
      </div>
    </main>
  );
}

function PageTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="page-title">
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

function QuestionsPage({ attempts }: { attempts: AttemptsByQuestion }) {
  const [subject, setSubject] = useState("全部");
  const [type, setType] = useState("全部题型");
  const [mastery, setMastery] = useState("全部状态");
  const filteredQuestions = questions.filter((question) => {
    const attempt = attempts[question.id];
    const matchSubject = subject === "全部" || question.subject === subject;
    const matchType = type === "全部题型" || questionTypeName(question.type) === type;
    const label = attempt?.mastery ? MASTERY_LABELS[attempt.mastery] : "未做";
    const matchMastery = mastery === "全部状态" || label === mastery;
    return matchSubject && matchType && matchMastery;
  });

  return (
    <main className="app-shell">
      <PageTitle title="真题总览" subtitle="按年份、科目、题型和掌握状态筛选 312 真题。" />
      <section className="panel page-panel">
        <div className="section-title">
          <h3>按科目筛选</h3>
          <button
            onClick={() => {
              setSubject("全部");
              setType("全部题型");
              setMastery("全部状态");
            }}
          >
            重置筛选
          </button>
        </div>
        <div className="filter-row">
          {["全部", ...SUBJECT_NAMES].map((item) => (
            <button className={subject === item ? "selected" : ""} key={item} onClick={() => setSubject(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="filter-row compact-filter">
          {["全部题型", ...Object.values(QUESTION_TYPE_LABELS)].map((item) => (
            <button className={type === item ? "selected" : ""} key={item} onClick={() => setType(item)}>
              {item}
            </button>
          ))}
          {["全部状态", "掌握", "不熟", "不会", "未做"].map((item) => (
            <button className={mastery === item ? "selected" : ""} key={item} onClick={() => setMastery(item)}>
              {item}
            </button>
          ))}
        </div>
        <div className="question-table">
          {filteredQuestions.map((question) => {
            const attempt = attempts[question.id];
            const point = getKnowledgePoint(question);
            const status = attempt?.mastery ? MASTERY_LABELS[attempt.mastery] : "未做";
            return (
              <article className="question-row" key={question.id}>
                <div>
                  <strong>{question.title}</strong>
                  <span>
                    {question.year} · {question.subject} · {questionTypeName(question.type)} · {SOURCE_TYPE_LABELS[question.sourceType]}
                  </span>
                  <small>考点：{point?.name ?? "待标注"} · 来源：{question.sourceName}</small>
                </div>
                <div className="row-progress">
                  <i style={{ width: isAnswered(attempt) ? "100%" : "0%" }} />
                </div>
                <span className={attempt?.isCollected ? "status saved" : "status muted"}>{status}</span>
                <Link className="primary-mini" to={`/dashboard/questions/${question.id}`}>
                  开始练习
                </Link>
              </article>
            );
          })}
        </div>
      </section>
      <section className="panel page-panel source-panel">
        <div className="section-title">
          <h3>已检索资料源</h3>
          <span>仅作来源索引，未授权内容不直接导入题库</span>
        </div>
        <div className="source-grid">
          {resourceSources.map((source) => (
            <a href={source.url} target="_blank" rel="noreferrer" key={source.name}>
              <strong>{source.name}</strong>
              <span>{source.value}</span>
              <ArrowUpRight size={16} />
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

function QuestionDetailPage({
  attempts,
  saveAttempt,
}: {
  attempts: AttemptsByQuestion;
  saveAttempt: (questionId: string, patch: Partial<Attempt>) => void;
}) {
  const { questionId } = useParams();
  const question = questions.find((item) => item.id === questionId);
  const [selected, setSelected] = useState<string[]>([]);
  const [submitted, setSubmitted] = useState(false);
  if (!question) {
    return (
      <main className="app-shell">
        <PageTitle title="题目不存在" subtitle="请回到真题总览重新选择题目。" />
      </main>
    );
  }
  const attempt = getAttempt(attempts, question.id);
  const objective = question.type === "single" || question.type === "multiple";
  const pointNames = question.knowledgePointIds
    .map((id) => knowledgePoints.find((point) => point.id === id)?.name)
    .filter(Boolean)
    .join("、");
  const showFeedback = submitted || isAnswered(attempt);
  const currentSelection = selected.length ? selected : Array.isArray(attempt.selectedAnswer) ? attempt.selectedAnswer : attempt.selectedAnswer ? [attempt.selectedAnswer] : [];

  function chooseOption(optionId: string) {
    if (question.type === "multiple") {
      setSelected((value) => (value.includes(optionId) ? value.filter((item) => item !== optionId) : [...value, optionId]));
      return;
    }
    setSelected([optionId]);
  }

  function submitAnswer() {
    const value = question.type === "multiple" ? selected : selected[0];
    const isCorrect = objective ? answerMatches(question, value) : undefined;
    setSubmitted(true);
    saveAttempt(question.id, {
      selectedAnswer: value,
      isCorrect,
      mastery: attempt.mastery === "unmarked" ? (isCorrect ? "mastered" : "shaky") : attempt.mastery,
      answeredAt: todayIso(),
    });
  }

  function markMastery(mastery: Mastery) {
    saveAttempt(question.id, {
      mastery,
      answeredAt: attempt.answeredAt || todayIso(),
    });
  }

  function toggleCollect() {
    saveAttempt(question.id, {
      isCollected: !attempt.isCollected,
      answeredAt: attempt.answeredAt || "",
    });
  }

  const nextQuestion = questions[(questions.findIndex((item) => item.id === question.id) + 1) % questions.length];

  return (
    <main className="app-shell">
      <PageTitle title={question.title} subtitle={`${question.subject} · ${questionTypeName(question.type)} · ${question.sourceName}`} />
      <section className="panel question-detail">
        <div className="question-meta">
          <span>{question.year}</span>
          <span>{question.number}</span>
          <span>{SOURCE_TYPE_LABELS[question.sourceType]}</span>
          <span>版权：{question.copyrightStatus === "owned" ? "自有/原创" : question.copyrightStatus}</span>
        </div>
        <h2>{question.stem}</h2>
        {question.options ? (
          <div className="option-list">
            {question.options.map((option) => (
              <button
                className={currentSelection.includes(option.id) ? "option selected" : "option"}
                key={option.id}
                onClick={() => chooseOption(option.id)}
              >
                {option.id}. {option.text}
              </button>
            ))}
          </div>
        ) : (
          <div className="self-check-box">
            <strong>自评模式</strong>
            <p>先在纸上或心里作答，再点击提交查看参考答案和解析。</p>
          </div>
        )}
        <div className="question-actions">
          <button className="primary-mini" disabled={objective && !selected.length} onClick={submitAnswer}>
            提交答案
          </button>
          <button className="soft-button" onClick={toggleCollect}>
            {attempt.isCollected ? "取消收藏" : "收藏本题"}
          </button>
          <Link className="soft-link" to={`/dashboard/questions/${nextQuestion.id}`}>
            下一题
          </Link>
        </div>
      </section>
      {showFeedback ? (
        <section className="panel answer-panel">
          <div className={attempt.isCorrect === false ? "answer-result wrong" : "answer-result right"}>
            <CheckCircle2 size={18} />
            {objective ? (attempt.isCorrect ? "回答正确" : "回答有误") : "参考答案已展示"}
          </div>
          <div className="answer-grid">
            <article>
              <h3>正确答案</h3>
              <p>{formatAnswer(question.answer)}</p>
            </article>
            <article>
              <h3>答案解析</h3>
              <p>{question.explanation}</p>
            </article>
            <article>
              <h3>考点</h3>
              <p>{pointNames}</p>
            </article>
            <article>
              <h3>易错点</h3>
              <p>{question.trap}</p>
            </article>
            <article>
              <h3>回到教材</h3>
              <p>{question.textbook}</p>
            </article>
            {question.solutionSteps ? (
              <article>
                <h3>解题步骤</h3>
                <ol>
                  {question.solutionSteps.map((step) => (
                    <li key={step}>{step}</li>
                  ))}
                </ol>
              </article>
            ) : null}
          </div>
          <div className="mastery-actions">
            <button onClick={() => markMastery("mastered")}>标记掌握</button>
            <button onClick={() => markMastery("shaky")}>标记不熟</button>
            <button onClick={() => markMastery("unknown")}>标记不会</button>
          </div>
        </section>
      ) : null}
    </main>
  );
}

function AnalysisPage({ attempts }: { attempts: AttemptsByQuestion }) {
  const data = getDashboardData(attempts);
  const weaknessItems = getWeaknessItems(attempts);
  return (
    <main className="app-shell">
      <PageTitle title="真题分析" subtitle="把做题结果转成可行动的薄弱点和下一步训练建议。" />
      <div className="analysis-grid">
        <section className="panel page-panel">
          <div className="section-title">
            <h3>掌握雷达</h3>
            <span>综合掌握 {data.average}%</span>
          </div>
          <div className="radar-list">
            {data.subjectStats.map((subject) => (
              <div className="radar-line" key={subject.name}>
                <span>{subject.name}</span>
                <div className="progress-track">
                  <i style={{ width: `${subject.mastery}%` }} />
                </div>
                <strong>{subject.mastery}%</strong>
              </div>
            ))}
          </div>
        </section>
        <section className="panel page-panel">
          <div className="section-title">
            <h3>薄弱模块</h3>
            <Sparkles size={18} />
          </div>
          <div className="weakness-list">
            {weaknessItems.map((item) => (
              <article key={item.name}>
                <div>
                  <strong>{item.name}</strong>
                  <p>{item.subject}：{item.advice}</p>
                </div>
                <span>{item.value}%</span>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function GraphPage() {
  const nodes = knowledgePoints.slice(0, 9);
  return (
    <main className="app-shell">
      <PageTitle title="知识图谱" subtitle="用概念节点连接七科知识，把真题落回教材结构。" />
      <section className="panel page-panel graph-page">
        <div className="section-title">
          <h3>312知识图谱</h3>
          <span>核心概念网络</span>
        </div>
        <div className="concept-map">
          <div className="concept-core">312</div>
          {nodes.map((node, index) => (
            <span className={`concept-node node-${index + 1}`} key={node.id}>
              {node.name}
            </span>
          ))}
        </div>
        <div className="graph-insights">
          <article>
            <strong>高频链路</strong>
            <p>选择性注意、工作记忆、实验设计和方差分析是当前 v1 题库的主干节点。</p>
          </article>
          <article>
            <strong>建议复习</strong>
            <p>先补统计推断和实验范式，它们会影响综合题解释质量。</p>
          </article>
        </div>
      </section>
    </main>
  );
}

function StatsPage({ attempts }: { attempts: AttemptsByQuestion }) {
  const weeklyStats = getWeeklyStats(attempts);
  const typeStats = getTypeStats(attempts);
  const total = weeklyStats.reduce((sum, item) => sum + item.count, 0);
  return (
    <main className="app-shell">
      <PageTitle title="数据统计" subtitle="追踪每天的做题量、正确率和题型稳定性。" />
      <div className="stats-grid">
        <section className="panel page-panel">
          <div className="section-title">
            <h3>本周学习统计</h3>
            <span>共 {total} 题</span>
          </div>
          <div className="bar-chart">
            {weeklyStats.map((item) => (
              <div className="bar-item" key={item.day}>
                <span>{item.count}</span>
                <i style={{ height: `${Math.max(item.count * 28, 6)}px` }} />
                <small>{item.day}</small>
              </div>
            ))}
          </div>
        </section>
        <section className="panel page-panel">
          <div className="section-title">
            <h3>题型正确率</h3>
            <BarChart3 size={18} />
          </div>
          <div className="type-list">
            {typeStats.map((item) => (
              <article key={item.type}>
                <span>{item.type}</span>
                <div className="progress-track">
                  <i style={{ width: `${item.accuracy}%` }} />
                </div>
                <strong>{item.accuracy}%</strong>
              </article>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function MobileTabs() {
  return (
    <nav className="mobile-tabs" aria-label="移动端导航">
      <NavLink to="/dashboard/">
        <BarChart3 size={18} />
        面板
      </NavLink>
      <NavLink to="/dashboard/questions">
        <BookOpenCheck size={18} />
        总览
      </NavLink>
      <NavLink to="/dashboard/graph">
        <Network size={18} />
        图谱
      </NavLink>
      <NavLink to="/dashboard/analysis">
        <Star size={18} />
        分析
      </NavLink>
      <NavLink to="/dashboard/stats">
        <Trophy size={18} />
        统计
      </NavLink>
    </nav>
  );
}

export default function App() {
  const [attempts, setAttempts] = useState<AttemptsByQuestion>(() => readAttempts());

  function saveAttempt(questionId: string, patch: Partial<Attempt>) {
    setAttempts((current) => {
      const nextAttempt = {
        ...getAttempt(current, questionId),
        ...patch,
        questionId,
      };
      const next = { ...current, [questionId]: nextAttempt };
      window.localStorage.setItem(ATTEMPTS_STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }

  return (
    <div className="dashboard-app">
      <Header />
      <Routes>
        <Route path="/" element={<DashboardPage attempts={attempts} />} />
        <Route path="/dashboard" element={<DashboardPage attempts={attempts} />} />
        <Route path="/dashboard/" element={<DashboardPage attempts={attempts} />} />
        <Route path="/dashboard/questions" element={<QuestionsPage attempts={attempts} />} />
        <Route path="/dashboard/questions/:questionId" element={<QuestionDetailPage attempts={attempts} saveAttempt={saveAttempt} />} />
        <Route path="/dashboard/analysis" element={<AnalysisPage attempts={attempts} />} />
        <Route path="/dashboard/graph" element={<GraphPage />} />
        <Route path="/dashboard/stats" element={<StatsPage attempts={attempts} />} />
      </Routes>
      <MobileTabs />
    </div>
  );
}
