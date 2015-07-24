(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
    $('.slider').slider({full_width: true});
    $('.materialboxed').materialbox();
    
    imagesLoaded( '#banner1', function() {
        Materialize.fadeInImage("#banner1");
    });

    Materialize.fadeInImage("#view-work-button");

    // Materialize.fadeInImage("#work");
    // $('.materialboxed').materialbox();

    var options = [
        // {selector: '#staggered-test', offset: 50, callback: 'Materialize.toast("This is our ScrollFire Demo!", 1500 )' },
        // {selector: '#staggered-test', offset: 205, callback: 'Materialize.toast("Please continue scrolling!", 1500 )' },
        // {selector: '#staggered-test', offset: 400, callback: 'Materialize.showStaggeredList("#staggered-test")' },
        {selector: '#thing1', offset: 50, callback: 'Materialize.fadeInImage("#thing1")' },
        {selector: '#thing2', offset: 50, callback: 'Materialize.fadeInImage("#thing2")' },
        {selector: '#thing3', offset: 50, callback: 'Materialize.fadeInImage("#thing3")' },
        {selector: '#thing4', offset: 50, callback: 'Materialize.fadeInImage("#thing4")' },
        {selector: '#thing5', offset: 50, callback: 'Materialize.fadeInImage("#thing5")' },
        {selector: '#thing6', offset: 50, callback: 'Materialize.fadeInImage("#thing6")' },
        {selector: '#card1', offset: 50, callback: 'Materialize.fadeInImage("#card1")' },
        {selector: '#card2', offset: 50, callback: 'Materialize.fadeInImage("#card2")' },
        {selector: '#card3', offset: 50, callback: 'Materialize.fadeInImage("#card3")' },
        {selector: '#card4', offset: 50, callback: 'Materialize.fadeInImage("#card4")' },
        {selector: '#portrait', offset: 50, callback: 'Materialize.fadeInImage("#portrait")' }
        // {selector: '#thing1', offset: 500, callback: 'alert("scrollfire")' }
      ];
    Materialize.scrollFire(options);

    // $('.fixed').pushpin({ top: $('.fixed').offset().top });
    // $('.fixed').pushpin({ top: $('.fixed').offset().top });

    // $('.scrollspy').scrollSpy();
    $(".smoothnav").click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(($(this).attr("href"))).offset().top
        }, 
        {
            duration: 500,
            easing: 'easeInOutExpo'
            // try using 'swing' too
            // 'easeInOutExpo' is supported with jQuery UI
        });
    });

    $(".card-image").hover(function(e) {
       //expand background image
       $(this).animate({
            
       })
    });

    var isDragging = false;
    $("backnav")
    .mousedown(function() {
        isDragging = false;
    })
    .mousemove(function() {
        isDragging = true;
     })
    .mouseup(function(e) {
        var wasDragging = isDragging;
        isDragging = false;
        if (wasDragging) {
           e.preventDefault();
        }
    });

    // $(".opener").click(function(e) {
    //     // e.preventDefault();
    //     $('html, body').animate({
    //         // scrollTop: $($(this).parent().parent()).offset().top-70
    //         scrollTop: $($(this).attr("target")).offset().top-70
    //     }, 
    //     {
    //         duration: 200,
    //         easing: 'easeInOutExpo'
    //         // try using 'swing' too
    //         // 'easeInOutExpo' is supported with jQuery UI
    //     });
    // });

    
  }); // end of document ready
})(jQuery); // end of jQuery name space