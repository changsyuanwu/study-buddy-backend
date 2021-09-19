var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello from App Engine!");
});

/* GET question set given a category */
router.get("/getQuestions/:category", async function(req, res, next) {
  const db = req.db;
  const category = req.params.category.toLowerCase();
  console.log(category);  // debugging tool

  let questions = [];

  const snapshot = await db.collection(category).get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());  // debugging tool
    questions.push(doc.data());
  });

  res.json(questions);
});

router.post("/postQuestion", async function(req, res, next) {
  const db = req.db;
  const category = req.body.category.toLowerCase();
  const keyword = req.body.keyword.toLowerCase();
  const prompt = req.body.prompt.toLowerCase();

  const docRef = db.collection(category).doc();
  await docRef.set({
    keyword: keyword,
    prompt: prompt
  });
});

module.exports = router;
