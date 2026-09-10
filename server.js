const http = require("node:http");
const port = Number(process.env.PORT || 10000);
const server = http.createServer((request, response) => {
  response.writeHead(200, { "content-type": "application/json" });
  response.end(JSON.stringify({ fixture: "node", path: request.url, status: "ok" }));
});
server.listen(port, "0.0.0.0");
