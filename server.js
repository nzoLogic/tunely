var express = require('express'),
    app = express(),
    db = require('./models'),
    controllers = require('./controllers');

  app.use(express.static('public'));

app.get('/', function(req, res){
  console.log(__dirname);
  res.sendFile('views/index.html', { root: __dirname});
});
app.get('/api', controllers.api.index);

app.listen(process.env.port || 3000, function(){
  console.log('express server online on port ', 3000);
});

app.get('/api/albums', controllers.albums.index);
app.post('/api/albums', controllers.albums.create);
