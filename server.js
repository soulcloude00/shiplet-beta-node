const http = require("node:http");
const port = Number(process.env.PORT || 10000);
console.log("[diag] PORT env =", process.env.PORT ?? "(unset)", "binding", port);
fetch("https://ifconfig.me/ip").then(r => r.text()).then(ip => console.log("[diag] egress ip =", ip.trim())).catch(e => console.log("[diag] egress lookup failed:", e.message));
const server = http.createServer((request, response) => {
  response.writeHead(200, { "content-type": "application/json" });
  response.end(JSON.stringify({ fixture: "node", path: request.url, status: "ok" }));
});
server.on("error", (e) => console.log("[diag] listen error:", e.code, e.message));
server.listen(port, "0.0.0.0", () => console.log("[diag] listening on 0.0.0.0:" + port));
