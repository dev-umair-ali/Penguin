// Header Dropdown Toogle Js Start
$(document).ready(function() {
    $('#drop2Toggle').click(function() {
        $('.dropdown-two').toggle(1000);
    });

    $('.dropsingle1toggle').click(function() {
      $('.dropdown-single1').toggle(1000);
    });

    $('.dropsingle2toggle').click(function() {
      $('.dropdown-single2').toggle(1000);
    });

    $('.dropsingle3toggle').click(function() {
      $('.dropdown-single3').toggle(1000);
    });
});
// Header Dropdown Toogle Js Start

// Banner Step Form JS Fold1 Start
$(document).on('change','.form-check-input',function(e){
        $(this).closest('.selceted-box').hide();
        $(this).closest('.selceted-box').next().show();
    });
    $(document).on('click','.next-btn',function(e){
        var value = $(this).closest('.selceted-box').find('.form-check-input')
        if(value.is(':checked')){
            $(this).closest('.selceted-box').hide();
            $(this).closest('.selceted-box').next().show();
        } else{
            alert("please check a value")
        }  
    });
    $(document).on('click','.previous-btn',function(e){
        $(this).closest('.selceted-box').hide();
        $(this).closest('.selceted-box').prev().show();
    });
// Banner Step Form JS Fold1 End

// counter timer Fold 6
$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};

$('#number1').jQuerySimpleCounter({end: 40,duration: 3000});
$('#number2').jQuerySimpleCounter({end: 75,duration: 3000});
$('#number3').jQuerySimpleCounter({end: 480,duration: 2000});
$('#number4').jQuerySimpleCounter({end: 320,duration: 2000});
// counter timer Fold 6

// testimonials slider start
$('.testimonial-slider').owlCarousel({
    loop: true,
    margin: 14,
  
    autoplay: true,
    autoplayTimeout: 5000,
    autoWidth: true,
    navigation: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        margin: 10,
        autoWidth: true,
        nav: true
      },
      600: {
        items: 1,
        margin: 10,
        nav: true
      },
      1000: {
        items: 2,
        nav: true
      }
    }
  })
// testimonials slider end

// insidelook slider start
$('.inside-look-slide').slick({
    dots: false,
    arrow: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  
    ]
  });
// insidelook slider end

// brands slider start
$(".brands-carousel").slick({
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: !1,
    autoplaySpeed: 4e3,
    speed: 1e3,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4
        }
      }, {
        breakpoint: 769,
        settings: {
          slidesToShow: 3
        }
      }, {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      },
    ]
  });
// brands slider end

// Features Brands Slider JS Start Here
$('.features-brands-slider').slick({
  dots: false,
  arrow:true,
  infinite: false,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
// Features Brands Slider JS End Here

// Testimonials Slider JS End Here
$('.testi-sec-slider').slick({
    dots: false,
    arrow: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  
    ]
  });
// Testimonials Slider JS End Here

// Testimonial Banner Slider 01 Js Here
$(document).ready(function () {
    $('.testimonial-banner-slide1').slick({
    infinite:true,
    slidesToShow:2,
    centerMode:true,
    arrows: false,
    speed:8000,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    vertical: true,
    verticalSwiping: true
        
    });
});

$(document).ready(function () {
    $('.testimonial-banner-slide2').slick({
    infinite:true,
    slidesToShow:2,
    centerMode:true,
    arrows: false,
    speed:8000,
    dots: false,
    slideDown:true,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    vertical: true,
    verticalSwiping: true
        
    });
});

$(document).ready(function () {
    $('.testimonial-banner-slide3').slick({
    infinite:true,
    slidesToShow:2,
    centerMode:true,
    arrows: false,
    speed:8000,
    dots: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    vertical: true,
    verticalSwiping: true
        
    });
});
// Testimonial Banner Slider 01 Js Here

// Testimonials Counter Slider JS Start Here

$('.testi-counter-slider').slick({
    dots: false,
    arrow: false,
    infinite: false,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
  
    ]
  });

// Testimonials Counter Slider JS End Here

// side-form js start
$('.side-form-wrapper .side-form-btn, .custom-ovarlay').click(function () {
    $('body').toggleClass('open-side-form')
  })
  $('.second-step-leadform .btn-wrap .btn').click(function () {
    $('body').removeClass('open-side-form')
  })
  
// side-form js end

// nav script
$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 100) {
        $("#header").addClass("small")
    } else {
        $("#header").removeClass("small")
    }
});
// nav script

/*exceptional tabs start*/
$(document).ready(function () {
  var pTabItem = $(".prodNav .ptItem");
  $(pTabItem).click(function () {
    // Tab nav active functionality
    $(pTabItem).removeClass("active");
    $(this).addClass("active");

    // Tab container active functionality
    var tabid = $(this).attr("id");
    $(".prodMain").removeClass("active");
    $("#" + tabid + "C").addClass("active");

    return false;
  });
});
/*exceptional tabs end*/

// Portfolio Tab Dropdown Toogle Js Start

$(document).ready(function() {
    $('.port-tab-dropdown').click(function() {
        $('.drop-list').slideToggle();
    });
});

$('.portfolio-tab').click(function(){
    var protolioTitle = $(this).text();
    $('#tab-drop-text').text(protolioTitle);
});


$('.port-tab-dropdown').on('click', function(){
    if($(this).closest('.porfolio-tab-dropmain').find('.open').length){
      $(this).removeClass('open');
    }
    else{
    $(this).addClass('open');

    }
});

// Testi Stats Conter Start Js
$.fn.jQuerySimpleCounter = function( options ) {
    var settings = $.extend({
        start:  0,
        end:    100,
        easing: 'swing',
        duration: 400,
        complete: ''
    }, options );

    var thisElement = $(this);

    $({count: settings.start}).animate({count: settings.end}, {
    duration: settings.duration,
    easing: settings.easing,
    step: function() {
      var mathCount = Math.ceil(this.count);
      thisElement.text(mathCount);
    },
    complete: settings.complete
  });
};

$('#num1').jQuerySimpleCounter({end: 85,duration: 3000});
$('#num2').jQuerySimpleCounter({end: 720,duration: 3000});
$('#num3').jQuerySimpleCounter({end: 260,duration: 2000});
$('#num4').jQuerySimpleCounter({end: 400,duration: 2000});
$('#num5').jQuerySimpleCounter({end: 700,duration: 2000});
// Testi Stats Conter End JS
