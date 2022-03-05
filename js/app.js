$(function(){
   'use strict'
   $(window).on('scroll',function(){
       var scrollTop = $(this).scrollTop();
       if (scrollTop > 500) {
           $("#backTop").fadeIn(500)
       }
       else{
           $("#backTop").fadeOut(500)
       }
   })
   $('#backTop').on('click', function(){
       $('html, body').animate(
       {
           scrollTop:0
       },
       600
       );
   });
   $ ('a').on('click', function (e){
       e.preventDefault()
       var hash =this.hash
       if (this.hash !== ''){
           $("html, body").animate(
               {
                   scrollTop: $(hash).offset().top
               },
           );
           800
       }
   })
  

   $(window).on('scroll', function () {
    var menuHeight = $('#header').height();
    var scrollSize = $(window).scrollTop();
    if (scrollSize > menuHeight) {
       $('#header').addClass('animate')
    } else {
       $('#header').removeClass('animate')
    }
 })
 $('.banner_slider').slick({
    prevArrow: '<i class="fas fa-chevron-left banner_slider_icon"></i>',
    nextArrow: '<i class="fas fa-chevron-right banner_slider_icon"></i>',
    dots: true,
    dotsClass:'banner_slider_dots'
 });

 $('.gallery_filter').filterizr();

 $('.gallery_menu li').on('click', function () {
    $(this).addClass('active')
    $(this).siblings('.active').removeClass('active')
 })
  // preloader Start
//   $(window).on('load',function(){
//     $('#preloader').fadeOut(3000);
// });
// preloader End//
})