const fs = require("node:fs");
const path = require("node:path");

const root = path.resolve(__dirname, "..");
const dashboardDir = path.join(root, "dashboard");
const indexFile = path.join(dashboardDir, "index.html");
const routes = ["questions", "analysis", "graph", "stats"];
const dataFile = path.join(root, "dashboard-src", "src", "data", "psychology312.ts");

for (const route of routes) {
  const routeDir = path.join(dashboardDir, route);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.copyFileSync(indexFile, path.join(routeDir, "index.html"));
}

const dataSource = fs.readFileSync(dataFile, "utf8");
const questionIds = [...dataSource.matchAll(/id:\s*"([^"]+)"/g)]
  .map((match) => match[1])
  .filter((id) => id.startsWith("q-") || id.startsWith("real-"));

for (const questionId of questionIds) {
  const routeDir = path.join(dashboardDir, "questions", questionId);
  fs.mkdirSync(routeDir, { recursive: true });
  fs.copyFileSync(indexFile, path.join(routeDir, "index.html"));
}

console.log(`dashboard fallbacks: ${routes.join(", ")} + ${questionIds.length} question detail routes`);
