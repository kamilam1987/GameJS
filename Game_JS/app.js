//Connection wit a server using express and sending data to a browser
let express = require('express');
let bodyParser = require('body-parser');
let app = express();

// Body-parser used to send data
let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.set('view engine', 'ejs'); //ejs engine 
// Handled by middleware 
app.use('/assets', express.static('assets'));// This function serve a static file

app.get('/', function(req, res){
    res.render('instructions');
});

app.get('/players', function(req, res){
    res.render('players', {qs: req.query}); //Query string
});

//Post method that sends name to game view
app.post('/players', urlencodedParser, function(req, res){
    console.log(req.body);
    res.render('game', {data: req.body}); //Query string
});

//app.get('/profile/:name', function(req, res){
    //let data = {age: 29, color: 'red'};
  //res.render('profile', {person: req.params.name, data: data});
//});

app.listen(3000);
