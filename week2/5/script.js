(function () {

    function debounce(fn, time) {
        var timeout = null;

        return function (e) {
            var context = this,
                args = arguments;

            clearTimeout(timeout);

            timeout = setTimeout(function () {
                fn.apply(context, args);
            }, time);
        };
    }

    var handleScroll = debounce(function (e) {
        console.log("Scrollujemy!");
    }, 200);

    window.addEventListener("scroll", handleScroll, false);

    var handleResize = debounce(function () {
        console.log("Zmieniamy rozmiar okna!");
    }, 100);

    window.addEventListener("resize", handleResize, false);

    document.body.style.height = '3000px';

})();



