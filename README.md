# Study Buddy Express Backend

Hack the North 2021

GET /listCategories
- Lists all created categories

GET /getQuestions/:category
- Lists all questions under category

POST /postQuestion
- Creates a new question. Expects 'prompt', 'keyword', and 'category' in an HTTP request body in URL-encoded format.
