function callAfter10(fn) {
    var header = document.querySelector('h1'),
        counter = 10;

    (function startCounting() {
        if (counter > 0) {
            header.textContent = counter--;
            setTimeout((startCounting), 1000);
        } else {
            header.textContent = 0;
            fn();
        }
    })();

}

callAfter10(function() {
    console.log('Odliczanie zakończone!');
});

