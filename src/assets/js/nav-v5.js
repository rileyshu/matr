$(document).ready(function () {
  $(window).scrollTop(0)
});
var lastScrollTop = 0;
$(window).scroll(function () {
  var a = $(this).scrollTop(),
    r = $(".navigation-wrapper").outerHeight();
  a > lastScrollTop && a > r && !$(".product-nav, .tertiary-nav, .quaternary-nav").hasClass("navbar-fixed-top") ? $(".product-nav, .tertiary-nav, .quaternary-nav").addClass("navbar-fixed-top") : a < r && $(".product-nav, .tertiary-nav, .quaternary-nav").removeClass("navbar-fixed-top"), lastScrollTop = a
});
