const express = require("express");

const app = express();

const myMiddleware = (req, res, next) => {
  console.log("This is from middleware 🚀");
  next();
};

app.use(myMiddleware);

app.get('/', (req,res)=> {
    res.send("Home Page")
})
app.get('/about', (req,res)=> {
    res.send("About Page")
})

app.listen(8888, () => {
  console.log("App is running on port ✅ 8888");
});
