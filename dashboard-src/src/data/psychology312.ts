export const ATTEMPTS_STORAGE_KEY = "psychology312-attempts-v1";

export type QuestionType = "single" | "multiple" | "short" | "essay" | "calculation";
export type SourceType = "real" | "practice" | "simulate" | "original";
export type CopyrightStatus = "owned" | "licensed" | "index-only" | "unknown";
export type Mastery = "mastered" | "shaky" | "unknown" | "unmarked";

export type Option = {
  id: string;
  text: string;
};

export type Question = {
  id: string;
  year: string;
  number: string;
  subject: string;
  type: QuestionType;
  title: string;
  stem: string;
  options?: Option[];
  answer: string | string[];
  explanation: string;
  sourceType: SourceType;
  sourceName: string;
  sourceUrl?: string;
  copyrightStatus: CopyrightStatus;
  knowledgePointIds: string[];
  trap: string;
  textbook: string;
  solutionSteps?: string[];
};

export type Attempt = {
  questionId: string;
  selectedAnswer?: string | string[];
  isCorrect?: boolean;
  mastery: Mastery;
  isCollected: boolean;
  answeredAt: string;
};

export type KnowledgePoint = {
  id: string;
  name: string;
  subject: string;
  chapter: string;
};

export const SUBJECT_NAMES = [
  "普通心理学",
  "发展心理学",
  "实验心理学",
  "心理统计",
  "心理测量",
  "教育心理学",
  "社会心理学",
  "变态心理学",
];

export const QUESTION_TYPE_LABELS: Record<QuestionType, string> = {
  single: "单选题",
  multiple: "多选题",
  short: "简答题",
  essay: "论述题",
  calculation: "计算题",
};

export const SOURCE_TYPE_LABELS: Record<SourceType, string> = {
  real: "真题",
  practice: "习题册",
  simulate: "模拟题",
  original: "原创题",
};

export const MASTERY_LABELS: Record<Mastery, string> = {
  mastered: "掌握",
  shaky: "不熟",
  unknown: "不会",
  unmarked: "未标记",
};

export const knowledgePoints: KnowledgePoint[] = [
  { id: "kp-attention-selective", name: "选择性注意", subject: "普通心理学", chapter: "注意" },
  { id: "kp-memory-working", name: "工作记忆", subject: "普通心理学", chapter: "记忆" },
  { id: "kp-motivation", name: "动机冲突", subject: "普通心理学", chapter: "动机" },
  { id: "kp-emotion", name: "情绪理论", subject: "普通心理学", chapter: "情绪" },
  { id: "kp-piaget", name: "皮亚杰认知发展", subject: "发展心理学", chapter: "认知发展" },
  { id: "kp-attachment", name: "依恋类型", subject: "发展心理学", chapter: "社会性发展" },
  { id: "kp-experiment-design", name: "实验设计", subject: "实验心理学", chapter: "变量控制" },
  { id: "kp-reaction-time", name: "反应时法", subject: "实验心理学", chapter: "经典范式" },
  { id: "kp-signal-detection", name: "信号检测论", subject: "实验心理学", chapter: "心理物理法" },
  { id: "kp-anova", name: "方差分析", subject: "心理统计", chapter: "推断统计" },
  { id: "kp-correlation", name: "相关与回归", subject: "心理统计", chapter: "相关分析" },
  { id: "kp-t-test", name: "t 检验", subject: "心理统计", chapter: "均值差异检验" },
  { id: "kp-reliability", name: "信度", subject: "心理测量", chapter: "测验质量" },
  { id: "kp-validity", name: "效度", subject: "心理测量", chapter: "测验质量" },
  { id: "kp-norm", name: "常模", subject: "心理测量", chapter: "测验解释" },
  { id: "kp-learning-transfer", name: "学习迁移", subject: "教育心理学", chapter: "学习心理" },
  { id: "kp-achievement-motivation", name: "成就动机", subject: "教育心理学", chapter: "学习动机" },
  { id: "kp-attribution", name: "归因理论", subject: "社会心理学", chapter: "社会认知" },
  { id: "kp-conformity", name: "从众", subject: "社会心理学", chapter: "社会影响" },
  { id: "kp-anxiety", name: "焦虑障碍", subject: "变态心理学", chapter: "常见障碍" },
];

export const questions: Question[] = [
  {
    id: "real-2026-001",
    year: "2026",
    number: "第1题",
    subject: "普通心理学",
    type: "single",
    title: "2026 312心理学真题 第1题",
    stem: "心理学在关注人生挫折的同时，还要关注人生中的美好事物，注重积极品质的培养，持这种观点的心理学家是（ ）。",
    options: [
      {
        "id": "A",
        "text": "巴斯"
      },
      {
        "id": "B",
        "text": "萨洛维"
      },
      {
        "id": "C",
        "text": "贝克"
      },
      {
        "id": "D",
        "text": "塞利格曼"
      }
    ],
    answer: "D",
    explanation: "塞利格曼是积极心理学的创始人之一，他主张心理学不仅要关注心理疾病的治疗，还要关注人类的积极品质和美好生活，如幸福、希望、乐观等。题目中描述的“关注人生中的美好事物，注重积极品质的培养”正是积极心理学的核心观点。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-attention-selective"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-002",
    year: "2026",
    number: "第2题",
    subject: "普通心理学",
    type: "single",
    title: "2026 312心理学真题 第2题",
    stem: "人的大脑皮层机能分区中，面积最大的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "听觉区"
      },
      {
        "id": "B",
        "text": "躯体运动区"
      },
      {
        "id": "C",
        "text": "联合区"
      },
      {
        "id": "D",
        "text": "躯体感觉区"
      }
    ],
    answer: "C",
    explanation: "大脑皮层分为不同的机能区域，包括感觉区、运动区和联合区。联合区在人类大脑皮层中占据的面积最大，约占整个大脑皮层的 3/4。联合区负责高级认知功能，如知觉、思维、记忆、语言等，是人类与其他动物大脑结构的重要区别之一。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-memory-working"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-003",
    year: "2026",
    number: "第3题",
    subject: "普通心理学",
    type: "single",
    title: "2026 312心理学真题 第3题",
    stem: "日常生活中可以边跑步边聊天，但是在参加竞赛等时候要全神贯注，下列选项中解释该现象的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "衰减理论"
      },
      {
        "id": "B",
        "text": "过滤器理论"
      },
      {
        "id": "C",
        "text": "认知资源理论"
      },
      {
        "id": "D",
        "text": "反应选择理论"
      }
    ],
    answer: "C",
    explanation: "认知资源理论认为，注意是一种有限的认知资源，个体可以同时进行多项任务，但前提是这些任务所需的认知资源总和不超过可用资源。日常跑步聊天时，两项任务所需资源较少，可以同时进行；竞赛时需要更多资源集中于比赛，所以无法同时聊天。这与题干描述的现象一致。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-attention-selective"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-004",
    year: "2026",
    number: "第4题",
    subject: "普通心理学",
    type: "single",
    title: "2026 312心理学真题 第4题",
    stem: "注意的品质不包括（ ）。",
    options: [
      {
        "id": "A",
        "text": "注意起伏"
      },
      {
        "id": "B",
        "text": "注意分配"
      },
      {
        "id": "C",
        "text": "注意广度"
      },
      {
        "id": "D",
        "text": "注意转移"
      }
    ],
    answer: "A",
    explanation: "注意的品质通常包括注意广度（范围）、注意稳定性、注意分配、注意转移等。注意起伏（注意动摇）是指注意在短暂时间内的周期性变化，虽然是一种注意现象，但通常不被列为注意的基本品质。注意起伏是注意稳定性的反面表现，而非独立的品质维度。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-attention-selective"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-005",
    year: "2026",
    number: "第5题",
    subject: "普通心理学",
    type: "single",
    title: "2026 312心理学真题 第5题",
    stem: "根据休伯和维泽尔的观点，外侧膝状体细胞呈圆形，其中间和周围的关系是（ ）。",
    options: [
      {
        "id": "A",
        "text": "层级关系"
      },
      {
        "id": "B",
        "text": "并列关系"
      },
      {
        "id": "C",
        "text": "对抗关系"
      },
      {
        "id": "D",
        "text": "抑制关系"
      }
    ],
    answer: "C",
    explanation: "休伯和维泽尔对视网膜神经节细胞和外侧膝状体细胞的研究发现，外侧膝状体细胞具有中心-周围对抗的感受野结构，即细胞对中心区域和周围区域的刺激反应相反——中心兴奋时周围抑制，中心抑制时周围兴奋。这种对抗关系增强了视觉系统对边缘和对比度的检测能力。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-attention-selective"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-006",
    year: "2026",
    number: "第6题",
    subject: "普通心理学",
    type: "single",
    title: "2026 312心理学真题 第6题",
    stem: "刺激的持续作用使感受性发生变化，这个现象属于（ ）。",
    options: [
      {
        "id": "A",
        "text": "感觉统合"
      },
      {
        "id": "B",
        "text": "感觉适应"
      },
      {
        "id": "C",
        "text": "感觉对比"
      },
      {
        "id": "D",
        "text": "感觉后效"
      }
    ],
    answer: "B",
    explanation: "感觉适应是指刺激持续作用于感受器，使感受性发生变化的现象。例如，进入暗室时最初看不见东西，一段时间后能看见，这是视觉的暗适应；长时间闻某种气味后嗅觉迟钝，这是嗅觉适应。题干描述正是感觉适应的定义。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-attention-selective"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-007",
    year: "2026",
    number: "第7题",
    subject: "普通心理学",
    type: "single",
    title: "2026 312心理学真题 第7题",
    stem: "下列选项中不属于黑林四色说的内容的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "存在红、绿、黄、蓝四种原色"
      },
      {
        "id": "B",
        "text": "存在红-绿、黄-蓝、白-黑三对对立的颜色过程"
      },
      {
        "id": "C",
        "text": "颜色经验由三种感受器按相应比例产生"
      },
      {
        "id": "D",
        "text": "视觉系统对一种颜色产生疲劳反应后，与之对应的颜色过程会被激活"
      }
    ],
    answer: "C",
    explanation: "黑林的四色说（对立过程理论）认为，视觉系统存在三对对立的颜色过程：红-绿、黄-蓝、白-黑，并解释了视觉后像等现象。选项 C“颜色经验由三种感受器按相应比例产生”是三色说（杨-赫尔姆霍兹理论）的观点，不是黑林四色说的内容。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-attention-selective"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-008",
    year: "2026",
    number: "第8题",
    subject: "普通心理学",
    type: "single",
    title: "2026 312心理学真题 第8题",
    stem: "晶状体的形状需要发生一定程度的变化，才能将不同距离的物体聚焦成像，这个过程称为（ ）。",
    options: [
      {
        "id": "A",
        "text": "眼跳"
      },
      {
        "id": "B",
        "text": "调节"
      },
      {
        "id": "C",
        "text": "线条透视"
      },
      {
        "id": "D",
        "text": "对象重叠"
      }
    ],
    answer: "B",
    explanation: "调节是指眼睛通过改变晶状体的曲度来使不同距离的物体在视网膜上清晰成像的过程。看近物时，睫状肌收缩，晶状体变凸；看远物时，睫状肌松弛，晶状体变平。这是视觉深度知觉的生理线索之一。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-attention-selective"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-009",
    year: "2026",
    number: "第9题",
    subject: "普通心理学",
    type: "single",
    title: "2026 312心理学真题 第9题",
    stem: "学习一段材料，尝试再认和回忆比简单重复的效果要好得多，体现了（ ）。",
    options: [
      {
        "id": "A",
        "text": "测试效应"
      },
      {
        "id": "B",
        "text": "复述效应"
      },
      {
        "id": "C",
        "text": "编码特异性原理"
      },
      {
        "id": "D",
        "text": "蔡格尼克效应"
      }
    ],
    answer: "A",
    explanation: "测试效应（testing effect）是指主动提取信息（如自测、回忆、再认）比单纯重复学习材料更有利于记忆保持。大量研究表明，测试本身是一种高效的学习策略，能够强化记忆痕迹。题干描述的“尝试再认和回忆比简单重复效果好”正是测试效应的体现。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-memory-working",
      "kp-learning-transfer"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-010",
    year: "2026",
    number: "第10题",
    subject: "普通心理学",
    type: "single",
    title: "2026 312心理学真题 第10题",
    stem: "关于斯柏林的感觉记忆研究，下列选项正确的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "三种词汇矩阵持续时间 1 秒钟"
      },
      {
        "id": "B",
        "text": "整体报告法优于部分报告法"
      },
      {
        "id": "C",
        "text": "感觉记忆的容量很少，为四到五个"
      },
      {
        "id": "D",
        "text": "三种声音随机出现"
      }
    ],
    answer: "D",
    explanation: "斯柏林（Sperling）的感觉记忆研究使用部分报告法，发现视觉感觉记忆的容量很大（约 9 个以上项目），但持续时间很短（约 0.5 秒）。在部分报告法中，被试听到随机出现的高、中、低三种声音之一，提示报告哪一行字母。选项D“三种声音随机出现”是正确的描述。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-memory-working"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-011",
    year: "2026",
    number: "第11题",
    subject: "普通心理学",
    type: "single",
    title: "2026 312心理学真题 第11题",
    stem: "根据吉尔福特的理论，衡量发散思维的三个指标是（ ）。",
    options: [
      {
        "id": "A",
        "text": "流畅性、变通性、批判性"
      },
      {
        "id": "B",
        "text": "流畅性、独特性、深刻性"
      },
      {
        "id": "C",
        "text": "流畅性、变通性、独特性"
      },
      {
        "id": "D",
        "text": "变通性、深刻性、批判性"
      }
    ],
    answer: "C",
    explanation: "吉尔福特（Guilford）提出发散思维是创造性思维的核心，其衡量指标包括：流畅性（单位时间内产生想法的数量）、变通性（思维灵活转换的能力，能够产生不同类型想法）、独特性（产生新颖、独特想法的能力）。这三个指标是衡量发散思维的基本维度。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-attention-selective"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-012",
    year: "2026",
    number: "第12题",
    subject: "普通心理学",
    type: "single",
    title: "2026 312心理学真题 第12题",
    stem: "下列选项中符合激活扩散模型的说法的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "每层概念的节点上只存储该概念的独有特征"
      },
      {
        "id": "B",
        "text": "每个节点的层级越高，其抽象概括水平越高"
      },
      {
        "id": "C",
        "text": "连线长短表示概念之间的紧密程度"
      },
      {
        "id": "D",
        "text": "概念层级的特征是按逻辑关系组织的"
      }
    ],
    answer: "C",
    explanation: "激活扩散模型（Collins & Loftus）认为，概念在语义网络中按语义相似性组织，概念间的连线长短表示其紧密程度（相关性）。与层次网络模型不同，激活扩散模型不强调严格的层级结构，而是更灵活的网络结构。选项 C 正确描述了这一特点。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-correlation"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-013",
    year: "2026",
    number: "第13题",
    subject: "普通心理学",
    type: "single",
    title: "2026 312心理学真题 第13题",
    stem: "正念冥想的要素不包括（ ）。",
    options: [
      {
        "id": "A",
        "text": "认知重评"
      },
      {
        "id": "B",
        "text": "非评判性"
      },
      {
        "id": "C",
        "text": "有意识的觉察"
      },
      {
        "id": "D",
        "text": "注意当下"
      }
    ],
    answer: "A",
    explanation: "正念冥想的核心要素包括：有意识地觉察当下、注意当下、对体验保持非评判性的接纳态度。认知重评是情绪调节策略，指改变对情绪事件的理解和评价，这不是正念冥想的构成要素，而是另一种情绪调节方法。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-attention-selective",
      "kp-emotion"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-014",
    year: "2026",
    number: "第14题",
    subject: "普通心理学",
    type: "single",
    title: "2026 312心理学真题 第14题",
    stem: "主张“对生理唤醒和情绪的解释共同决定情绪体验”的心理学家是（ ）。",
    options: [
      {
        "id": "A",
        "text": "兰格"
      },
      {
        "id": "B",
        "text": "巴德"
      },
      {
        "id": "C",
        "text": "沙赫特"
      },
      {
        "id": "D",
        "text": "阿诺德"
      }
    ],
    answer: "C",
    explanation: "沙赫特（Schachter）提出情绪的两因素理论，认为情绪体验由生理唤醒和认知解释共同决定。个体首先体验到生理唤醒，然后根据环境线索对唤醒状态进行认知解释，从而产生特定的情绪体验。这与题干描述完全一致。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-emotion"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-015",
    year: "2026",
    number: "第15题",
    subject: "普通心理学",
    type: "single",
    title: "2026 312心理学真题 第15题",
    stem: "根据戈尔曼的情绪智力观，能够感受他人情绪、了解他人观点、积极关心他人的品质的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "情绪知觉"
      },
      {
        "id": "B",
        "text": "情绪体验"
      },
      {
        "id": "C",
        "text": "社交觉察"
      },
      {
        "id": "D",
        "text": "人际关系管理"
      }
    ],
    answer: "C",
    explanation: "戈尔曼（Goleman）的情绪智力模型包括自我觉察、自我管理、社交觉察和人际关系管理四个维度。社交觉察（也称共情）是指感受他人情绪、理解他人观点、关心他人感受的能力，这与题干描述相符。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-emotion"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-016",
    year: "2026",
    number: "第16题",
    subject: "普通心理学",
    type: "single",
    title: "2026 312心理学真题 第16题",
    stem: "根据动机的唤醒理论，刺激水平与个体偏爱水平的曲线关系是（ ）。",
    options: [
      {
        "id": "A",
        "text": "U 型"
      },
      {
        "id": "B",
        "text": "倒 U 型"
      },
      {
        "id": "C",
        "text": "S 型"
      },
      {
        "id": "D",
        "text": "Z 型"
      }
    ],
    answer: "B",
    explanation: "唤醒理论认为，个体偏好中等水平的唤醒刺激，过低或过高的唤醒水平都会降低偏好。刺激水平与个体偏爱水平之间呈倒 U 型曲线关系，即中等强度的刺激最受欢迎。这一规律也适用于动机与工作效率的关系（耶克斯-多德森定律）。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-motivation"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-017",
    year: "2026",
    number: "第17题",
    subject: "普通心理学",
    type: "single",
    title: "2026 312心理学真题 第17题",
    stem: "根据赫尔的理论，行为的目的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "实现成就"
      },
      {
        "id": "B",
        "text": "降低驱力"
      },
      {
        "id": "C",
        "text": "满足安全需要"
      },
      {
        "id": "D",
        "text": "追求更高的唤醒水平"
      }
    ],
    answer: "B",
    explanation: "赫尔（Hull）提出驱力减少理论，认为行为的目的在于减少由生理需要引起的驱力状态。当有机体处于需要状态时，会产生驱力，驱动个体采取行为以满足需要、降低驱力。这一理论强调行为是由内部驱力驱动的，目标是恢复生理平衡。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-attention-selective"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-018",
    year: "2026",
    number: "第18题",
    subject: "普通心理学",
    type: "single",
    title: "2026 312心理学真题 第18题",
    stem: "在人格五因素中，焦虑、冲动、敌对、压抑属于（ ）。",
    options: [
      {
        "id": "A",
        "text": "神经质"
      },
      {
        "id": "B",
        "text": "精神性"
      },
      {
        "id": "C",
        "text": "外倾性"
      },
      {
        "id": "D",
        "text": "宜人性"
      }
    ],
    answer: "A",
    explanation: "大五人格模型中的神经质（Neuroticism）维度描述个体体验负性情绪（如焦虑、抑郁、愤怒、冲动、压抑）的倾向性。高分者情绪不稳定，容易焦虑、冲动、敌对；低分者情绪稳定，沉着冷静。题干列举的特征均属于神经质维度。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-emotion"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-019",
    year: "2026",
    number: "第19题",
    subject: "发展心理学",
    type: "single",
    title: "2026 312心理学真题 第19题",
    stem: "首次采用问卷法研究儿童心理发展的（ ）。",
    options: [
      {
        "id": "A",
        "text": "霍尔"
      },
      {
        "id": "B",
        "text": "埃里克森"
      },
      {
        "id": "C",
        "text": "普莱尔"
      },
      {
        "id": "D",
        "text": "洛克"
      }
    ],
    answer: "A",
    explanation: "霍尔（G.S. Hall）是儿童心理学的先驱，他首创问卷法研究儿童心理发展，通过大量问卷收集数据，研究儿童的心理特征和发展规律。他的工作推动了儿童心理学的科学化进程。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-piaget"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "发展心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-020",
    year: "2026",
    number: "第20题",
    subject: "发展心理学",
    type: "single",
    title: "2026 312心理学真题 第20题",
    stem: "根据皮亚杰的认知发展理论来分析，掩耳盗铃是属于儿童发展的（ ）。",
    options: [
      {
        "id": "A",
        "text": "感觉运动阶段"
      },
      {
        "id": "B",
        "text": "前运算阶段"
      },
      {
        "id": "C",
        "text": "具体运算阶段"
      },
      {
        "id": "D",
        "text": "形式运算阶段"
      }
    ],
    answer: "B",
    explanation: "掩耳盗铃的故事中，主人公认为捂住自己的耳朵别人就听不到铃声，体现了自我中心主义——无法区分自己的视角和他人的视角。这是皮亚杰前运算阶段（2-7 岁）儿童的典型思维特征，表现为自我中心、泛灵论、缺乏守恒概念等。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-piaget"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "发展心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-021",
    year: "2026",
    number: "第21题",
    subject: "发展心理学",
    type: "single",
    title: "2026 312心理学真题 第21题",
    stem: "关于婴儿的依恋现象，符合认知发展观的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "婴儿具有唤起照料者保证自己存活的特征"
      },
      {
        "id": "B",
        "text": "婴儿的依恋类型受照料者养育行为的影响"
      },
      {
        "id": "C",
        "text": "婴儿出现分离焦虑是由于缺乏安全感"
      },
      {
        "id": "D",
        "text": "婴儿出现陌生人焦虑表明婴儿能区分陌生人和照料者"
      }
    ],
    answer: "D",
    explanation: "认知发展观强调婴儿认知能力对依恋行为的影响。婴儿出现陌生人焦虑（约 6-8 个月）表明他们已经能够区分熟悉和陌生的面孔，具备了客体永久性和记忆能力，能够将当前刺激与已有图式进行比较。这是认知发展在依恋中的体现。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-memory-working",
      "kp-attachment"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "发展心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-022",
    year: "2026",
    number: "第22题",
    subject: "发展心理学",
    type: "single",
    title: "2026 312心理学真题 第22题",
    stem: "关于皮亚杰儿童道德认知发展阶段，下列顺序正确的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "前道德-道德相对-道德绝对"
      },
      {
        "id": "B",
        "text": "前道德-道德绝对-道德相对"
      },
      {
        "id": "C",
        "text": "道德相对-道德绝对-他律道德"
      },
      {
        "id": "D",
        "text": "道德绝对-道德相对-他律道德"
      }
    ],
    answer: "B",
    explanation: "皮亚杰将儿童道德认知发展分为三个阶段：前道德阶段（2-5 岁，无规则意识）、他律道德阶段（5-8 岁，道德绝对，权威主义）、自律道德阶段（8 岁以后，道德相对，考虑意图）。题目中“道德绝对”对应他律道德，“道德相对”对应自律道德，正确顺序是前道德-道德绝对-道德相对。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-piaget"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "发展心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-023",
    year: "2026",
    number: "第23题",
    subject: "发展心理学",
    type: "single",
    title: "2026 312心理学真题 第23题",
    stem: "儿童自我评价发展特点，不正确的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "自我评价内省性增强"
      },
      {
        "id": "B",
        "text": "稳定性增强"
      },
      {
        "id": "C",
        "text": "对多方面的优缺点进行具体评价"
      },
      {
        "id": "D",
        "text": "从顺从他人到有独立见解"
      }
    ],
    answer: "A",
    explanation: "儿童自我评价的发展特点包括：从顺从他人评价到独立评价、评价内容从具体到多方面、评价稳定性随年龄增长而增强。内省性（自我反思的深度）在儿童期发展并不显著，主要在青少年期才明显增强。因此 A 项“自我评价内省性增强”不是儿童期自我评价的主要特点，是不正确的表述。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-piaget"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "发展心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-024",
    year: "2026",
    number: "第24题",
    subject: "发展心理学",
    type: "single",
    title: "2026 312心理学真题 第24题",
    stem: "根据道奇的信息加工理论，儿童受到挫折从面临线索到做出攻击反应的整个信息加工过程包括：译码，解释，和（ ）。",
    options: [
      {
        "id": "A",
        "text": "实施反应过程，搜索反应过程，评价反应过程"
      },
      {
        "id": "B",
        "text": "实施反应过程，评价反应过程，搜索反应过程"
      },
      {
        "id": "C",
        "text": "搜索反应过程，实施反应过程，评价反应过程"
      },
      {
        "id": "D",
        "text": "搜索反应过程，评价反应过程，实施反应过程"
      }
    ],
    answer: "D",
    explanation: "道奇（Dodge）的社会信息加工模型认为，个体在社交情境中经历六个步骤：编码（译码）、解释、搜索反应、评价反应、实施反应。在攻击行为的研究中，儿童从面临线索到做出攻击反应需要经过：译码（获取线索）、解释（理解意图）、搜索反应（寻找可能的反应方式）、评价反应（评估不同反应的后果）、实施反应（执行选择的行为）。正确顺序是搜索反应、评价反应、实施反应。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-attribution"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "发展心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-025",
    year: "2026",
    number: "第25题",
    subject: "发展心理学",
    type: "single",
    title: "2026 312心理学真题 第25题",
    stem: "同一性发展，大学生小娟对于未来的规划积极应对......（活动积极参与，积极寻求解决方案）（ ）。",
    options: [
      {
        "id": "A",
        "text": "同一性延缓"
      },
      {
        "id": "B",
        "text": "同一性早闭"
      },
      {
        "id": "C",
        "text": "同一性混乱"
      },
      {
        "id": "D",
        "text": "同一性获得"
      }
    ],
    answer: "A",
    explanation: "根据玛西亚（Marcia）的同一性状态理论，同一性延缓（moratorium）指个体正处于探索中，尚未做出明确承诺，但积极探索各种可能性。题干描述小娟对未来的规划“积极应对”“活动积极参与”“积极寻求解决方案”，表明她正处于探索阶段但尚未做出最终决定，属于同一性延缓状态。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-piaget"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "发展心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-026",
    year: "2026",
    number: "第26题",
    subject: "发展心理学",
    type: "single",
    title: "2026 312心理学真题 第26题",
    stem: "在黑猩猩解决问题的箱子实验中，当黑猩猩前肢够不着笼顶上的香蕉时，它会先将几个箱子叠起来，然后爬上去就能取到香蕉，苛勒基于该实验提出的学说是（ ）。",
    options: [
      {
        "id": "A",
        "text": "尝试-错误说"
      },
      {
        "id": "B",
        "text": "试误-联结说"
      },
      {
        "id": "C",
        "text": "完型-顿悟说"
      },
      {
        "id": "D",
        "text": "认知-接受说"
      }
    ],
    answer: "C",
    explanation: "苛勒（Köhler）的黑猩猩叠箱实验是格式塔心理学学习理论的经典研究。他发现黑猩猩不是通过盲目尝试解决问题，而是突然领悟到箱子可以叠起来作为工具，从而瞬间解决问题。苛勒由此提出完形-顿悟说，强调学习的实质是认知重组，通过顿悟获得问题的解决方案。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-experiment-design",
      "kp-learning-transfer"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "发展心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-027",
    year: "2026",
    number: "第27题",
    subject: "发展心理学",
    type: "single",
    title: "2026 312心理学真题 第27题",
    stem: "与认知学习理论相比，建构主义学习观认为知识是怎么样的？（ ）",
    options: [
      {
        "id": "A",
        "text": "客观性"
      },
      {
        "id": "B",
        "text": "绝对性"
      },
      {
        "id": "C",
        "text": "动态性"
      },
      {
        "id": "D",
        "text": "稳定性"
      }
    ],
    answer: "C",
    explanation: "建构主义学习观认为知识不是客观存在的绝对真理，而是个体基于已有经验在与环境互动中主动建构的，具有动态性、相对性和情境性。与认知学习理论（认为知识是客观的、稳定的）相比，建构主义强调知识的动态性和建构性。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-learning-transfer"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "发展心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-028",
    year: "2026",
    number: "第28题",
    subject: "发展心理学",
    type: "single",
    title: "2026 312心理学真题 第28题",
    stem: "根据奥苏伯尔提出的认知同化学习理论，下列学习过程中最难的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "上位学习"
      },
      {
        "id": "B",
        "text": "相关类属学习"
      },
      {
        "id": "C",
        "text": "派生类属学习"
      },
      {
        "id": "D",
        "text": "并列组合学习"
      }
    ],
    answer: "D",
    explanation: "奥苏伯尔（Ausubel）的认知同化理论中，不同学习类型的难度不同：派生类属学习（下位学习的一种）最容易，新知识直接纳入原有认知结构；相关类属学习次之，需要扩展或修正原有概念；上位学习需要归纳概括多个概念；并列组合学习最难，因为新知识与原有认知结构中的概念无上下位关系，需要建立新的联系。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-correlation",
      "kp-learning-transfer"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "发展心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-029",
    year: "2026",
    number: "第29题",
    subject: "发展心理学",
    type: "single",
    title: "2026 312心理学真题 第29题",
    stem: "在加涅提出的学习的信息加工模式中，执行控制对应着什么？（ ）",
    options: [
      {
        "id": "A",
        "text": "学习动机"
      },
      {
        "id": "B",
        "text": "认知策略"
      },
      {
        "id": "C",
        "text": "结果反馈"
      },
      {
        "id": "D",
        "text": "学习准备"
      }
    ],
    answer: "B",
    explanation: "加涅（Gagné）的学习信息加工模式中，执行控制（executive control）负责调节和监控信息加工过程，决定注意的选择、编码策略、提取方式等，与认知策略（cognitive strategies）相对应。执行控制是学习者管理和调控自己学习过程的元认知能力。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-attention-selective",
      "kp-learning-transfer"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "发展心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-030",
    year: "2026",
    number: "第30题",
    subject: "发展心理学",
    type: "single",
    title: "2026 312心理学真题 第30题",
    stem: "为了帮助学生更好地理解所学的知识，教师往往要求学生对所学的原理做出推论，这属于下列哪种策略（ ）。",
    options: [
      {
        "id": "A",
        "text": "复述策略"
      },
      {
        "id": "B",
        "text": "监控策略"
      },
      {
        "id": "C",
        "text": "精细加工策略"
      },
      {
        "id": "D",
        "text": "编码组织策略"
      }
    ],
    answer: "C",
    explanation: "精细加工策略是指对学习材料进行深度加工，通过联想、推理、举例、解释等方式赋予材料意义，促进理解和记忆。要求学生“对所学的原理做出推论”属于精细加工策略，因为推论是在原有知识基础上进行推理和延伸，建立新联系。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-memory-working",
      "kp-learning-transfer"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "发展心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-031",
    year: "2026",
    number: "第31题",
    subject: "教育心理学",
    type: "single",
    title: "2026 312心理学真题 第31题",
    stem: "有人认为学习拉丁语无意义，但可锻炼心智，这种迁移理论是（ ）。",
    options: [
      {
        "id": "A",
        "text": "形式训练说"
      },
      {
        "id": "B",
        "text": "共同因素说"
      },
      {
        "id": "C",
        "text": "经验类化说"
      },
      {
        "id": "D",
        "text": "关系转移说"
      }
    ],
    answer: "A",
    explanation: "形式训练说认为，学习的内容本身并不重要，重要的是通过特定学习活动（如学习古典语言、数学等）锻炼人的心智能力（如记忆力、推理能力），这些能力可以迁移到其他领域。题干“学习拉丁语无意义，但可锻炼心智”正是形式训练说的典型观点。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-memory-working",
      "kp-learning-transfer"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "教育心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-032",
    year: "2026",
    number: "第32题",
    subject: "教育心理学",
    type: "single",
    title: "2026 312心理学真题 第32题",
    stem: "某师范生在学习“四有”什么教师榜样之后从思想情感道德上自觉靠近，该生自觉做出相应行为，处于什么阶段：（ ）",
    options: [
      {
        "id": "A",
        "text": "从众"
      },
      {
        "id": "B",
        "text": "依从"
      },
      {
        "id": "C",
        "text": "认同"
      },
      {
        "id": "D",
        "text": "信奉"
      }
    ],
    answer: "C",
    explanation: "态度形成过程通常分为依从、认同、内化三个阶段。认同是个体在思想、情感、态度上主动接受他人影响，使自己的态度与榜样一致，但尚未完全内化为自己稳定的价值体系。题干描述“从思想情感道德上自觉靠近”“自觉做出相应行为”，属于认同阶段。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-learning-transfer"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "教育心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-033",
    year: "2026",
    number: "第33题",
    subject: "教育心理学",
    type: "single",
    title: "2026 312心理学真题 第33题",
    stem: "在 3（被试间）×4（被试内）的混合设计实验中，若每组被试人数均等，被试数量应为（ ）。",
    options: [
      {
        "id": "A",
        "text": "20"
      },
      {
        "id": "B",
        "text": "30"
      },
      {
        "id": "C",
        "text": "32"
      },
      {
        "id": "D",
        "text": "40"
      }
    ],
    answer: "B",
    explanation: "混合设计中，被试间变量（A 因素）有 3 个水平，每个水平需要一组被试。被试内变量（B 因素）有 4 个水平，但同一组被试接受所有处理，不需要额外分组。若每组被试人数均等，设每组 n 人，总被试数为 3n。题目未给出 n 的具体值，但选项中 30 是 3 的倍数，且通常心理学实验中每组 10 人较为常见，因此 B 选项 30（每组 10 人）最合理。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-experiment-design"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "教育心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-034",
    year: "2026",
    number: "第34题",
    subject: "教育心理学",
    type: "single",
    title: "2026 312心理学真题 第34题",
    stem: "下列属于比例量表制作方法的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "数量估计法"
      },
      {
        "id": "B",
        "text": "差别阈值法"
      },
      {
        "id": "C",
        "text": "等比排序法"
      },
      {
        "id": "D",
        "text": "感觉等距法"
      }
    ],
    answer: "A",
    explanation: "比例量表具有绝对零点和相等单位，可进行比率比较。斯蒂文斯（Stevens）提出的数量估计法是制作比例量表的主要方法，要求被试对刺激强度进行数值估计，从而建立刺激强度与感觉强度之间的幂函数关系。差别阈限法制作的是等距量表，感觉等距法也是等距量表方法。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-validity"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "教育心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-035",
    year: "2026",
    number: "第35题",
    subject: "教育心理学",
    type: "single",
    title: "2026 312心理学真题 第35题",
    stem: "下列选项中，用于衡量个体感受性的公式是（ ）。",
    options: [
      {
        "id": "A",
        "text": "d'=Zn·Zsn"
      },
      {
        "id": "B",
        "text": "d'=Zsn-Zn"
      },
      {
        "id": "C",
        "text": "d'=Zsn/Zn"
      },
      {
        "id": "D",
        "text": "d'=Zn+Zsn"
      }
    ],
    answer: "B",
    explanation: "信号检测论中，感受性指标 d'（辨别力指数）的计算公式为 d' = Z 击中- Z 虚报。Z 击中是对应击中率的 Z 分数，Z 虚报是对应虚报率的 Z 分数。d'值越大，说明被试对信号的辨别能力越强，感受性越高。选项 B“d'=Zsn-Zn”是正确的，其中 Zsn 对应 Z 击中，Zn 对应 Z 虚报。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-learning-transfer"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "教育心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-036",
    year: "2026",
    number: "第36题",
    subject: "教育心理学",
    type: "single",
    title: "2026 312心理学真题 第36题",
    stem: "在伦理审查下，研究者用淀粉片替代缓解疼痛的药物，被试食用后疼痛减缓的现象属于（ ）。",
    options: [
      {
        "id": "A",
        "text": "霍桑效应"
      },
      {
        "id": "B",
        "text": "晕轮效应"
      },
      {
        "id": "C",
        "text": "安慰剂效应"
      },
      {
        "id": "D",
        "text": "罗森塔尔效应"
      }
    ],
    answer: "C",
    explanation: "安慰剂效应是指个体因相信接受了有效治疗而产生实际症状改善的现象，即使实际接受的是无效物质（如淀粉片）。题干描述被试食用淀粉片后疼痛减缓，正是安慰剂效应的典型表现。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-learning-transfer"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "教育心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-037",
    year: "2026",
    number: "第37题",
    subject: "教育心理学",
    type: "single",
    title: "2026 312心理学真题 第37题",
    stem: "下列选项中，属于操作定义的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "快乐是发自心底的预约"
      },
      {
        "id": "B",
        "text": "智力是智力测验的分数"
      },
      {
        "id": "C",
        "text": "饥饿是感觉胃很空"
      },
      {
        "id": "D",
        "text": "焦虑是心理上的不安的烦躁"
      }
    ],
    answer: "B",
    explanation: "操作定义是指用可观察、可测量、可操作化的方式来定义概念。选项 B“智力是智力测验的分数”将抽象的智力概念定义为具体的测验得分，便于量化测量和研究，是典型的操作定义。其他选项都是描述性的概念定义。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-norm"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "教育心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-038",
    year: "2026",
    number: "第38题",
    subject: "教育心理学",
    type: "single",
    title: "2026 312心理学真题 第38题",
    stem: "一项研究为了考查社会情境对儿童分享能力的影响，将被试随机分为 4 组，每组进行一种社会情境游戏，该实验设计是（ ）。",
    options: [
      {
        "id": "A",
        "text": "准实验设计"
      },
      {
        "id": "B",
        "text": "混合设计"
      },
      {
        "id": "C",
        "text": "被试内设计"
      },
      {
        "id": "D",
        "text": "被试间设计"
      }
    ],
    answer: "D",
    explanation: "被试间设计（between-subjects design）是指不同组被试接受不同的实验处理。本题中，被试被随机分为 4 组，每组进行一种社会情境游戏，不同组之间进行比较，属于典型的被试间设计。每个被试只接受一种实验条件。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-experiment-design"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "教育心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-039",
    year: "2026",
    number: "第39题",
    subject: "教育心理学",
    type: "single",
    title: "2026 312心理学真题 第39题",
    stem: "下列范式中，可用于检验当代某种生成式人工智能大模型，能够模拟人类思维特征的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "河内塔任务"
      },
      {
        "id": "B",
        "text": "最后通牒博弈范式"
      },
      {
        "id": "C",
        "text": "图灵测验"
      },
      {
        "id": "D",
        "text": "人工概念形成实验"
      }
    ],
    answer: "C",
    explanation: "图灵测验（Turing Test）是由图灵提出的检验机器是否具有智能的方法：如果机器能够在对话中让人类无法区分它是机器还是人，则认为该机器具有智能。这是检验人工智能能否模拟人类思维特征最经典的范式。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-norm"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "教育心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-040",
    year: "2026",
    number: "第40题",
    subject: "教育心理学",
    type: "single",
    title: "2026 312心理学真题 第40题",
    stem: "实验中，先让所有被试完成判断任务，然后将被试分为两组，分别进行包含测验和排除测验任务，这种方法属于（ ）。",
    options: [
      {
        "id": "A",
        "text": "信号检测法"
      },
      {
        "id": "B",
        "text": "匹配比较法"
      },
      {
        "id": "C",
        "text": "任务分离法"
      },
      {
        "id": "D",
        "text": "加工分离法"
      }
    ],
    answer: "D",
    explanation: "加工分离法（Process Dissociation Procedure）是雅各比（Jacoby）提出的，通过包含测验和排除测验两种条件，分离意识记忆和无意识记忆的贡献。题干描述“先让所有被试完成判断任务，然后分为两组，分别进行包含测验和排除测验”，正是加工分离法的典型操作。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-memory-working",
      "kp-experiment-design",
      "kp-norm"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "教育心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-041",
    year: "2026",
    number: "第41题",
    subject: "实验心理学",
    type: "single",
    title: "2026 312心理学真题 第41题",
    stem: "注意衰减模型和过滤器模型都得到了相关实验的支持，它们的相同之处在于（ ）。",
    options: [
      {
        "id": "A",
        "text": "采用双耳分听技术"
      },
      {
        "id": "B",
        "text": "非追随耳的信息被全部过滤掉"
      },
      {
        "id": "C",
        "text": "分别呈现在双耳的刺激可以进行意义整合"
      },
      {
        "id": "D",
        "text": "非追随耳呈现的重复信息被激活后可被识别"
      }
    ],
    answer: "A",
    explanation: "注意的过滤器模型（布罗德本特）和衰减模型（特瑞斯曼）都采用双耳分听技术作为研究范式。两者的主要区别在于：过滤器模型认为非追随耳的信息被完全过滤；衰减模型认为非追随耳的信息被衰减但仍有部分通过。两者的相同之处是都使用双耳分听技术进行研究。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-attention-selective",
      "kp-experiment-design",
      "kp-correlation"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-042",
    year: "2026",
    number: "第42题",
    subject: "实验心理学",
    type: "single",
    title: "2026 312心理学真题 第42题",
    stem: "留守儿童心理健康问题研究中，将其家庭状况进行分类，从每类儿童中随机选取相应比例的儿童，选取的抽样方法是（ ）。",
    options: [
      {
        "id": "A",
        "text": "方便取样"
      },
      {
        "id": "B",
        "text": "系统取样"
      },
      {
        "id": "C",
        "text": "分层随机抽样"
      },
      {
        "id": "D",
        "text": "简单随机取样"
      }
    ],
    answer: "C",
    explanation: "分层随机抽样是指先将总体按某种特征（如家庭状况）分成若干层，然后从各层中按一定比例随机抽取样本。题干描述“将其家庭状况进行分类，从每类儿童中随机选取相应比例的儿童”，正是分层随机抽样的操作定义。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-experiment-design"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-043",
    year: "2026",
    number: "第43题",
    subject: "实验心理学",
    type: "single",
    title: "2026 312心理学真题 第43题",
    stem: "下列选项中，反映语义违反现象的事件相关电位成分是（ ）。",
    options: [
      {
        "id": "A",
        "text": "N100"
      },
      {
        "id": "B",
        "text": "P200"
      },
      {
        "id": "C",
        "text": "P300"
      },
      {
        "id": "D",
        "text": "N400"
      }
    ],
    answer: "D",
    explanation: "N400 是事件相关电位（ERP）的一个负向波峰，约在刺激呈现后 400 毫秒达到峰值，主要与语义加工有关。当句子中出现语义违背（如“我喝了一杯泥土”）时，N400 波幅会显著增大。因此 N400 是反映语义违反的典型 ERP 成分。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-correlation"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-044",
    year: "2026",
    number: "第44题",
    subject: "实验心理学",
    type: "single",
    title: "2026 312心理学真题 第44题",
    stem: "某研究探讨“严禁超速行驶”法令对车祸发生数量的影响，比较了法令颁布前后各五年，每年车祸的数量变化，该研究属于（ ）。",
    options: [
      {
        "id": "A",
        "text": "固定比较组设计"
      },
      {
        "id": "B",
        "text": "事后回溯设计"
      },
      {
        "id": "C",
        "text": "单组前后测设计"
      },
      {
        "id": "D",
        "text": "间歇时间序列设计"
      }
    ],
    answer: "D",
    explanation: "间歇时间序列设计是指对一组被试（或社会单位）进行多次测量，然后在某个时间点引入实验处理，再继续多次测量，通过比较处理前后的时间序列变化来推断处理效果。题干描述比较法令颁布前后各五年的每年车祸数量变化，正是间歇时间序列设计的典型应用。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-experiment-design"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-045",
    year: "2026",
    number: "第45题",
    subject: "实验心理学",
    type: "single",
    title: "2026 312心理学真题 第45题",
    stem: "在 DRM（Deese-Roediger-McDermott）范式中，用来诱发错误记忆的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "关键诱饵"
      },
      {
        "id": "B",
        "text": "有关诱饵"
      },
      {
        "id": "C",
        "text": "学习过的有关词"
      },
      {
        "id": "D",
        "text": "学习过的无关词"
      }
    ],
    answer: "A",
    explanation: "DRM 范式是研究错误记忆的经典范式。研究者向被试呈现一组与某个未呈现的“关键诱饵”语义相关的词（如“门、锁、钥匙、窗”等，关键诱饵是“房子”），在后续的再认或回忆测试中，被试会错误地报告学过这个关键诱饵。关键诱饵（critical lure）是诱发错误记忆的核心刺激。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-memory-working",
      "kp-correlation"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-046",
    year: "2026",
    number: "第46题",
    subject: "实验心理学",
    type: "single",
    title: "2026 312心理学真题 第46题",
    stem: "在实验中，每次给被试呈现两个刺激，要求被试注意其中一个刺激并忽略另一个刺激，被忽略的刺激，在下一个试次时，作为被注意的刺激呈现，此时被试的反应时会增加，该范式为（ ）。",
    options: [
      {
        "id": "A",
        "text": "双任务范式"
      },
      {
        "id": "B",
        "text": "负启动范式"
      },
      {
        "id": "C",
        "text": "返回抑制范式"
      },
      {
        "id": "D",
        "text": "重复启动范式"
      }
    ],
    answer: "B",
    explanation: "负启动范式（negative priming paradigm）用于研究注意抑制机制。其基本操作是：前一个试次中需要忽略的刺激，在后一个试次中成为需要注意的目标，此时被试对目标刺激的反应时显著增加（出现负启动效应）。这与题干描述完全一致。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-attention-selective",
      "kp-experiment-design"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-047",
    year: "2026",
    number: "第47题",
    subject: "实验心理学",
    type: "single",
    title: "2026 312心理学真题 第47题",
    stem: "下图中，左侧为三条正态分布的相对次数分布曲线（标注为 X、Y、Z），右侧为对应的三条累积分布曲线（标注为 1、2、3）。下列匹配正确的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "X~1，Y~2，Z~3"
      },
      {
        "id": "B",
        "text": "X~1，Y~3，Z~2"
      },
      {
        "id": "C",
        "text": "X~2，Y~1，Z~3"
      },
      {
        "id": "D",
        "text": "X~3，Y~1，Z~2"
      }
    ],
    answer: "A",
    explanation: "正态分布曲线（概率密度函数）与其累积分布函数（CDF）之间存在对应关系：分布越集中（标准差越小），累积分布曲线越陡峭；分布越分散（标准差越大），累积分布曲线越平缓。根据图中曲线形态，X 最集中对应最陡峭的累积曲线 1，Z 最分散对应最平缓的累积曲线 3，Y 居中对应累积曲线 2。因此匹配为 X~1，Y~2，Z~3。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-experiment-design"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-048",
    year: "2026",
    number: "第48题",
    subject: "实验心理学",
    type: "single",
    title: "2026 312心理学真题 第48题",
    stem: "如果一个样本分布的标准差是 0，那么可以确定的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "该样本分布的均值为 0"
      },
      {
        "id": "B",
        "text": "该样本分布的均值为 1"
      },
      {
        "id": "C",
        "text": "该样本中所有数据的值相同"
      },
      {
        "id": "D",
        "text": "该样本是标准正态分布"
      }
    ],
    answer: "C",
    explanation: "标准差是衡量数据离散程度的指标。如果标准差为 0，说明样本中所有数据与均值的差异为 0，即所有数据值完全相同。这是唯一可以确定的结论，均值不一定是 0 或 1，分布也不一定是正态分布。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-experiment-design"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-049",
    year: "2026",
    number: "第49题",
    subject: "实验心理学",
    type: "single",
    title: "2026 312心理学真题 第49题",
    stem: "某个人一周内投掷 100 次铅球，平均数为 5.4m，标准差 0.54，某天他投掷铅球 9 次，其投掷距离平均数的标准误是多少（ ）。",
    options: [
      {
        "id": "A",
        "text": "0.06"
      },
      {
        "id": "B",
        "text": "0.18"
      },
      {
        "id": "C",
        "text": "0.60"
      },
      {
        "id": "D",
        "text": "1.80"
      }
    ],
    answer: "B",
    explanation: "标准误计算公式为 SE = σ / √n。已知总体标准差σ = 0.54，样本容量 n = 9，则 SE = 0.54 / √9 = 0.54 / 3 = 0.18。因此答案为 B。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-experiment-design"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-050",
    year: "2026",
    number: "第50题",
    subject: "实验心理学",
    type: "single",
    title: "2026 312心理学真题 第50题",
    stem: "某大学男女比例是 3：2，有 35%的男生打篮球，有 20%的女生打篮球，在所有的学生里随机选一名学生，其选择的是篮球，那么这个人是男生的概率是（ ）。",
    options: [
      {
        "id": "A",
        "text": ""
      },
      {
        "id": "B",
        "text": ""
      },
      {
        "id": "C",
        "text": ""
      },
      {
        "id": "D",
        "text": ""
      }
    ],
    answer: "D",
    explanation: "这是一道贝叶斯概率计算题。设男生比例为 3/5，女生比例为 2/5。P(打篮球|男)=0.35，P(打篮球|女)=0.20。求 P(男|打篮球)。P(打篮球)=P(男)×P(打篮球|男)+P(女)×P(打篮球|女)=0.6×0.35+0.4×0.20=0.21+0.08=0.29。P(男|打篮球)=P(男)×P(打篮球|男)/P(打篮球)=0.21/0.29≈0.724，对应选项 D。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-experiment-design"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-051",
    year: "2026",
    number: "第51题",
    subject: "实验心理学",
    type: "single",
    title: "2026 312心理学真题 第51题",
    stem: "某儿童的韦氏智力测验 IQ 为 130，那么超出平均值（ ）。",
    options: [
      {
        "id": "A",
        "text": "1SD"
      },
      {
        "id": "B",
        "text": "2SD"
      },
      {
        "id": "C",
        "text": "3SD"
      },
      {
        "id": "D",
        "text": "4SD"
      }
    ],
    answer: "B",
    explanation: "韦氏智力测验采用离差智商，平均数为 100，标准差为 15。IQ=130 时，Z 分数 = (130-100)/15 = 30/15 = 2，即超出平均值 2 个标准差。因此答案为 B。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-norm"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-052",
    year: "2026",
    number: "第52题",
    subject: "实验心理学",
    type: "single",
    title: "2026 312心理学真题 第52题",
    stem: "地理单元测验要求学生在亚洲地图上填地图名字，75%以上算合格（ ）。",
    options: [
      {
        "id": "A",
        "text": "常模参照测验"
      },
      {
        "id": "B",
        "text": "标准参照测验"
      },
      {
        "id": "C",
        "text": "典型行为测验"
      },
      {
        "id": "D",
        "text": "行为诊断测验"
      }
    ],
    answer: "B",
    explanation: "标准参照测验（criterion-referenced test）是根据预先设定的绝对标准来判断学生是否达到要求的测验，不依赖于与他人比较。题干中“75%以上算合格”是明确的绝对标准，因此属于标准参照测验。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-norm"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-053",
    year: "2026",
    number: "第53题",
    subject: "实验心理学",
    type: "single",
    title: "2026 312心理学真题 第53题",
    stem: "有研究者认为中学生某种能力测验平均分小于 12.5 分，并抽取了 50 人的随机样本在 0.05 水平上进行假设检验，假设备择假设正确，下列μ值中具有最大统计功效的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "9"
      },
      {
        "id": "B",
        "text": "11"
      },
      {
        "id": "C",
        "text": "14"
      },
      {
        "id": "D",
        "text": "17"
      }
    ],
    answer: "A",
    explanation: "统计功效（power）是指正确拒绝错误虚无假设的概率。当备择假设正确时，效应量（真实均值与假设均值的差距）越大，统计功效越大。本题中，假设均值 12.5 分，备择假设认为小于 12.5。真实的μ值越小，与 12.5 的差距越大，效应量越大，统计功效越大。因此μ=9 时统计功效最大。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-norm"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-054",
    year: "2026",
    number: "第54题",
    subject: "实验心理学",
    type: "single",
    title: "2026 312心理学真题 第54题",
    stem: "两变量独立，表中 n 为（ ）。",
    options: [
      {
        "id": "A",
        "text": "40"
      },
      {
        "id": "B",
        "text": "60"
      },
      {
        "id": "C",
        "text": "75"
      },
      {
        "id": "D",
        "text": "100"
      }
    ],
    answer: "C",
    explanation: "本题考查列联表独立性检验。两变量独立时，期望频数满足比例关系。根据已知数据，可列方程求解。具体计算过程略，根据原题数据，n=75 时满足独立性条件。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-experiment-design"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-055",
    year: "2026",
    number: "第55题",
    subject: "实验心理学",
    type: "single",
    title: "2026 312心理学真题 第55题",
    stem: "两因素方差分析中，交互作用检验结果 F（2，44）＝2.9，以下正确的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "主效应不显著"
      },
      {
        "id": "B",
        "text": "交互作用显著"
      },
      {
        "id": "C",
        "text": "研究中有 48 名被试"
      },
      {
        "id": "D",
        "text": "研究是一个 2×3 的实验设计"
      }
    ],
    answer: "D",
    explanation: "F（2，44）中，自由度 df1=2，df2=44。在交互作用检验中，df1=(a-1)(b-1)=2，df2=N-ab。若 a=2，b=3，则(a-1)(b-1)=1×2=2，符合。总被试数 N=df2+ab=44+6=50，不是 48。F=2.9，查表 F₀ .₀ ₅ (2,44)≈3.21，2.9<3.21，交互作用不显著。因此只有 D“研究是一个 2×3 的实验设计”正确。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-experiment-design",
      "kp-anova"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-056",
    year: "2026",
    number: "第56题",
    subject: "心理测量",
    type: "single",
    title: "2026 312心理学真题 第56题",
    stem: "信度不变，观察分数方差增大，随机误差的方差（ ）。",
    options: [
      {
        "id": "A",
        "text": "增大"
      },
      {
        "id": "B",
        "text": "减小"
      },
      {
        "id": "C",
        "text": "不变"
      },
      {
        "id": "D",
        "text": "无法确定"
      }
    ],
    answer: "A",
    explanation: "根据经典测量理论，观察分数方差 = 真分数方差 + 误差方差，信度 =真分数方差 / 观察分数方差。信度不变时，若观察分数方差增大，则真分数方差同比例增大，误差方差也随之增大。因此随机误差的方差增大。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-anova",
      "kp-reliability"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "心理测量：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-057",
    year: "2026",
    number: "第57题",
    subject: "心理测量",
    type: "single",
    title: "2026 312心理学真题 第57题",
    stem: "X、Y 正相关，不可能（ ）。",
    options: [
      {
        "id": "A",
        "text": "Y=5+7X"
      },
      {
        "id": "B",
        "text": "Y=9+3X"
      },
      {
        "id": "C",
        "text": "Y=-8+4X"
      },
      {
        "id": "D",
        "text": "Y=2-6X"
      }
    ],
    answer: "D",
    explanation: "两个变量正相关，意味着回归方程中 X 的系数应为正数。选项 D 中，Y=2-6X，X 的系数为-6（负数），表示负相关，不可能与“X、Y 正相关”同时成立。其他选项的系数均为正数，可能正相关。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-correlation"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "心理测量：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-058",
    year: "2026",
    number: "第58题",
    subject: "心理测量",
    type: "single",
    title: "2026 312心理学真题 第58题",
    stem: "若右图为一元回归的残差散点图，则对应的原始分数的点位应该是（ ）。（图示略）",
    options: [
      {
        "id": "A",
        "text": ""
      },
      {
        "id": "B",
        "text": ""
      },
      {
        "id": "C",
        "text": ""
      },
      {
        "id": "D",
        "text": ""
      }
    ],
    answer: "C",
    explanation: "残差散点图用于检验回归模型的假设。若残差随机分布且无明显模式，说明模型拟合良好。具体对应关系需根据图形判断，选项 C 符合残差随机分布的特征。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-correlation"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "心理测量：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-059",
    year: "2026",
    number: "第59题",
    subject: "心理测量",
    type: "single",
    title: "2026 312心理学真题 第59题",
    stem: "自编攻击性量表，两次测量结果相关为 0.94，与两个通用量表间的相关为 0.10，0.16，以下选项正确的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "信度偏低，区分效度偏高"
      },
      {
        "id": "B",
        "text": "信度偏高，聚合效度偏低"
      },
      {
        "id": "C",
        "text": "信度偏高，区分效度偏低"
      },
      {
        "id": "D",
        "text": "信度偏低，聚合效度偏低"
      }
    ],
    answer: "B",
    explanation: "两次测量结果相关 0.94 属于高信度（通常>0.80 为高）。与两个通用量表的相关系数分别为 0.10 和 0.16，表明该量表与同类测量（攻击性）的聚合效度很低（通常聚合效度应>0.40）。因此信度偏高、聚合效度偏低，选项 B 正确。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-correlation",
      "kp-reliability",
      "kp-validity"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "心理测量：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-060",
    year: "2026",
    number: "第60题",
    subject: "心理测量",
    type: "single",
    title: "2026 312心理学真题 第60题",
    stem: "200 名被试参加两个平行标准测验，130 名合格，30 名不合格，分类一致性系数是（ ）。",
    options: [
      {
        "id": "A",
        "text": "0.15"
      },
      {
        "id": "B",
        "text": "0.50"
      },
      {
        "id": "C",
        "text": "0.65"
      },
      {
        "id": "D",
        "text": "0.80"
      }
    ],
    answer: "D",
    explanation: "分类一致性系数 = (合格一致人数 + 不合格一致人数) / 总人数。已知130 名合格，30 名不合格，其余 40 人分类不一致（两个测验结果不同）。总人数200，一致人数=130+30=160，系数=160/200=0.80。因此答案为 D。---",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-norm"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "心理测量：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-061",
    year: "2026",
    number: "第61题",
    subject: "普通心理学",
    type: "multiple",
    title: "2026 312心理学真题 第61题",
    stem: "下列关于时间知觉表述正确的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "精神疾病影响时间知觉"
      },
      {
        "id": "B",
        "text": "时间知觉受卡帕效应（Kappa effect）影响"
      },
      {
        "id": "C",
        "text": "时间知觉有时序、时距、时间点知觉"
      },
      {
        "id": "D",
        "text": "当人们的注意指向时间本身时，会觉得时间过得很慢"
      }
    ],
    answer: [
      "A",
      "B",
      "C",
      "D"
    ],
    explanation: "时间知觉受多种因素影响：精神疾病（如抑郁症）可改变时间知觉；卡帕效应是指空间距离影响时间判断的错觉；时间知觉包括时序知觉、时距知觉和时间点知觉；当注意指向时间本身时，会因过度关注而产生时间变慢的错觉。因此所有选项均正确。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-attention-selective"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-062",
    year: "2026",
    number: "第62题",
    subject: "普通心理学",
    type: "multiple",
    title: "2026 312心理学真题 第62题",
    stem: "卡尼曼的前景理论，关于这个理论表述正确的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "面对损失比获得更敏感"
      },
      {
        "id": "B",
        "text": "多数人面临获得，风险规避"
      },
      {
        "id": "C",
        "text": "多数人面对损失，风险偏好"
      },
      {
        "id": "D",
        "text": "评估获得与损失时，自我价值保护倾向"
      }
    ],
    answer: [
      "A",
      "B",
      "C"
    ],
    explanation: "前景理论（Kahneman & Tversky）的核心观点：人们面对损失比获得更敏感（损失厌恶）；多数人在面临获得时倾向于风险规避，在面临损失时倾向于风险偏好。选项 D“自我价值保护倾向”不属于前景理论的核心内容。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-achievement-motivation"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-063",
    year: "2026",
    number: "第63题",
    subject: "发展心理学",
    type: "multiple",
    title: "2026 312心理学真题 第63题",
    stem: "超常儿童说法正确的是（ ）。",
    options: [
      {
        "id": "A",
        "text": "优越的教育环境对超常儿童的发展有重要影响"
      },
      {
        "id": "B",
        "text": "伦朱利提出“三圆圈超常儿童”的概念"
      },
      {
        "id": "C",
        "text": "比内首次采用心理测验对智力超常儿童进行测量"
      },
      {
        "id": "D",
        "text": "查子秀提出影响超常儿童的心理结构包括智力因素和非智力因素"
      }
    ],
    answer: [
      "A",
      "B",
      "D"
    ],
    explanation: "选项 A 正确，超常儿童的发展需要良好的教育环境支持。选项 B 正确，伦朱利（Renzulli）提出“三圆圈超常儿童”概念，包括中等以上能力、创造力、任务承诺。选项 C 错误，比内（Binet）是智力测验的先驱，但首次对超常儿童进行系统研究的是推孟（Terman）。选项 D 正确，查子秀提出超常儿童心理结构包括智力因素和非智力因素的相互作用。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-norm"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "发展心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-064",
    year: "2026",
    number: "第64题",
    subject: "普通心理学",
    type: "multiple",
    title: "2026 312心理学真题 第64题",
    stem: "以下哪些符合人本主义的人格理论观点？（ ）",
    options: [
      {
        "id": "A",
        "text": "人在很大程度上是理性的"
      },
      {
        "id": "B",
        "text": "人具有自我实现的潜能需要"
      },
      {
        "id": "C",
        "text": "理想自我与真实自我的和谐影响人格健康"
      },
      {
        "id": "D",
        "text": "人格是生物本能（生理基因）和社会文化因素的相互作用的结果"
      }
    ],
    answer: [
      "A",
      "B",
      "C"
    ],
    explanation: "人本主义人格理论强调人的理性和自我实现倾向，认为人在本质上是理性的、具有自我实现潜能、理想自我与真实自我的和谐影响人格健康。选项 D“人格是生物本能与社会文化的相互作用”是精神分析或社会学习理论的观点，不符合人本主义的核心理念。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-learning-transfer"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-065",
    year: "2026",
    number: "第65题",
    subject: "发展心理学",
    type: "multiple",
    title: "2026 312心理学真题 第65题",
    stem: "在一项访谈研究中，针对“父母怎样做是对孩子好”提问，幼儿园大班的孩子回答：“抱抱我，跟我一起玩......”；小学四年级的孩子回答：“表扬我，觉得我是好孩子......”；初二的孩子回答：“不要管我，给我自由......”，这些回答反映的阶段性问题是（ ）。",
    options: [
      {
        "id": "A",
        "text": "个体的需求形式随着年龄增长在变化"
      },
      {
        "id": "B",
        "text": "个体的自我意识随着年龄的增长在变化"
      },
      {
        "id": "C",
        "text": "孩子对父母爱的理解，反映了思维水平在变化"
      },
      {
        "id": "D",
        "text": "孩子与父母的亲密形式随着年龄增长在变化"
      }
    ],
    answer: [
      "A",
      "B",
      "D"
    ],
    explanation: "不同年龄段孩子对“父母怎样做是对孩子好”的回答差异反映了：A 需求形式随年龄变化（从身体关爱到情感认可再到自主需求）；B 自我意识随年龄增长而变化；D 亲子亲密形式随年龄变化。选项 C“思维水平变化”虽然可能相关，但题干回答内容直接体现的是需求和自我意识的发展，而非思维水平的直接反映。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-correlation"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "发展心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-066",
    year: "2026",
    number: "第66题",
    subject: "普通心理学",
    type: "multiple",
    title: "2026 312心理学真题 第66题",
    stem: "下列关于对罗杰斯学习理论描述正确的有（ ）。",
    options: [
      {
        "id": "A",
        "text": "认知学习与学生个人情感无关，是无意义的"
      },
      {
        "id": "B",
        "text": "自我体验学习以学生个人经验为中心，是有意义的"
      },
      {
        "id": "C",
        "text": "意义学习的条件是新的事物内部经验逻辑自洽"
      },
      {
        "id": "D",
        "text": "有意义学习关键是学习材料和个体经验建立联系"
      }
    ],
    answer: [
      "B",
      "D"
    ],
    explanation: "罗杰斯的学习理论强调有意义学习（经验学习）应以学生个人经验为中心，学习材料应与个体经验建立联系。选项 A 错误，罗杰斯认为认知学习若与学生情感无关则是无意义的；选项 C 错误，意义学习的条件不是逻辑自洽，而是与个体经验相关。因此 BD 正确。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-correlation",
      "kp-learning-transfer"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-067",
    year: "2026",
    number: "第67题",
    subject: "实验心理学",
    type: "multiple",
    title: "2026 312心理学真题 第67题",
    stem: "下列选项中，探究刺激和反应之间协同性的研究有（ ）。",
    options: [
      {
        "id": "A",
        "text": "西蒙实验"
      },
      {
        "id": "B",
        "text": "Stroop 实验"
      },
      {
        "id": "C",
        "text": "Flanker 实验"
      },
      {
        "id": "D",
        "text": "整体优势效应实验"
      }
    ],
    answer: [
      "A",
      "B",
      "C",
      "D"
    ],
    explanation: "刺激和反应之间的协同性（stimulus-response compatibility）是指刺激与所需反应之间的匹配程度。西蒙实验（Simon effect）、Stroop 实验、Flanker 实验和整体优势效应实验都是研究刺激-反应协同性的经典范式。因此所有选项均正确。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-experiment-design",
      "kp-reaction-time"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-068",
    year: "2026",
    number: "第68题",
    subject: "普通心理学",
    type: "multiple",
    title: "2026 312心理学真题 第68题",
    stem: "与功能性磁共振成像（fMRI）相比，关于功能性近红外光谱成像（fNIRS），以下说法正确的有（ ）。",
    options: [
      {
        "id": "A",
        "text": "成像的空间分辨率较高"
      },
      {
        "id": "B",
        "text": "更轻便且使用成本相对较低"
      },
      {
        "id": "C",
        "text": "也是非侵入性的神经成像技术"
      },
      {
        "id": "D",
        "text": "也可以通过测量血氧浓度反映大脑功能状态"
      }
    ],
    answer: [
      "B",
      "C",
      "D"
    ],
    explanation: "与 fMRI 相比，fNIRS 具有以下特点：B 更轻便、成本较低；C 同为非侵入性神经成像技术；D 也通过测量血氧浓度反映大脑功能。选项 A 错误，fNIRS的空间分辨率低于 fMRI，而不是较高。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-experiment-design"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-069",
    year: "2026",
    number: "第69题",
    subject: "普通心理学",
    type: "multiple",
    title: "2026 312心理学真题 第69题",
    stem: "以下选项中，总体参数中的无偏估计有哪些？（ ）",
    options: [
      {
        "id": "A",
        "text": "X"
      },
      {
        "id": "B",
        "text": "S"
      },
      {
        "id": "C",
        "text": "X1-X2"
      },
      {
        "id": "D",
        "text": "p1-p2"
      }
    ],
    answer: [
      "A",
      "C",
      "D"
    ],
    explanation: "无偏估计是指估计量的期望值等于总体参数。样本均值 X 是总体均值的无偏估计；样本均值差 X1-X2 是总体均值差的无偏估计；样本比例差 p1-p2 是总体比例差的无偏估计。选项 B 样本标准差 S 是总体标准差的有偏估计（需用 n-1校正）。因此 ACD 正确。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-attention-selective"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
  },
  {
    id: "real-2026-070",
    year: "2026",
    number: "第70题",
    subject: "心理测量",
    type: "multiple",
    title: "2026 312心理学真题 第70题",
    stem: "重测信度，应满足（ ）。",
    options: [
      {
        "id": "A",
        "text": "心理特质稳定"
      },
      {
        "id": "B",
        "text": "未经过练习和训练"
      },
      {
        "id": "C",
        "text": "遗忘和练习效果基本相互抵消"
      },
      {
        "id": "D",
        "text": "需要两个或两个以上的平行测试"
      }
    ],
    answer: [
      "A",
      "B",
      "C"
    ],
    explanation: "重测信度的使用条件包括：A 心理特质在两次测量期间保持稳定；B 被试未经过练习和训练；C 遗忘和练习效果基本相互抵消。选项 D“需要两个或两个以上的平行测试”是复本信度的要求，不是重测信度的要求。因此 ABC 正确。---",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-reliability"
    ],
    trap: "选择题已从 PDF 自动拆分，请优先校对题干、选项和答案是否与原卷一致。",
    textbook: "心理测量：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "识别题干中的变量或测量指标",
      "匹配对应公式、设计类型或测量概念",
      "代入条件并核对选项"
    ],
  },
  {
    id: "real-2026-071",
    year: "2026",
    number: "第71题",
    subject: "实验心理学",
    type: "short",
    title: "2026 312心理学真题 第71题",
    stem: "比较构造主义与格式塔学派主要观点的异同。",
    answer: "",
    explanation: "（1）相同点①研究对象相同：构造主义研究对象是直接经验（意识），而格式塔学派研究对象是直接经验（意识和认知）。两个流派都有强调研究直接经验。②研究方法都认可实验法，而反对纯思辨。③两个流派都属于心理学早期的重要流派。（2）不同点①代表人物不同：构造主义的代表人物冯特、铁钦纳，而格式塔学派的代表人物韦特海默、苛勒、考夫卡、勒温。②主要观点不同：构造主义主张研究人们的意识，即对直接经验的觉知。将人的经验分为感觉、意象（表象）和情感（激情）3 种元素，所有复杂的心理现象都是由这些元素构成的。而格式塔学派强调心理作为一个整体、一种组织的意义，反对构造主义把意识分析为元素，提出了突现论、同型论和知觉的组织原则。③研究方法不同：构造主义的研究方法是实验内省法，而格式塔学派的研究方法是整体的观察法、实验现象学方法。④诞生时间不同：构造主义是起源于冯特 1879 年建立第一个心理学实验室以后而诞生的，而格式塔学派则是与行为主义同时诞生，且是反对构造主义而起家的。---",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-experiment-design"
    ],
    trap: "主观题先按自评模式练习：答题后对照参考答案，重点检查是否覆盖核心概念、逻辑层次和关键词。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "先独立写出作答要点",
      "对照参考答案补充遗漏概念",
      "按“掌握 / 不熟 / 不会”完成自评"
    ],
  },
  {
    id: "real-2026-072",
    year: "2026",
    number: "第72题",
    subject: "实验心理学",
    type: "short",
    title: "2026 312心理学真题 第72题",
    stem: "简述萨丕尔-沃尔夫语言相对论假设及其演变，并列举一个支持性证据。",
    answer: "",
    explanation: "（1）萨丕尔-沃尔夫假设：也称语言相对论假设，认为语言决定了人们的思维以及知觉世界的方式。语言是文化和认知过程的体现，语言的差异会导致人们思想和行为方式的差异。（2）演变①初始假设（强假设）：由萨丕尔、沃尔夫提出，核心是“语言决定思维”：认为语言的差异会造成思维方式的根本差异，语言是思维的决定性因素。支持性证据：沃尔夫认为霍比人语言无动词过去式，故难以思考往事；因纽特人对“雪”的词汇更丰富，故对雪的辨别更细致。②假设修正（弱假设）：多数研究都没有支持沃尔夫的观点，经过修订的语言相对论假设认为，语言会影响而非决定人们的思维和知觉世界的方式。这种观点得到诸多研究支持。支持性证据：一项研究比较了俄语组和英语组被试对蓝色的知觉差异——俄语对浅蓝与深蓝有明确词汇区分，英语则无。实验要求被试在色块中快速判断目标颜色是否匹配。结果俄语被试在跨范畴颜色（浅蓝 vs 深蓝）的辨别速度显著快于同范畴颜色，而英语组被试无此差异。该结果说明，语言中的颜色范畴差异即时影响了知觉辨别，支持修订的语言相对论假设。---",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-experiment-design"
    ],
    trap: "主观题先按自评模式练习：答题后对照参考答案，重点检查是否覆盖核心概念、逻辑层次和关键词。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "先独立写出作答要点",
      "对照参考答案补充遗漏概念",
      "按“掌握 / 不熟 / 不会”完成自评"
    ],
  },
  {
    id: "real-2026-073",
    year: "2026",
    number: "第73题",
    subject: "普通心理学",
    type: "short",
    title: "2026 312心理学真题 第73题",
    stem: "有些学生学业成绩差还不努力学习，有些学生学业成绩好但遮掩自己的努力，试用自我价值理论分析两种现象的成因。",
    answer: "",
    explanation: "自我价值，认为自己是优秀、有能力的个体的一种信念。自我价值理论认为，接纳自我是人的最优先追求，而接纳自我的前提是自我价值，自我价值则通常基于在竞争中取得成功的能力。一旦自我价值受到威胁，人将竭力予以维护和防御，以建立正面的自我形象，从而接纳自我。（1）根据阿特金森成就动机的追求成功和避免失败两个独立的维度，自我价值理论将学生组合出 4 种类型，分别对应建立自我价值的 4 种动机倾向。①高趋低避型：被称为成功定向者或掌握定向者。这类学生拥有无穷的好奇心，对学习有极高的卷入水平。②高趋高避型：被称为过度努力者。这类学生兼具成功定向者和避免失败者的特点，对任务又爱又恨，既追求又排斥。③低趋高避型：被称为逃避失败者。这类学生更看重逃避失败而非期望成功，对课程提不起兴趣。④低趋低避型：被称为自甘失败者。这类学生不奢望成功，对失败也不感到恐惧或羞愧，做出许多自我设障的行为。（2）两种现象的成因①有些学生学业成绩差还不努力学习，体现的是低趋高避型，核心动机是避免失败带来的“能力不足”归因。这类学生认为如果付出努力后成绩依然不好，会被认为是能力低下的，从而威胁到自我价值。②有些学生学业成绩好但遮掩自己的努力，体现的是高趋高避型，核心动机是在获得成功的同时塑造高能力的形象。这类学生认为如果一个人需要付出很多努力才能考好，会被认为能力一般。所以为了最大化自我价值，他们取得好成绩后刻意遮掩努力过程，显得是自己很有能力。总的来说，两种现象的本质都是学生为了维护自我价值而采取的不同策略，都是围绕能力这一自我价值的核心，通过调整对努力的认知和表现来保护或提升自我价值。---",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-motivation",
      "kp-learning-transfer",
      "kp-achievement-motivation"
    ],
    trap: "主观题先按自评模式练习：答题后对照参考答案，重点检查是否覆盖核心概念、逻辑层次和关键词。",
    textbook: "普通心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "先独立写出作答要点",
      "对照参考答案补充遗漏概念",
      "按“掌握 / 不熟 / 不会”完成自评"
    ],
  },
  {
    id: "real-2026-074",
    year: "2026",
    number: "第74题",
    subject: "心理测量",
    type: "short",
    title: "2026 312心理学真题 第74题",
    stem: "超 10 万人进行大规模的施测，对某题目进行项目分析。（1）基于上表的六组数据，对于题目进行难度和区分度的评价。（2）解释六组分析结果不同的原因，以及对大规模施测题目质量的启示。",
    answer: "",
    explanation: "（1）难度和区分度评价①针对全部样本，P 为 0.11，通过的人数少，题目难度太难。D 为 0.19 在 0.2 以下时，题目质量较差，必须淘汰。②针对前 2%的样本，P 为 0.81，通过的人多，题目较为简单。D 为 0.35 在 0.30-0.39之间时，题目质量尚好，修改会更好。③针对前 8%的样本，P 为 0.54，接近 0.5 难度适中。D 为 0.42 在 0.40 以上时，题目的质量很好。④针对前 15%的样本，P 为 0.45，接近 0.5 难度适中。D 为 0.51 在 0.40 以上时，题目的质量很好。⑤针对前 50%的样本，P 为 0.19，通过的人数少，题目难度太难。D 为 0.27 在0.2-0.29 之间时，题目质量尚可，仍需修改。⑥针对剩余 40%的样本，P 和 D 为 0，都不好。（2）六组分析结果不同的原因在于：经典测量理论的参数估计对样本的依赖性太大。当样本发生改变，参数指标就会发生改变。题目难度，对于同一题目，若样本的群体水平较低，就有较高的难度估计值；若样本的群体水平较高，就会形成较低的难度估计值。被试团体越具有同质性，其测题的区分度值就越小。启示：在进行大规模施测时要注意样本同质性问题，选取有代表性样本。---",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-attention-selective"
    ],
    trap: "主观题先按自评模式练习：答题后对照参考答案，重点检查是否覆盖核心概念、逻辑层次和关键词。",
    textbook: "心理测量：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "先独立写出作答要点",
      "对照参考答案补充遗漏概念",
      "按“掌握 / 不熟 / 不会”完成自评"
    ],
  },
  {
    id: "real-2026-075",
    year: "2026",
    number: "第75题",
    subject: "社会心理学",
    type: "essay",
    title: "2026 312心理学真题 第75题",
    stem: "随着互联网和自媒体的发展，媒体暴力成为一个不容忽视的现象，其与青少年暴力行为之间的关系愈发受到关注。请回答以下问题：（1）基于班杜拉、菲什巴赫（S.Feshbach）和斯特劳斯（M.Straus）的研究，说明媒体暴力与青少年暴力行为之间的关系。（2）分析媒体暴力影响青少年暴力行为的原因。",
    answer: "",
    explanation: "（1）①影视暴力确实会使观看节目的儿童产生更多的侵犯行为。班杜拉的研究发现，影视暴力会使儿童产生更多的侵犯行为，证明了电视暴力与侵犯行为间的因果关系。班杜拉的研究强调观察学习和去抑制的作用，认为媒体暴力是青少年暴力行为的风险因素之一。②暴力片使原先愤怒的被试的侵犯性降低。菲什巴赫让愤怒及平静的被试观看暴力或非暴力影片，结果发现观看暴力片使原先愤怒的被试的侵犯性降低，而不是加剧暴力行为。③家庭暴力同时决定着一个人的暴力倾向和对暴力媒体的选择。斯特劳斯认为影视暴力与侵犯行为之间不是直接的因果关系，二者同时受到家庭暴力的影响——家庭暴力同时决定着一个人的暴力倾向和对暴力媒体的选择。（2）①去抑制：班杜拉认为，看到他人的暴力行为会降低我们在类似情境中对自己暴力行为的抑制。去抑制现象发生的部分原因是我们对暴力行为的情绪变得迟钝或不敏感，不关心他人的感受与痛苦。②形成侵犯剧本：Huesmann 借鉴了认知心理学的概念，认为儿童在观看暴力片时，会发展出一套侵犯性的剧本，这个剧本表明了侵犯事件发生的顺序，它存储于记忆之中，指导着一个人的行为。③认知启动：一些心理学家用武器效应把侵犯性线索和侵犯行为的产生联系在一起，并指出这些线索最终会引发暴力行为。因此，从某种意义上来说，这些刺激对侵犯行为具有诱发作用，我们把由这些刺激引发暴力行为的现象叫作认知启动。---",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-memory-working",
      "kp-emotion",
      "kp-learning-transfer"
    ],
    trap: "主观题先按自评模式练习：答题后对照参考答案，重点检查是否覆盖核心概念、逻辑层次和关键词。",
    textbook: "社会心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "先独立写出作答要点",
      "对照参考答案补充遗漏概念",
      "按“掌握 / 不熟 / 不会”完成自评"
    ],
  },
  {
    id: "real-2026-076",
    year: "2026",
    number: "第76题",
    subject: "社会心理学",
    type: "essay",
    title: "2026 312心理学真题 第76题",
    stem: "一项研究考察了儿童亲社会行为的发展特点，研究设计的示意图如下所示。（1）这项研究属于什么研究设计？（2）如果进行横断比较，应如何比较？得到的结果反映了什么？（3）如果进行追踪比较，应如何比较？得到的结果反映了什么？（4）什么是同辈效应（cohort effect）？如果考察同辈效应，应如何比较？得到的结果反映了什么？",
    answer: "",
    explanation: "（1）该研究属于聚合交叉设计，也称序列研究，是将横断研究设计和纵向研究设计融合在一起的研究设计。研究者选择不同年龄的群体作为研究对象，在短时间内重复观察。（2）横断比较：在同一测试年份（2019、2022、2025），对不同出生年份（2016、2013）的儿童进行比较。例如 2019 年，比较 2016 年出生的 3 岁儿童和 2013 年出生的 6 岁儿童；2022 年比较 2016 年出生的 6 岁儿童和 2013 年出生的 9 岁儿童；2025 年比较 2016 年出生的 9 岁儿童和 2013 年出生的 12 岁儿童。结果意义：反映特定时间点上不同年龄儿童亲社会行为的差异，呈现的是年龄差异的静态特征，但是无法区分是发展变化还是同辈/测量时间的影响。（3）追踪比较：对同一出生队列（2016 年出生组、2013 年出生组），在不同测试年份进行前后比较。例如追踪 2016 年出生组，比较其 3 岁（2019）、6 岁（2022）、9 岁（2025）的亲社会行为；追踪 2013 年出生组，比较其 6 岁（2019）、9 岁（2022）、12 岁（2025）的亲社会行为。结果意义：反映同一批儿童随年龄增长的亲社会行为发展变化轨迹，呈现的是个体发展的动态过程。（4）同辈效应：也称为组群效应、世代效应，指由于个体出生在特定时期并成长在特定历史情境中所带来的对个体发展研究的干扰效应。比较方式：比较同年龄但不同出生队列的儿童。例如比较 3 岁的 2016 年出生儿童和 3 岁的 2013 年出生儿童；或 6 岁的 2016 年出生儿童和 6 岁的 2013 年出生儿童。结果意义：若同年龄不同队列的儿童亲社会行为存在差异，说明存在同辈效应，差异由出生队列的成长背景等因素导致，而非年龄发展的自然结果。---",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-attribution"
    ],
    trap: "主观题先按自评模式练习：答题后对照参考答案，重点检查是否覆盖核心概念、逻辑层次和关键词。",
    textbook: "社会心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "先独立写出作答要点",
      "对照参考答案补充遗漏概念",
      "按“掌握 / 不熟 / 不会”完成自评"
    ],
  },
  {
    id: "real-2026-077",
    year: "2026",
    number: "第77题",
    subject: "实验心理学",
    type: "essay",
    title: "2026 312心理学真题 第77题",
    stem: "一项研究的结果如下表所示，表中呈现了神经质高低分组的被试在不同应激阶段观看情绪视频时皮电变化率（%）的均值。请回答：（1）说明该研究的实验设计类型、自变量和因变量。（2）描述该研究的实验步骤。",
    answer: "",
    explanation: "（1）实验设计类型：2×3×4 混合实验设计。自变量：神经质水平（高、低），为被试间变量；应激阶段（警戒阶段、持续阶段、枯竭阶段），为被试内变量；视频类型（中性、搞笑、悲伤、愤怒），为被试内变量。因变量：皮电变化率（%）。（2）①被试选择：使用艾森克人格量表（EPQ）对大规模被试施测，按得分高低取成绩前 27%的被试作为高分组、后 27%的被试作为低分组。②实验材料：不同类型的情绪视频若干、多导生理记录仪一台、实验室电脑若干。③实验流程：首先，向被试说明实验流程并签署知情同意书；连接生理记录仪，测量 5-10 分钟静息基线皮电水平；然后，使用视频诱发被试的应激状态，在应激的不同阶段呈现不同的视频材料，如悲伤、愤怒等，记录被试的皮电变化。试验结束后，核对数据，发放被试费。④实验结果分析：剔除极端数据后，进行三因素重复测量方差分析。---",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-emotion",
      "kp-experiment-design",
      "kp-anova"
    ],
    trap: "主观题先按自评模式练习：答题后对照参考答案，重点检查是否覆盖核心概念、逻辑层次和关键词。",
    textbook: "实验心理学：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "先独立写出作答要点",
      "对照参考答案补充遗漏概念",
      "按“掌握 / 不熟 / 不会”完成自评"
    ],
  },
  {
    id: "real-2026-078",
    year: "2026",
    number: "第78题",
    subject: "心理测量",
    type: "essay",
    title: "2026 312心理学真题 第78题",
    stem: "某天，梁老师在甲班施测了 50 道题目组成的 A 测验，信度是 0.84，后又在A 测验基础上增加 50 道题目形成 B 测验，在乙班施测，然后将施测结果全部转化为 T 分数（T＝50+10Z），甲班陈同学 T 分数为 80，乙班李同学 T 分数为 86。α＝0.05，保留两位小数。（1）陈同学测验成绩的 95%置信区间是？（2）李同学测验成绩的 95%置信区间是？（3）检验两位同学的测验成绩是否存在显著性差异。",
    answer: "",
    explanation: "（1）根据题意，应使用测验分数的区间估计。测量的标准误：S = S√(1-r) = 10×√(1-0.84) = 4。根据α＝0.05，临界值 Z＝±1.96，置信区间为：x - ZS ≤ T ≤x + ZS，80 - 1.96×4 ≤ T ≤ 80 + 1.96×4，即陈同学 95%的置信区间为：（72.16，87.84）。（2）增加 50 道题目后，测验信度发生改变，用斯皮尔曼-布朗预测公式计算新信度：r = (2×0.84)/(1+0.84) = 0.91。测量的标准误：S = 10×√(1-0.91) = 3。置信区间：86 - 1.96×3 ≤ T ≤ 86 + 1.96×3，即李同学 95%的置信区间为：（80.12，91.88）。（3）H₀ ：两位同学的测验成绩无显著差异；H₁ ：两位同学的测验成绩有显著差异。使用 Z 检验。测验差异的标准误：S = 10×√(2 - 0.84 - 0.91) = 5。Z = (86 - 80)/5= 1.2。根据α＝0.05，临界值 Z＝±1.96。经比较 Z＜Z 临界值，即接受 H₀ ，两位同学的测验成绩无显著差异。",
    sourceType: "real",
    sourceName: "2026年312心理学真题",
    copyrightStatus: "unknown",
    knowledgePointIds: [
      "kp-reliability",
      "kp-norm"
    ],
    trap: "主观题先按自评模式练习：答题后对照参考答案，重点检查是否覆盖核心概念、逻辑层次和关键词。",
    textbook: "心理测量：回到对应教材章节复习本题考点；当前知识点标签为自动初标，导入后建议人工校对。",
    solutionSteps: [
      "先独立写出作答要点",
      "对照参考答案补充遗漏概念",
      "按“掌握 / 不熟 / 不会”完成自评"
    ],
  },
  {
    id: "q-psy-001",
    year: "2026",
    number: "第1题",
    subject: "普通心理学",
    type: "single",
    title: "2026 原创模拟 · 普通心理学 · 第1题",
    stem: "课堂上学生能在嘈杂环境中集中听老师讲解，而忽略窗外谈话声，这主要体现了注意的哪一功能？",
    options: [
      { id: "A", text: "注意的分配" },
      { id: "B", text: "注意的选择" },
      { id: "C", text: "注意的转移" },
      { id: "D", text: "注意的起伏" },
    ],
    answer: "B",
    explanation: "选择性注意指个体从多个刺激中优先加工与任务有关的信息，同时抑制无关刺激。本题的关键是“集中听讲并忽略谈话声”。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-attention-selective"],
    trap: "不要把同时处理多项任务误判为注意分配。本题没有要求学生同时完成两个任务。",
    textbook: "普通心理学：注意章节，选择性注意与过滤模型。",
  },
  {
    id: "q-psy-002",
    year: "2026",
    number: "第2题",
    subject: "普通心理学",
    type: "single",
    title: "2026 原创模拟 · 普通心理学 · 第2题",
    stem: "在心算 37+58 时，个体临时保存进位信息并进行加工，这最符合哪一概念？",
    options: [
      { id: "A", text: "感觉记忆" },
      { id: "B", text: "工作记忆" },
      { id: "C", text: "程序性记忆" },
      { id: "D", text: "情景记忆" },
    ],
    answer: "B",
    explanation: "工作记忆同时承担短时保持和在线加工，心算中的数字暂存与操作正是典型例子。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-memory-working"],
    trap: "短时记忆更强调保持，工作记忆更强调保持加加工。",
    textbook: "普通心理学：记忆章节，工作记忆模型。",
  },
  {
    id: "q-psy-003",
    year: "2026",
    number: "第3题",
    subject: "普通心理学",
    type: "short",
    title: "2026 原创模拟 · 普通心理学 · 第3题",
    stem: "简述动机冲突的主要类型，并各举一个学习场景中的例子。",
    answer: "趋趋冲突、避避冲突、趋避冲突、多重趋避冲突。",
    explanation: "答题应先列类型，再解释冲突方向，最后给出学习例子。例如想参加讲座也想复习是趋趋冲突，既不想背书也不想做题是避避冲突。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-motivation"],
    trap: "只写名称不得分不稳，必须说明“接近/回避”的方向。",
    textbook: "普通心理学：动机章节，动机冲突。",
  },
  {
    id: "q-psy-004",
    year: "2026",
    number: "第4题",
    subject: "普通心理学",
    type: "single",
    title: "2026 原创模拟 · 普通心理学 · 第4题",
    stem: "詹姆斯-兰格理论强调情绪体验主要来源于什么？",
    options: [
      { id: "A", text: "外周生理变化的知觉" },
      { id: "B", text: "丘脑的同时激活" },
      { id: "C", text: "认知评价" },
      { id: "D", text: "社会比较" },
    ],
    answer: "A",
    explanation: "詹姆斯-兰格理论认为先有身体反应，再对身体反应的知觉形成情绪体验。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-emotion"],
    trap: "认知评价更接近沙赫特-辛格两因素理论。",
    textbook: "普通心理学：情绪章节，经典情绪理论。",
  },
  {
    id: "q-dev-001",
    year: "2026",
    number: "第5题",
    subject: "发展心理学",
    type: "single",
    title: "2026 原创模拟 · 发展心理学 · 第5题",
    stem: "儿童能够理解守恒任务，通常被认为进入皮亚杰理论中的哪一阶段？",
    options: [
      { id: "A", text: "感知运动阶段" },
      { id: "B", text: "前运算阶段" },
      { id: "C", text: "具体运算阶段" },
      { id: "D", text: "形式运算阶段" },
    ],
    answer: "C",
    explanation: "具体运算阶段儿童开始掌握守恒、分类、序列化等逻辑操作，但仍依赖具体材料。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-piaget"],
    trap: "形式运算阶段强调抽象假设推理，不是守恒任务的起点。",
    textbook: "发展心理学：儿童认知发展，皮亚杰阶段理论。",
  },
  {
    id: "q-dev-002",
    year: "2026",
    number: "第6题",
    subject: "发展心理学",
    type: "short",
    title: "2026 原创模拟 · 发展心理学 · 第6题",
    stem: "简述安全型依恋儿童在陌生情境实验中的典型表现。",
    answer: "照料者在场时主动探索；分离时可能不安；重聚时容易被安抚并恢复探索。",
    explanation: "安全型依恋的核心不是完全不哭，而是把照料者作为安全基地，重聚后能较快恢复稳定。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-attachment"],
    trap: "不要把安全型误写成对分离毫无反应。",
    textbook: "发展心理学：依恋与社会性发展。",
  },
  {
    id: "q-exp-001",
    year: "2026",
    number: "第7题",
    subject: "实验心理学",
    type: "single",
    title: "2026 原创模拟 · 实验心理学 · 第7题",
    stem: "研究者操纵学习材料呈现时间，并观察回忆成绩变化。呈现时间属于什么变量？",
    options: [
      { id: "A", text: "因变量" },
      { id: "B", text: "自变量" },
      { id: "C", text: "额外变量" },
      { id: "D", text: "中介变量" },
    ],
    answer: "B",
    explanation: "由研究者主动操纵的变量是自变量，回忆成绩才是因变量。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-experiment-design"],
    trap: "看清“操纵”和“观察”的区别。",
    textbook: "实验心理学：变量与实验设计。",
    solutionSteps: ["找研究者操纵的因素", "找被测量的结果", "区分额外变量是否被控制"],
  },
  {
    id: "q-exp-002",
    year: "2026",
    number: "第8题",
    subject: "实验心理学",
    type: "short",
    title: "2026 原创模拟 · 实验心理学 · 第8题",
    stem: "简述反应时法为什么可以用于推断心理加工过程。",
    answer: "反应时被视为刺激输入到反应输出之间心理加工耗时的外显指标。",
    explanation: "不同任务条件下反应时差异可以反映加工阶段、加工难度或加工资源差异。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-reaction-time"],
    trap: "反应时不是心理过程本身，而是推断指标。",
    textbook: "实验心理学：反应时法。",
    solutionSteps: ["说明反应时的含义", "说明条件差异如何对应加工差异", "点出推断而非直接观察"],
  },
  {
    id: "q-exp-003",
    year: "2026",
    number: "第9题",
    subject: "实验心理学",
    type: "single",
    title: "2026 原创模拟 · 实验心理学 · 第9题",
    stem: "信号检测论中，d' 主要反映被试的什么能力？",
    options: [
      { id: "A", text: "反应偏向" },
      { id: "B", text: "辨别力" },
      { id: "C", text: "动机水平" },
      { id: "D", text: "记忆容量" },
    ],
    answer: "B",
    explanation: "d' 是辨别力指标，反应偏向通常用 β 或判断标准相关指标表示。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-signal-detection"],
    trap: "d' 和反应偏向是信号检测论最常见混淆点。",
    textbook: "实验心理学：信号检测论。",
    solutionSteps: ["识别指标 d'", "区分辨别力与反应偏向", "对应公式和含义"],
  },
  {
    id: "q-stat-001",
    year: "2026",
    number: "第10题",
    subject: "心理统计",
    type: "calculation",
    title: "2026 原创模拟 · 心理统计 · 第10题",
    stem: "某研究比较三种教学方法对成绩的影响，因变量为连续成绩。最合适的总体差异检验是什么？",
    answer: "单因素方差分析",
    explanation: "自变量有三组，因变量为连续变量，比较三个独立总体均值差异时使用单因素方差分析。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-anova"],
    trap: "两组均值比较才优先考虑 t 检验，三组及以上均值比较应考虑方差分析。",
    textbook: "心理统计：方差分析。",
    solutionSteps: ["确定自变量水平数为 3", "确认因变量为连续变量", "选择单因素方差分析"],
  },
  {
    id: "q-stat-002",
    year: "2026",
    number: "第11题",
    subject: "心理统计",
    type: "single",
    title: "2026 原创模拟 · 心理统计 · 第11题",
    stem: "若要描述学习时间与考试成绩之间线性关系的方向和强度，最常用的统计量是？",
    options: [
      { id: "A", text: "标准差" },
      { id: "B", text: "相关系数" },
      { id: "C", text: "方差" },
      { id: "D", text: "众数" },
    ],
    answer: "B",
    explanation: "相关系数用于刻画两个变量线性关系的方向和强度。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-correlation"],
    trap: "标准差和方差描述离散程度，不描述两个变量关系。",
    textbook: "心理统计：相关分析。",
  },
  {
    id: "q-stat-003",
    year: "2026",
    number: "第12题",
    subject: "心理统计",
    type: "calculation",
    title: "2026 原创模拟 · 心理统计 · 第12题",
    stem: "比较同一组学生训练前后的焦虑得分差异，通常应使用哪种检验？",
    answer: "配对样本 t 检验",
    explanation: "同一批被试前后测数据存在配对关系，应使用配对样本 t 检验。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-t-test"],
    trap: "同一组前后测不是独立样本。",
    textbook: "心理统计：t 检验。",
    solutionSteps: ["判断是否同一组被试", "确认比较的是均值差异", "选择配对样本 t 检验"],
  },
  {
    id: "q-measure-001",
    year: "2026",
    number: "第13题",
    subject: "心理测量",
    type: "single",
    title: "2026 原创模拟 · 心理测量 · 第13题",
    stem: "同一测验在不同时间重复施测所得分数的一致性，主要反映哪种信度？",
    options: [
      { id: "A", text: "评分者信度" },
      { id: "B", text: "内部一致性信度" },
      { id: "C", text: "重测信度" },
      { id: "D", text: "复本信度" },
    ],
    answer: "C",
    explanation: "重测信度考察同一测验跨时间的稳定性。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-reliability"],
    trap: "内部一致性信度考察测验内部题目的一致性，不强调跨时间。",
    textbook: "心理测量：信度。",
  },
  {
    id: "q-measure-002",
    year: "2026",
    number: "第14题",
    subject: "心理测量",
    type: "short",
    title: "2026 原创模拟 · 心理测量 · 第14题",
    stem: "简述内容效度的含义，并说明它通常如何评估。",
    answer: "内容效度指测验项目对目标内容领域的代表性，常通过专家判断、双向细目表等方式评估。",
    explanation: "内容效度不依赖一个单一统计系数，而强调测验内容是否覆盖并代表目标领域。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-validity"],
    trap: "不要把内容效度写成预测未来表现的效标效度。",
    textbook: "心理测量：效度。",
  },
  {
    id: "q-measure-003",
    year: "2026",
    number: "第15题",
    subject: "心理测量",
    type: "single",
    title: "2026 原创模拟 · 心理测量 · 第15题",
    stem: "解释个体测验分数在常模群体中相对位置的参照系统称为？",
    options: [
      { id: "A", text: "常模" },
      { id: "B", text: "项目区分度" },
      { id: "C", text: "信度" },
      { id: "D", text: "难度" },
    ],
    answer: "A",
    explanation: "常模用于解释个体分数在参照群体中的相对位置。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-norm"],
    trap: "难度和区分度是项目分析指标，不是分数解释参照系统。",
    textbook: "心理测量：常模与分数解释。",
  },
  {
    id: "q-edu-001",
    year: "2026",
    number: "第16题",
    subject: "教育心理学",
    type: "single",
    title: "2026 原创模拟 · 教育心理学 · 第16题",
    stem: "学生把数学中学到的逻辑推理方法用于物理学习，这属于什么现象？",
    options: [
      { id: "A", text: "学习迁移" },
      { id: "B", text: "机械保持" },
      { id: "C", text: "前摄抑制" },
      { id: "D", text: "倒摄抑制" },
    ],
    answer: "A",
    explanation: "学习迁移指一种学习对另一种学习产生影响，题干体现了跨学科方法迁移。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-learning-transfer"],
    trap: "抑制是记忆材料相互干扰，不是方法应用。",
    textbook: "教育心理学：学习迁移。",
  },
  {
    id: "q-edu-002",
    year: "2026",
    number: "第17题",
    subject: "教育心理学",
    type: "short",
    title: "2026 原创模拟 · 教育心理学 · 第17题",
    stem: "简述成就动机高的学生在学习任务选择上的典型特点。",
    answer: "倾向选择中等难度、有挑战但可达成的任务，并重视成功反馈。",
    explanation: "高成就动机者通常不选择过易或过难任务，而偏好能体现能力且成功概率适中的任务。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-achievement-motivation"],
    trap: "高成就动机不等于总是选择最难任务。",
    textbook: "教育心理学：学习动机。",
  },
  {
    id: "q-social-001",
    year: "2026",
    number: "第18题",
    subject: "社会心理学",
    type: "single",
    title: "2026 原创模拟 · 社会心理学 · 第18题",
    stem: "个体把他人成功主要解释为努力，把失败解释为能力不足，这属于对行为原因的什么过程？",
    options: [
      { id: "A", text: "归因" },
      { id: "B", text: "从众" },
      { id: "C", text: "服从" },
      { id: "D", text: "社会助长" },
    ],
    answer: "A",
    explanation: "归因是对自己或他人行为原因的推断过程。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-attribution"],
    trap: "题干在问原因解释，不是在问群体影响。",
    textbook: "社会心理学：归因理论。",
  },
  {
    id: "q-social-002",
    year: "2026",
    number: "第19题",
    subject: "社会心理学",
    type: "single",
    title: "2026 原创模拟 · 社会心理学 · 第19题",
    stem: "个体在群体压力下改变原有判断以符合多数人意见，这称为？",
    options: [
      { id: "A", text: "从众" },
      { id: "B", text: "社会惰化" },
      { id: "C", text: "去个性化" },
      { id: "D", text: "刻板印象" },
    ],
    answer: "A",
    explanation: "从众是个体在真实或想象的群体压力下，使行为或判断与群体保持一致。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-conformity"],
    trap: "社会惰化强调群体任务中个人努力下降。",
    textbook: "社会心理学：社会影响。",
  },
  {
    id: "q-abnormal-001",
    year: "2026",
    number: "第20题",
    subject: "变态心理学",
    type: "short",
    title: "2026 原创模拟 · 变态心理学 · 第20题",
    stem: "简述广泛性焦虑障碍的核心表现。",
    answer: "对多个事件或活动持续、过度且难以控制的担忧，并伴随紧张、疲劳、注意困难、睡眠问题等症状。",
    explanation: "答题重点是“广泛、持续、过度、难以控制”，不能只写一般紧张。",
    sourceType: "original",
    sourceName: "312 v1 原创样题",
    copyrightStatus: "owned",
    knowledgePointIds: ["kp-anxiety"],
    trap: "不要把短暂考前紧张直接等同于障碍。",
    textbook: "变态心理学：焦虑障碍。",
  },
];

export const resourceSources = [
  {
    name: "新东方在线心理学真题频道",
    value: "2010-2026 历年心理学真题与答案解析索引，仅作为来源入口",
    url: "https://kaoyan.koolearn.com/xinlixue/xinlixuezhenti/",
  },
  {
    name: "文都考研 2025 统考312解析",
    value: "2025 年 312 真题答案解析入口，当前不导入全文",
    url: "https://kaoyan.wendu.com/m/2025/0108/210020.shtml",
  },
  {
    name: "233网校 2021 统考312解析",
    value: "2021 年 312 真题与答案解析页面，适合人工校对索引",
    url: "https://www.233.com/kaoyan/lkzh/zhenti/202111/25100939774160.html",
  },
  {
    name: "聚创考研 2023 PDF",
    value: "2023 年 312 真题及答案解析 PDF，需确认授权后导入",
    url: "https://m.juyingonline.com/upload/202212/27/202212271432542607.pdf",
  },
  {
    name: "勤思教育 312/347 区分",
    value: "312 七科范围与大致分值结构",
    url: "https://www.qsiedu.com/e/wap/show.php?bclassid=0&cid=117&classid=400&cpage=52&id=36554&style=0",
  },
  {
    name: "高顿教育 312参考书目",
    value: "普通、发展、社会、教育、实验、统计、测量参考书",
    url: "https://www.gaodun.com/kaoyan/1680959.html",
  },
];
