/* CLIENT-SIDE JS
 *
 * You may edit this file as you see fit.  Try to separate different components
 * into functions and objects as needed.
 *
 */


/* hard-coded data! */
// var sampleAlbums = [];
// sampleAlbums.push({
//              artistName: 'Ladyhawke',
//              name: 'Ladyhawke',
//              releaseDate: '2008, November 18',
//              genres: [ 'new wave', 'indie rock', 'synth pop' ]
//            });
// sampleAlbums.push({
//              artistName: 'The Knife',
//              name: 'Silent Shout',
//              releaseDate: '2006, February 17',
//              genres: [ 'synth pop', 'electronica', 'experimental' ]
//            });
// sampleAlbums.push({
//              artistName: 'Juno Reactor',
//              name: 'Shango',
//              releaseDate: '2000, October 9',
//              genres: [ 'electronic', 'goa trance', 'tribal house' ]
//            });
// sampleAlbums.push({
//              artistName: 'Philip Wesley',
//              name: 'Dark Night of the Soul',
//              releaseDate: '2008, September 12',
//              genres: [ 'piano' ]
//            });
/* end of hard-coded data */


var renderAlbum;

$(document).ready(function() {
  console.log('app.js loaded!');
  var albumHtml = $('#album-location').html(),
  albumHandlebars = Handlebars.compile(albumHtml);
  // this function takes a single album and renders it to the page
  function renderAlbum(albums) {

    console.log('rendering album:', albums);
    albums.forEach(function(album){
      $('.panel-body').append(albumHandlebars({album: album}));
    })
  }

  $.ajax({
    method: 'GET',
    url: '/api/albums',
    success: handleSuccess,
    error: handleError
  })

  $('.album-form').submit(function (event) {
    event.preventDefault();
    $.ajax ({
      method: 'POST',
      url: '/api/albums',
      data: $(this).serializeArray(),
      success: handleFormAlbumSuccess,
      error: handleError
    });
  })

  function handleSuccess(albums){
    console.log('way to go, ajax succes.');
    renderAlbum(albums);
  }

  function handleFormAlbumSuccess(data){
    console.log('Form Album submission succesful!! You are smart and cool.', data);
  }

});

function handleError(){
  console.log('ya done messed up a-aron.  ajax error');
}
