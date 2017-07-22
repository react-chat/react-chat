const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, './public')));

app.set('port', process.env.PORT || 5000);
app.listen(app.get('port'), (err) => {
  if (err) {
    return console.log('Error starting server: ', err);
  }
  return console.log('Listening on port: ', app.get('port'));
});

module.exports.app = app;
