$(function (){
  var playerEl = $("#player")[0];
  var mainEl = $('#main');

  mainEl.on('click', '.fa-play', function() {
    $('.fa-stop').addClass('fa-play').removeClass('fa-stop');
    $(this).removeClass('fa-play').addClass('fa-stop');
    var file = $(this).data('file');
    playerEl.src = file;
    playerEl.play();
    var song = $(this).parent().children('span.title').text();
    $('#select').text("Now playing: " + song);
  }).on('click', '.fa-stop', function() {
    $(this).removeClass('fa-stop').addClass('fa-play');
    playerEl.pause();
    playerEl.src = '';
    $('#select').text("Select a song!");
  });

  $.getJSON('data.json', function(tracks) {
    var $tracksTemplate = $('#tracksTemplate').html();

    var newHTML = Mustache.to_html($tracksTemplate, tracks);

    $('.tracks').html(newHTML);
  });
});
