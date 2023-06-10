$(function () {
  $('#js-hamburger-menu').on('click', function () {
    $('.nav-area_header').slideToggle(500)
    $('.hamburger-menu').toggleClass('hamburger-menu--open')
    });
  $('.nav-item').on('click', function () {
    $('.nav-area_header').slideToggle(500)
    $('.hamburger-menu').removeClass('hamburger-menu--open')
    });
});