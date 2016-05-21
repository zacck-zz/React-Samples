var express = require('express');


//create an app
var app = express();

//specify served folder
app.use(express.static('public'));

app.listen(3000, function(){
  console.log('Express Server is on port 3000');
})
