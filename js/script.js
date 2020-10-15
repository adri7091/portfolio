$(document).ready(function () {

  // - Change the class of the navbar to change the color and border with a little transition on css - //
  updateNavStyle();
  $(window).scroll(function () {
    updateNavStyle();
  });

  // - When the web is in responsive mode hide the navbar-collapse when you click an option -//
  $('.collapse-check>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });
});

function updateNavStyle() {
  if ($(this).scrollTop() > 200) {
    $('.navbar').removeClass('navbar-top-transparent');
    $('.navbar').addClass('navbar-top-bg');
    $('.dropdown-menu').removeClass('dropdown-transparent');
    $('.dropdown-menu').addClass('dropdown-bg');
  } else {
    $('.navbar').removeClass('navbar-top-bg');
    $('.navbar').addClass('navbar-top-transparent');
    $('.dropdown-menu').removeClass('dropdown-bg');
    $('.dropdown-menu').addClass('dropdown-transparent');
  }
}