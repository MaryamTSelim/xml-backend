const express = require('express');
var xmlparser = require('express-xml-bodyparser');
const app = express();
app.use(xmlparser());

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})

app.post('/', function(req, res, next) {
    console.log('Raw XML: ' + req.rawBody);
    console.log('Parsed XML: ' + JSON.stringify(req.body));
    if (req.body.name) {
      res.send(`<message>Hi, ${req.body.name}!</message>`);
    } else {
      res.status(400).send('Unexpected XML received');
    }
  });