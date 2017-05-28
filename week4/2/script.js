(function (jQuery) {

    $(document).ready(function () {

        var ham = $('span'),
            ul = $('ul');

        ham.on('click', function () {
            ul.slideToggle();
        });

    });

})($);