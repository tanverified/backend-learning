Here’s your **Node.js HTTP Module** revision notes with applications and example code — short, clear, and revision-friendly.

---

## 🌐 Node.js HTTP Module – Revision Notes

---

### 1️⃣ **What is the HTTP Module?**

- Core module in Node.js (`require('http')`)
- Used to **create and manage web servers**.
- Works on **request-response** model using HTTP protocol.
- No need to install separately (built-in).

---

### 2️⃣ **Key Methods**

- **`http.createServer()`** → Creates a server instance.
- **`server.listen(port, hostname, callback)`** → Starts server.
- **`req`** (Incoming request) → Contains URL, headers, method, etc.
- **`res`** (Server response) → Used to send data back.

---

### 3️⃣ **Creating a Basic Server**

```js
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello, Node.js HTTP Server!");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

**Explanation:**

- `writeHead(statusCode, headers)` → Sets HTTP status & headers.
- `end()` → Ends the response.

---

### 4️⃣ **Routing with HTTP Module**

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Home Page</h1>");
  } else if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>About Page</h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html" });
    res.end("<h1>404 Not Found</h1>");
  }
});

server.listen(3000, () =>
  console.log("Server running on http://localhost:3000")
);
```

---

### 5️⃣ **Applications of HTTP Module**

- Build basic **API servers** without external frameworks.
- Serve **static files** like HTML, CSS, JS.
- Handle **form submissions** and query params.
- Build **REST APIs** before moving to Express.js.
- Create **proxies** or handle low-level HTTP operations.

---

### 6️⃣ **Serving JSON Data**

```js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/data") {
    const data = { name: "Tanveer", role: "Developer" };
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(data));
  }
});

server.listen(3000, () => console.log("Server on http://localhost:3000"));
```

---

### 🧠 **Summary Table**

| Method/Property   | Description                       |
| ----------------- | --------------------------------- |
| `createServer()`  | Creates HTTP server               |
| `listen()`        | Starts server on a port           |
| `req.url`         | Request URL path                  |
| `req.method`      | HTTP method (`GET`, `POST`, etc.) |
| `res.writeHead()` | Set status & headers              |
| `res.end()`       | Send response & close             |

---

If you want, I can **extend these notes** with:

- **Handling POST requests** (reading request body)
- **Serving static HTML files using `fs` with HTTP module**
  so it’s a **full revision kit** for this topic.

