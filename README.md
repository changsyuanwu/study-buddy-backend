# Study Buddy Express Backend

Created for Hack the North 2021

Wraps around Google Cloud Platform's Firebase API and allows us to manipulate the results.

Check out the full project here: https://devpost.com/software/study-buddy-dw4ykf

GET /listCategories
- Lists all created categories

GET /getQuestions/:category
- Lists all questions under category

POST /postQuestion
- Creates a new question. Expects 'prompt', 'keyword', and 'category' in an HTTP request body in URL-encoded format.
