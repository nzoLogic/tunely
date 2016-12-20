var renderAlbum;

$(document).ready(function() {
    console.log('app.js loaded!');
    var albumHtml = $('#album-location').html(),
        albumHandlebars = Handlebars.compile(albumHtml);
    // this function takes a single album and renders it to the page
    function renderAlbum(albums) {

        albums.forEach(function(album) {
            $('.panel-body').append(albumHandlebars({
                album: album
            }));
        })
    }

    $.ajax({
        method: 'GET',
        url: '/api/albums',
        success: handleSuccess,
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

    function handleSuccess(albums) {
        console.log('way to go, ajax succes.');
        renderAlbum(albums);
    }

});

function handleError() {
    console.log('ya done messed up a-aron.  ajax error');
}
