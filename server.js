const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('.'));
app.use(express.json());

// API لتقديم الهوية
app.post('/submit', (req, res) => {
  const newID = req.body;
  const data = JSON.parse(fs.readFileSync('database.json'));
  data.identities.push(newID);
  fs.writeFileSync('database.json', JSON.stringify(data));
  res.send({ success: true });
});

app.listen(3000, () => {
  console.log('الخادم يعمل على http://localhost:3000');
});
