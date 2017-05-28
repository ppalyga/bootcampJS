(function ($, window, document, undefined) {

    $.fn.toc = function (options) {
        //miksowanie parametrów konfiguracyjnych
        var config = $.extend({}, $.fn.toc.defaults, options);

        //stworzenie stałych elementów
        var toc = $('<div>', {
            'class': config.divClass
        }),
            ul = $('<ul>'),
            heading = $('<h2>', {
                'text': 'Spis treści'
            });

        //zagnieżdżamy w sobie elementy
        toc.append(heading).append(ul);

        //stworzenie odnośników do sekcji
        $(this).each(function (i, e) {
            var elem = $(e);

            //dodajemy id celem późniejszego linkowania
            elem.attr('id', config.tocElemId + '-' + (i + 1));

            // tworzymy element listy i odnośnik z nadanym wcześniej id
            var a = $('<a>', {
                'href': '#' + elem.attr('id')
            }),
                li = $('<li>');

            //do odnośnika wstawiamy numer sekcji i tekst z nagłówka
            a.text(i + 1 + '. ' + elem.find(config.selector).text());

            //zagnieżdżamy w sobie elementy
            li.append(a);
            ul.append(li);
        });

        //wstawiamy spis treści na stronę
        toc.insertBefore($('section:first'));
    };

    //konfiguracja domyślnych wartości
    $.fn.toc.defaults = {
        selector: 'h2',
        divClass: 'toc',
        tocElemId: 'toc-elem'
    };

    return this;

})(jQuery, window, document);