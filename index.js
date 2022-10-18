const exprss = require("express");
const app = exprss();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.get("/", (req, res) => {
  res.send("hello babu");
});
app.get("/news-categories", (req, res) => {
  res.send(categories);
});
app.get("/news", (req, res) => {
  res.send(news);
});

app.listen(port, () => {
  console.log("new protal server runnig on port", port);
});
