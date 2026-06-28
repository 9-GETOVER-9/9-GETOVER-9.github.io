import { describe, expect, it } from "vitest";
import { questions } from "./psychology312";

describe("312 real question bank data", () => {
  it("loads the 2026 real-question import as the first usable batch", () => {
    const imported = questions.filter((question) => question.sourceName === "2026年312心理学真题");

    expect(imported).toHaveLength(78);
    expect(imported[0]).toMatchObject({
      id: "real-2026-001",
      type: "single",
      sourceType: "real",
      copyrightStatus: "unknown",
      answer: "D",
    });
    expect(imported[60]).toMatchObject({
      id: "real-2026-061",
      type: "multiple",
      answer: ["A", "B", "C", "D"],
    });
    expect(imported[70]).toMatchObject({
      id: "real-2026-071",
      type: "short",
      answer: "",
    });
  });
});
