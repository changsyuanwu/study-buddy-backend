var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.send("Hello from App Engine!");
});

router.get("/getQuestions/:category", async function(req, res, next) {
  const db = req.db;
  const category = req.params.category.toLowerCase();
  console.log(category);

  let questions = [];

  const snapshot = await db.collection(category).get();
  snapshot.forEach((doc) => {
    console.log(doc.id, '=>', doc.data());  // debugging tool
    questions.push(doc.data());
  });

  res.json(questions);
});

module.exports = router;
