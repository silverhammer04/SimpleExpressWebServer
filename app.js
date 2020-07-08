const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => res.send('Hello World! with nodemon'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));