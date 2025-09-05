const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
  // res.send(new Buffer("wahoo"));
  // res.send({ some: "json" });
  // res.send("<p>some html</p>");
  // res.status(404).send("Sorry, cant find that");
});

const port = 8888;
app.listen(port, () => {
  console.log("Server is started on the port 🚀", port);
});
