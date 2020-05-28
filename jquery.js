// $(document).ready(function () {
//   alert("jquery loaded");
// });

// $('#idnamehere');

var header = $('h1');

header.css({
  background: 'lightgreen'
});

//////////////////////////
$('h1').css({ border: '3px solid magenta' });

var dom = "<div style='text-align: center; border: 2px solid grey'>Document Object Model </div>";

$("#studyDom div").append(dom);

var domSection = $("#studyDom div");

domSection.on('click', function () {

  $(this).css({ 'background': 'pink' });

});

$('h1').click(function () {

  $(this).css({
    'background': 'lightgrey',
    'border': '2px solid darkblue',
    'color': 'cyan'
  });

  alert('you clicked me');

});