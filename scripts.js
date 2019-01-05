// When user scroll down the header fades out
$(window).bind('scroll', function () {
  if ($(window).scrollTop() > 0) {
    $('header').hide('slow');
  } else {
    $('header').slideDown('fast');
  }
});

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById('myDropdown').classList.toggle('show');
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName('dropdown-content');
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
};

//filter images in gallery
$(function () {
  var selectedClass = '';
  $('.filter').click(function () {
    selectedClass = $(this).attr('data-rel');
    $('#gallery').fadeTo(100, 0.1);
    $('#gallery div').not('.' + selectedClass).fadeOut().removeClass('animation');
    setTimeout(function () {
      $('.' + selectedClass).fadeIn().addClass('animation');
      $('#gallery').fadeTo(300, 1);
    }, 300);
  });
});
