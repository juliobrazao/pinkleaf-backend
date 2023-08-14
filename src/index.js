const express = require('express');
const { sum } = require('./functions/sum');
const app = express();

app.get('/', (req, res) => {
  res.status(200).json({
    status: "ok"
  });
});

app.get('/sum', (req, res) => {
  res.status(200).json({
    sentence: `${Object.values(req.query)[0]} + ${Object.values(req.query)[1]}`,
    result: sum([req.query])
  });
});

app.listen(3000, () => {
  console.log('Running!');
});