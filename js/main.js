(function($) {
"use strict";

/*------------------------------------------------------------------
[Table of contents]

PARALLAX JS INIT
STICKY MENU JS INIT
TESTIMONIAL SLIDER JS INIT
TESTIMONIAL 2 SLIDER JS INIT
TESTIMONIAL 3 SLIDER JS INIT
THUMB1 SLIDER SLIDER JS INIT
THUMB2 SLIDER JS INIT
YOUTUBE MAGNIFIC POPUP JS INIT
MAGNIFIC POPUP JS INIT
SKILLBAR JS INIT
COUNTER JS INIT
PRICING TABLE JS INIT
THREE COLUMN FILTER JS INIT
FOUR COLUMN FILTER JS INIT

-------------------------------------------------------------------*/

/*--------------------------------------------------------------
CUSTOM PRE DEFINE FUNCTION
------------------------------------------------------------*/
/* is_exist() */
jQuery.fn.is_exist = function(){
  return this.length;
}


$(function(){

/*--------------------------------------------------------------
PARALLAX JS INIT
--------------------------------------------------------------*/
var parallax = $('.parallax-window');
  if (parallax.is_exist()) {
      parallax.parallax();
}

/*--------------------------------------------------------------
STICKY MENU JS INIT
--------------------------------------------------------------*/
$(window).on('scroll', function(){
  if ($(window).scrollTop() > 50) {
      $('#sticky-menu').addClass('sticky-menu');
  } else {
      $('#sticky-menu').removeClass('sticky-menu');
  }

});

/*--------------------------------------------------------------
TESTIMONIAL SLIDER JS INIT
--------------------------------------------------------------*/
var testimonial_slider = $('.comenci-testimonial-slider');
  if (testimonial_slider.is_exist()) {
      testimonial_slider.owlCarousel({
      loop:true,
      margin: 30,
      nav:true,
      dots:false,
      autoHeight:true,
      items:1,
      navText: ["<i class=\"fas fa-arrow-left\"></i>",
      "<i class=\"fas fa-arrow-right\"</i>"],

      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          768:{
              items:2
          },
          1000:{
              items:2
          }
      }

  });

}

/*--------------------------------------------------------------
TESTIMONIAL 2 SLIDER JS INIT
--------------------------------------------------------------*/
var testimonial_slider2 = $('.comenci-testimonial-slider2');
  if (testimonial_slider2.is_exist()) {
      testimonial_slider2.owlCarousel({
      loop:true,
      margin: 0,
      nav:true,
      dots:true,
      autoHeight:true,
      items:1,
      navText: ["<i class=\"fas fa-arrow-left\"></i>",
      "<i class=\"fas fa-arrow-right\"</i>"],

  });

}


/*--------------------------------------------------------------
TESTIMONIAL 3 SLIDER JS INIT
--------------------------------------------------------------*/
var testimonial_slider3 = $('.comenci-testimonial-slider3');
  if (testimonial_slider3.is_exist()) {
      testimonial_slider3.owlCarousel({
      loop:true,
      margin: 24,
      nav:false,
      dots:true,
      autoHeight:true,
      items:3,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          768:{
              items:2
          },
          1000:{
              items:3
          }
          
      }

  });

}

/*--------------------------------------------------------------
THUMB1 SLIDER SLIDER JS INIT
--------------------------------------------------------------*/
var thumb1_slider = $('.comenci-thumb1-slider');
  if (thumb1_slider.is_exist()) {
      thumb1_slider.owlCarousel({
      loop:true,
      margin: 30,
      nav:true,
      dots:false,
      autoHeight:true,
      items:1,
      navText: ["<i class=\"fas fa-arrow-left\"></i>",
      "<i class=\"fas fa-arrow-right\"</i>"],

  });

}


/*--------------------------------------------------------------
THUMB2 SLIDER JS INIT
--------------------------------------------------------------*/
var thumb2_slider = $('.comenci-thumb2-slider');
  if (thumb2_slider.is_exist()) {
      thumb2_slider.owlCarousel({
      loop:true,
      margin: 20,
      nav:false,
      dots:true,
      autoHeight:true,
      items:4,
      responsive:{
          0:{
              items:1
          },
          600:{
              items:1
          },
          768:{
              items:2
          },
          1000:{
              items:4
          }
      }

  });

}

/*--------------------------------------------------------------
YOUTUBE MAGNIFIC POPUP JS INIT
------------------------------------------------------------*/
var popup_youtube = $('.comenci-youtube-popup');
  if (popup_youtube.is_exist()){
      popup_youtube.magnificPopup({
      type: 'iframe',
      mainClass: 'mfp-fade'
  });

}

/*--------------------------------------------------------------
MAGNIFIC POPUP JS INIT
------------------------------------------------------------*/
var porfolio_popup = $('.comenci-portfolio-popup');
if(porfolio_popup.is_exist()){
  $(porfolio_popup).magnificPopup({
     // delegate: 'a',
      type: 'image',
      closeOnContentClick: false,
      closeBtnInside: false,
      mainClass: 'mfp-with-zoom mfp-img-mobile',
      image: {
        verticalFit: true,
        titleSrc: function(item) {
          return item.el.attr('title') + ' &middot; <a class="image-source-link" href="'+item.el.attr('data-source')+'" target="_blank">image source</a>';
        }
      },
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true,
        duration: 300, // don't foget to change the duration also in CSS
        opener: function(element) {
          return element.find('img');
        }
      }

  });
}

/*--------------------------------------------------------------
SKILLBAR JS INIT
------------------------------------------------------------*/
var skillbar = $('.skillbar');
  if (skillbar.is_exist()){
      skillbar.skillBars({
      from: 0,
      speed: 4000,
      interval: 100,
      decimals: 0,
    });
}

/*--------------------------------------------------------------
COUNTER JS INIT
--------------------------------------------------------------*/
var comenci_counter = $('#comenci-counter');
  if(comenci_counter.is_exist()){
      var a = 0;
      $(window).scroll(function() {

        var oTop = $(comenci_counter).offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
          $('.comenci-counter').each(function() {
            var $this = $(this),
              countTo = $this.attr('data-percentage');
            $({
              countNum: $this.text()
            }).animate({
                countNum: countTo
              },
              {
                duration: 4000,
                easing: 'swing',
                step: function() {
                  $this.text(Math.floor(this.countNum));
                },
                complete: function() {
                  $this.text(this.countNum);
                }
              });
          });
          a = 1;
        }

      });
}


/*--------------------------------------------------------------
PRICING TABLE JS INIT
------------------------------------------------------------*/
    // Table BTN Trigger
    $("#l5-pricing-btn .toggle-btn").on("click", function (e) {
      console.log($(e.target).parent().parent().hasClass("monthly-active"));
      $(e.target).toggleClass("clicked");
      if ($(e.target).parent().parent().hasClass("monthly-active")) {
        $(e.target)
          .parent()
          .parent()
          .removeClass("monthly-active")
          .addClass("yearly-active");
      } else {
        $(e.target)
          .parent()
          .parent()
          .removeClass("yearly-active")
          .addClass("monthly-active");
      }
    });

    $("[data-pricing-trigger]").on("click", function (e) {
      $(e.target).addClass("active").siblings().removeClass("active");
      var target = $(e.target).attr("data-target");
      console.log($(target).attr("data-value-active") == "monthly");
      if ($(target).attr("data-value-active") == "monthly") {
        $(target).attr("data-value-active", "yearly");
      } else {
        $(target).attr("data-value-active", "monthly");
      }
    });





});/*End document ready*/


$(window).on("resize", function(){
  

}); // end window resize


$(window).on("load" ,function(){

  $("#preloader").fadeOut(500);


/*--------------------------------------------------------------
THREE COLUMN FILTER JS INIT
------------------------------------------------------------*/
var comenci_filter4 = $('#comenci-three-column');
if(comenci_filter4.is_exist()){
  var $container = $(comenci_filter4),
    colWidth = function () {
      var w = $container.width(), 
        columnNum = 1,
        columnWidth = 0;
      if (w > 1200) {
        columnNum  = 3;
      } else if (w > 900) {
        columnNum  = 3;
      } else if (w > 600) {
        columnNum  = 2;
      } else if (w > 450) {
        columnNum  = 1;
      } else if (w > 385) {
        columnNum  = 1;
      }
      columnWidth = Math.floor(w/columnNum);
      $container.find('.collection-grid-item').each(function() {
        var $item = $(this),
          multiplier_w = $item.attr('class').match(/collection-grid-item-w(\d)/),
          multiplier_h = $item.attr('class').match(/collection-grid-item-h(\d)/),
          width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
          height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
        $item.css({
          width: width,
          //height: height
        });
      });
      return columnWidth;
    },
    isotope = function () {
      $container.isotope({
        resizable: false,
        itemSelector: '.collection-grid-item',
        masonry: {
          columnWidth: colWidth(),
          gutterWidth: 0
        }
      });
    };
  isotope();
  $(window).resize(isotope);
  var $optionSets = $('.comenci-portfolio-menu .option-set'),
      $optionLinks = $optionSets.find('li');
  $optionLinks.click(function(){
  var $this = $(this);
    var $optionSet = $this.parents('.option-set');
    $optionSet.find('.active').removeClass('active');
    $this.addClass('active');

    // make option object dynamically, i.e. { filter: '.my-filter-class' }
    var options = {},
        key = $optionSet.attr('data-option-key'),
        value = $this.attr('data-option-value');
    // parse 'false' as false boolean
    value = value === 'false' ? false : value;
    options[ key ] = value;
    if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
      // changes in layout modes need extra logic
      changeLayoutMode( $this, options )
    } else {
      // creativewise, apply new options
      $container.isotope( options );
    }
    return false;
  });
}


/*--------------------------------------------------------------
FOUR COLUMN FILTER JS INIT
------------------------------------------------------------*/
var comenci_filter3 = $('#comenci-four-column');
if(comenci_filter3.is_exist()){
  var $container = $(comenci_filter3),
    colWidth = function () {
      var w = $container.width(), 
        columnNum = 1,
        columnWidth = 0;
      if (w > 1200) {
        columnNum  = 4;
      } else if (w > 900) {
        columnNum  = 3;
      } else if (w > 600) {
        columnNum  = 2;
      } else if (w > 450) {
        columnNum  = 1;
      } else if (w > 385) {
        columnNum  = 1;
      }
      columnWidth = Math.floor(w/columnNum);
      $container.find('.collection-grid-item').each(function() {
        var $item = $(this),
          multiplier_w = $item.attr('class').match(/collection-grid-item-w(\d)/),
          multiplier_h = $item.attr('class').match(/collection-grid-item-h(\d)/),
          width = multiplier_w ? columnWidth*multiplier_w[1] : columnWidth,
          height = multiplier_h ? columnWidth*multiplier_h[1]*0.4-12 : columnWidth*0.5;
        $item.css({
          width: width,
          //height: height
        });
      });
      return columnWidth;
    },
    isotope = function () {
      $container.isotope({
        resizable: false,
        itemSelector: '.collection-grid-item',
        masonry: {
          columnWidth: colWidth(),
          gutterWidth: 0
        }
      });
    };
  isotope();
  $(window).resize(isotope);
  var $optionSets = $('.comenci-portfolio-menu .option-set'),
      $optionLinks = $optionSets.find('li');
  $optionLinks.click(function(){
  var $this = $(this);
    var $optionSet = $this.parents('.option-set');
    $optionSet.find('.active').removeClass('active');
    $this.addClass('active');

    // make option object dynamically, i.e. { filter: '.my-filter-class' }
    var options = {},
        key = $optionSet.attr('data-option-key'),
        value = $this.attr('data-option-value');
    // parse 'false' as false boolean
    value = value === 'false' ? false : value;
    options[ key ] = value;
    if ( key === 'layoutMode' && typeof changeLayoutMode === 'function' ) {
      // changes in layout modes need extra logic
      changeLayoutMode( $this, options )
    } else {
      // creativewise, apply new options
      $container.isotope( options );
    }
    return false;
  });
}


}); // End window LODE

   var wow = new WOW({
      mobile: false,       // default
      tablet:false
    });
    wow.init();






})(jQuery);






