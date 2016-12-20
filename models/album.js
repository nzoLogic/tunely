var mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    songData = require("./song.js"); // does it need a capital S?

var AlbumSchema = new Schema({
  artistName: String,
  name: String,
  songs: {
    type: Schema.Types.ObjectId,
    ref: 'Song'
  },
  releaseDate: String,
  genres: [String]
});

var Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;
