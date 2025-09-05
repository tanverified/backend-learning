const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Home page");
  } else if (url === "/products") {
    res.writeHead(200, { "Content-type": "text/plain" });
    res.end("Product page");
  } else {
    res.writeHead(404, { "Content-type": "text/plain" });
    res.end("404: Page not found");
  }
});

const port = 8888;
server.listen(port, () => {
  console.log("Server is started on port 🚀", port);
});
