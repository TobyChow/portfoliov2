/* jshint esversion:6 */
$(document).ready(function() {
    // Smooth scroll from https://css-tricks.com/snippets/jquery/smooth-scrolling/ //
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top - 39
                }, 1000);
                return false;
            }
        }
    });
});
