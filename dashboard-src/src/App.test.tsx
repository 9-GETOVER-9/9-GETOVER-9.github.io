import { fireEvent, render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { beforeEach, describe, expect, it } from "vitest";
import App from "./App";

function renderAt(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <App />
    </MemoryRouter>,
  );
}

describe("312 dashboard", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("renders the 312 dashboard shell and all required sections", () => {
    renderAt("/dashboard/");

    expect(screen.getAllByText("312心理学考研智能备考平台")[0]).toBeInTheDocument();
    expect(screen.getByText("今日推荐")).toBeInTheDocument();
    expect(screen.getByText("开始 5 分钟刷题")).toBeInTheDocument();
    expect(screen.getByText("做题贡献（最近90天）")).toBeInTheDocument();
    expect(screen.getByText("公告栏")).toBeInTheDocument();
    expect(screen.getByText("七科掌握进度")).toBeInTheDocument();
    expect(screen.getByText("Beta 功能")).toBeInTheDocument();
    expect(screen.getByText("我的收藏夹")).toBeInTheDocument();
    expect(screen.getAllByText("普通心理学")[0]).toBeInTheDocument();
    expect(screen.getByText("变态心理学")).toBeInTheDocument();
  });

  it("renders the question overview page with filters and question rows", () => {
    renderAt("/dashboard/questions");

    expect(screen.getByRole("heading", { name: "真题总览" })).toBeInTheDocument();
    expect(screen.getByText("按科目筛选")).toBeInTheDocument();
    expect(screen.getByText("2026 原创模拟 · 普通心理学 · 第1题")).toBeInTheDocument();
    expect(screen.getAllByText("开始练习")[0]).toBeInTheDocument();
    expect(screen.getByText("已检索资料源")).toBeInTheDocument();
    expect(screen.getByText(/文都考研/)).toBeInTheDocument();
  });

  it("opens a question, submits an answer, and shows explanation feedback", () => {
    renderAt("/dashboard/questions/q-psy-001");

    expect(screen.getByRole("heading", { name: "2026 原创模拟 · 普通心理学 · 第1题" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: /B\./ }));
    fireEvent.click(screen.getByRole("button", { name: "提交答案" }));

    expect(screen.getByText("回答正确")).toBeInTheDocument();
    expect(screen.getByText("答案解析")).toBeInTheDocument();
    expect(screen.getByText("考点")).toBeInTheDocument();
    expect(screen.getByText("易错点")).toBeInTheDocument();
  });

  it("persists mastery and collection state in localStorage", () => {
    renderAt("/dashboard/questions/q-psy-001");

    fireEvent.click(screen.getByRole("button", { name: /B\./ }));
    fireEvent.click(screen.getByRole("button", { name: "提交答案" }));
    fireEvent.click(screen.getByRole("button", { name: "标记掌握" }));
    fireEvent.click(screen.getByRole("button", { name: "收藏本题" }));

    const stored = window.localStorage.getItem("psychology312-attempts-v1");
    expect(stored).toContain("q-psy-001");
    expect(stored).toContain("mastered");
    expect(stored).toContain('"isCollected":true');
  });

  it("uses saved attempts to drive dashboard statistics", () => {
    window.localStorage.setItem(
      "psychology312-attempts-v1",
      JSON.stringify({
        "q-psy-001": {
          questionId: "q-psy-001",
          selectedAnswer: "B",
          isCorrect: true,
          mastery: "mastered",
          isCollected: true,
          answeredAt: "2026-06-17T08:00:00.000Z",
        },
      }),
    );

    renderAt("/dashboard/");

    expect(screen.getByText("已做题数")).toBeInTheDocument();
    expect(screen.getAllByText("1").length).toBeGreaterThan(0);
    expect(screen.getByText("普通心理学")).toBeInTheDocument();
    expect(screen.getByText("掌握 1")).toBeInTheDocument();
    expect(screen.getByText("收藏 1 题")).toBeInTheDocument();
  });

  it("renders the analysis page with mastery and weakness insights", () => {
    renderAt("/dashboard/analysis");

    expect(screen.getByRole("heading", { name: "真题分析" })).toBeInTheDocument();
    expect(screen.getByText("掌握雷达")).toBeInTheDocument();
    expect(screen.getByText("薄弱模块")).toBeInTheDocument();
    expect(screen.getByText("方差分析")).toBeInTheDocument();
  });

  it("renders the knowledge graph page with linked psychology concepts", () => {
    renderAt("/dashboard/graph");

    expect(screen.getByRole("heading", { name: "知识图谱" })).toBeInTheDocument();
    expect(screen.getByText("312知识图谱")).toBeInTheDocument();
    expect(screen.getByText("核心概念网络")).toBeInTheDocument();
    expect(screen.getByText("选择性注意")).toBeInTheDocument();
  });

  it("renders the statistics page with weekly and question-type charts", () => {
    renderAt("/dashboard/stats");

    expect(screen.getByRole("heading", { name: "数据统计" })).toBeInTheDocument();
    expect(screen.getByText("本周学习统计")).toBeInTheDocument();
    expect(screen.getByText("题型正确率")).toBeInTheDocument();
    expect(screen.getByText("论述题")).toBeInTheDocument();
  });
});
