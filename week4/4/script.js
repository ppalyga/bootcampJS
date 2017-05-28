(function (jQuery) {

    $(document).ready(function () {

        $('button').on('click', function () {
            $.getJSON("http://code.eduweb.pl/bootcamp/users/", function (data) {
                var datap = {
                    people: data
                },
                    source = $('#tpl').html(),
                    template = Handlebars.compile(source),
                    generated = template(datap);

                $('#output').html(generated);
            });
        });


    });

})($);