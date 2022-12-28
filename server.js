const express = require('express');
const app = express();
const sharejs = require('share')
require('redis')
require('dotenv')
app.set('view engine', 'ejs');

   
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
res.render('pad');
});
app.get('/(:id)',function(req,res) { 
    res.render('pad')
})

const options = {
    db: {type: 'redis'}
}

sharejs.server.attach(app,options);

const port = process.env.PORT || 8000;
app.listen(port);