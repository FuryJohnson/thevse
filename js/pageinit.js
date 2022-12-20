$(function() {


    $(".js-media-button").click(function(){ 
        $(this).parent().toggleClass('partners__other');
       
    });
 

    $('.navigation__item').click(function(e){
        e.preventDefault();
        var target = $($(this).attr('href'));
        if(target.length){
          var scrollTo = target.offset().top;
          $('body, html').animate({scrollTop: scrollTo+'px'}, 800);
        }
      });



    //begin brand carousel
    function fotoCarusel() {
        var slickopts = {
            speed: 5000,
            infinite: true,
            cssEase: 'linear',
            variableWidth: true,
            slidesToShow: 10,
            slidesToScroll: 1,
            autoplay: true,
            arrows : false,
            centerMode: true,
            autoplaySpeed:  0,
            responsive: [{
                    breakpoint: 992, 
                    settings: {
                        dots: true, 
                        slidesToShow: 3
                    }
                }, 
                {
                    breakpoint: 680,
                    settings: {
                        dots: true,  
                        slidesToShow: 1,
                        rows: 1 // This doesn't appear to work in responsive (Mac/Chrome)
                    }
                }
            ]

           

        };

        $('.js-foto-carousel').slick(slickopts);

    };
    $(document).ready(fotoCarusel);
    $(window).resize(fotoCarusel);
    //end brand carousel
  

   
    //start reviews  
    function reviewsCarusel() {
        var checkWidth = $(window).width();
        var infoCaruselBox = $('.js-carousel-reviews');

        infoCaruselBox.addClass('owl-carousel').owlCarousel({
            
            margin: 20, 
            loop: true,
            nav: true,
            dots: true,
            responsive: {
                0: {
                    margin: 0,
                    items: 1
                }, 
                1950: {
                    margin: 0,
                    items: 1
                }
            }
        });

    };
    $(document).ready(reviewsCarusel);
    $(window).resize(reviewsCarusel);
    //end reviews  

    //start sidebar
    $('.js-sidebar-show').on('click', function(event) {
        event.preventDefault();
        showSidebar();
        console.log("menu");
    });
    $('.js-sidebar-hide').on('click', function(event) {
        event.preventDefault();
        hideSidebar();
    });

    function showSidebar() {

        $('.js-sidebar').addClass('l-sidebar--open');
        $('.js-sidebar-block').addClass('l-sidebar-block--open');

        var tempWidth,
            tempWidthNew,
            scrollWidth;

        // scroll width compensation
        tempWidth = $('body').outerWidth(true);
        $('body').addClass('g-ov-h');
        tempWidthNew = $('body').outerWidth(true);
        scrollWidth = tempWidthNew - tempWidth;
        $('body').css({ 'padding-right': scrollWidth });
        $('.b-fixed-head').css({ 'right': scrollWidth })

    }

    function hideSidebar() {
        $('.js-sidebar').removeClass('l-sidebar--open');
        $('.js-sidebar-block').removeClass('l-sidebar-block--open');

        // scroll width compensation
        $('body').removeClass('g-ov-h');
        $('body').css({ 'padding-right': 0 });
        $('.b-fixed-head').css({ 'right': 0 })
    }

     
    $(".show-more").click(function () {
        if($(this).closest(".review__item").hasClass("show-more-block")) {
            $(this).text("Свернуть");
        } else {
            $(this).text("Отзыв целиком");
        }
        $(this).closest(".review__item").toggleClass("show-more-block");
    });


    $(document).ready(function(){
        $(".b-navigation").on("click","a", function (event) {
        event.preventDefault();
    
          
            var id  = $(this).attr('href'),
    
            top = $(id).offset().top;
             
            $('body,html').animate({scrollTop: top}, 1500);
            hideSidebar();
        }
        );
    });

    $(document).ready(function(){ 
        $(".js-scroll").on('click', function( event ) { 
            event.preventDefault(); 
            $('html, body').animate ({ 
                scrollTop: $("#end-slider").offset().top
             },  500 ); 
        }); 
    });

});


 

// tabbed content
// http://www.entheosweb.com/tutorials/css/tabs.asp
$(".tab_content").hide();
$(".tab_content:first").show();

/* if in tab mode */
$("ul.tabs li").click(function() {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

});
/* if in drawer mode */
$(".tab_drawer_heading").click(function() {

    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});


/* Extra class "tab_last" 
   to add border to right side
   of last tab */
$('ul.tabs li').last().addClass("tab_last");


$(document).ready(function() {

    var $wrapper = $('.tab-wrapper'),
        $allTabs = $wrapper.find('.tab-content > div'),
        $tabMenu = $wrapper.find('.tabs li'),
        $line = $('<div class="line"></div>').appendTo($tabMenu);

    $allTabs.not(':first-of-type').hide();
    $tabMenu.filter(':first-of-type').find(':first').width('100%')

    $tabMenu.each(function(i) {
        $(this).attr('data-tab', 'tab' + i);
    });

    $allTabs.each(function(i) {
        $(this).attr('data-tab', 'tab' + i);
    });

    $tabMenu.on('click', function() {

        var dataTab = $(this).data('tab'),
            $getWrapper = $(this).closest($wrapper);

        $getWrapper.find($tabMenu).removeClass('active');
        $(this).addClass('active');

        $getWrapper.find('.line').width(0);
        $(this).find($line).animate({ 'width': '100%' }, 'fast');
        $getWrapper.find($allTabs).hide();
        $getWrapper.find($allTabs).filter('[data-tab=' + dataTab + ']').show();
    });

}); //end ready
$(function() {
    $('.js-openmenu').click(function() {
        $(this).parent().toggleClass('on-1');
    });
});


 