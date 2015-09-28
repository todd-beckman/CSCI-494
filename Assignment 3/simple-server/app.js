//NodeJS Modules
var express = require('express');
var path = require('path');
//HTTP Body
var bodyParser = require('body-parser');

var app = express();

// view engine setup
//current directory + /views/
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
app.engine('html', require('hbs').__express);
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


/* GET home page. */
app.get('/', function(req, res, next) {
    var list = generate_list();
    res.render('index', { title: 'Learning Javascript', listData:list });
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

var http = require('http');
var port = '7777';
app.set('port', port);
var server = http.createServer(app);
/**
 * Listen on provided port, on all network interfaces.
 */
console.log("Server listening on port "+ port);
server.listen(port);

//Private Methods

function generate_list(){
    var loremWords = ["lorem","ipsum","dolor","sit","amet","consectetur","adipisicing","elit,","sed","do"];
    var category = ["one", "two", "three"];
    var stop = 1000;
    var list = [];
    for(var i = 0; i < stop; i++ ){

        var text = "";
        for( var i2=0; i2 < 7; i2++ )
            text += loremWords[Math.floor((Math.random() * 10))] + " ";
        var p = {headline: text, category: category[Math.floor((Math.random() * 3))]};
        list.push(p);
    }
    return list;
}