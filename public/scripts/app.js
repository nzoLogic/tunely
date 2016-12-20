var renderAlbum;

$(document).ready(function() {
    console.log('app.js loaded!');
    var albumHtml = $('#album-location').html(),
        albumHandlebars = Handlebars.compile(albumHtml);
    // this function takes a single album and renders it to the page
    function renderAlbum(albums) {

        albums.forEach(function(album) {
            $('#albums').append(albumHandlebars({
                album: album
            }));
        })
    }

    $.ajax({
        method: 'GET',
        url: '/api/albums',
        success: handlePageLoadSuccess,
        error: handleError
    })

    $('.album-form').submit(function(event) {
        event.preventDefault();
        $.ajax({
            method: 'POST',
            url: '/api/albums',
            data: $(this).serializeArray(),
            success: handleFormAlbumSuccess,
            error: handleError
        });
        this.reset();

    })

    function handleFormAlbumSuccess(data) {
        console.log('Form Album submission succesful!! You are smart and cool.', data);
        renderAlbum([data]);
    }

    function handlePageLoadSuccess(albums) {
        console.log('way to go, ajax succes.');
        console.log(albums);
        renderAlbum(albums);
    }
    $('#albums').click(function(event) {
      console.log('add-song clicked!');
      var id = $(this).closest('.album').data('album-id'); // "5665ff1678209c64e51b4e7b"
      console.log('id', id);
    });

});

function handleError() {
    console.log('ya done messed up a-aron.  ajax error');
}
