(function () {
    var btn = document.querySelector('button'),
        headline = document.querySelector('h1');

    btn.addEventListener('click', function (e) {
        headline.classList.toggle('hidden');
        if (btn.textContent === 'Pokaż treść') {
            btn.textContent = 'Ukryj treść';
        } else {
            btn.textContent = 'Pokaż treść';
        }
    }, false)
})();



