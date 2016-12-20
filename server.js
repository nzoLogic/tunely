var express = require('express'),
    app = express(),
    db = require('./models'),
    controllers = require('./controllers'),
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({
    extended: true
}));
///allow index access to public
app.use(express.static('public'));
//default directory
app.get('/', function(req, res) {
    console.log(__dirname);
    res.sendFile('views/index.html', {
        root: __dirname
    });
});

//gets api info
app.get('/api', controllers.api.index);
//get all albums
app.get('/api/albums', controllers.albums.index);
//post new album
app.post('/api/albums', controllers.albums.create);

///listen to environment or local port 3000
app.listen(process.env.port || 3000, function() {
  console.log('express server online on port ', 3000);
});
