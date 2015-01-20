$('#main').on('click', '.fa-play', function() {
  $('audio').each(function() {this.pause()});
  $('.fa-stop').addClass('fa-play').removeClass('fa-stop');
  $(this).removeClass('fa-play').addClass('fa-stop');
  $(this).parent().children('audio')[0].play();
  var song = $(this).parent().children('span.title').text();
  $('#select').text("Now playing: " + song);
});

$('#main').on('click', '.fa-stop', function() {
  $(this).removeClass('fa-stop').addClass('fa-play');
  $(this).parent().children('audio')[0].pause();
  $('#select').text("Select a song!");
});

$.getJSON('data.json', function(tracks) {
  var $tracksTemplate = $('#tracksTemplate').html();

  var newHTML = Mustache.to_html($tracksTemplate, tracks);

  $('.tracks').html(newHTML);
})
