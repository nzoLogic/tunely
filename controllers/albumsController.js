var db = require("../models");

function index(req, res) {
 // send back all albums as JSON
 db.Album.find(function (err, album){
   if (err) {
     console.log('there is an error in the controller.js index function');
   }
   console.log('album is ', album);
   res.json(album);
 })
}

// POST /api/albums
function create(req, res) {

  var newGenre = req.body.genres.split(',');
  req.body.genres = newGenre;
  var newAlbum = new db.Album(req.body);
  newAlbum.save(function(err, savedAlbum) {
    if (err) {
      console.log('error saving album.');
    }
    console.log('new album saved!');
    res.send(savedAlbum);
  });
}

// GET /api/albums/:albumId
function show(req, res) {
 // find one album by id and send it back as JSON
}

// DELETE /api/albums/:albumId
function destroy(req, res) {
 // find one album by id, delete it, and send it back as JSON
}

// PUT or PATCH /api/albums/:albumId
function update(req, res) {
 // find one album by id, update it based on request body,
 // and send it back as JSON
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
