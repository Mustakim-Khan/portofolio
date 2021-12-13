const express = require('express');
const path = require('path')

const app = express();

app.use(express.static('./dist/portofolio'));

app.get('/*', (req, res) => {
  res.sendFile('index.html', { root: 'dist/portfolio-mustakim'})
});

app.listen(process.env.PORT || 8000);
