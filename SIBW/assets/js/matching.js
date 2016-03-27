(function() {
    /* matchHeight example */
    $(function() {
        // apply your matchHeight on DOM ready (they will be automatically re-applied on load or resize)
        // get test settings
        var byRow = $('section').hasClass('content');

        // apply matchHeight to each item container's items
        $('.container').each(function() {
            $(this).children('.one-of-three-col').matchHeight({
                byRow: byRow
            });
        });
    });

})();