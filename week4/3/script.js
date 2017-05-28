(function (jQuery) {

    $(document).ready(function () {

        var input = $('#text').val(),
            btn = $('button');

        $('<ul>').insertAfter(btn);

        btn.on('click', function (e) {
            e.preventDefault();

            if ($('#text').val() !== '') {
                var li = $('<li>');
                li.text($('#text').val());
                $('ul').append(li);
                $('#text').val('');
            }

        });

    });

})($);