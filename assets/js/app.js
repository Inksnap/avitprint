// Main application JavaScript
$(document).ready(function() {
    // Hide preloader when page is fully loaded
    $(window).on('load', function() {
        $('#preloader').fadeOut('slow');
    });
    
    // Fallback: hide preloader after 3 seconds if window load event doesn't fire
    setTimeout(function() {
        $('#preloader').fadeOut('slow');
    }, 3000);
    
    // Initialize any other components here
    console.log('App.js loaded successfully');
});
