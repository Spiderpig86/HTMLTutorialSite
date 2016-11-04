// JS Stuff

// Make sure that the landing page height is the same as the browser window.

// on init
$('#landing').css({
    'min-height': $(window).height()
});

// onResize
$(window).on('resize', function() {
    // Set the CSS of the landing
    $('#landing').css({
        'min-height' : $(window).height()
    });
    
    // Insert something to hide mobile menu if width is lower than something
})