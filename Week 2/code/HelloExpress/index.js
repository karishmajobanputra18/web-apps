// 1. Install express with "npm i express"
// 2. Save as "index.js", run with "node index.js"
// 3. Visit http://localhost:3000 in your browser

const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(3000)
