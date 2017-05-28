/*jshint esversion: 6 */
(function () {
    const urls = [
        "http://code.eduweb.pl/kurs-jquery/images/photo-1.jpg",
        "http://code.eduweb.pl/kurs-jquery/images/photo-2.jpg",
        "http://code.eduweb.pl/kurs-jquery/images/photo-3.jpg",
        "http://code.eduweb.pl/kurs-jquery/images/photo-4.jpg"
    ];

    function preloadImages(urls) {

        var length = urls.length,
            counter = 0,
            p = new Promise(function (resolve, reject) {
                urls.forEach(function (url) {
                    let img = document.createElement('img');

                    img.addEventListener('load', function () {
                        counter++;
                        if (counter === length) {
                            resolve(urls);
                        }
                    });

                    img.addEventListener('error', function () {
                        let e = new Error('Nie udało się wczytać wszystkich obrazków!');
                        reject(e);
                    });

                    img.setAttribute('src', url);
                });
            });
        return p;
    }

    preloadImages(urls)
        .then(function (imgs) {
            console.log("Obrazy wczytane.");

            let docFragment = document.createDocumentFragment();

            imgs.forEach(function (image) {
                let img = document.createElement('img');
                img.setAttribute('src', image);
                docFragment.appendChild(img);
            });

            return docFragment;
        })
        .then(function (docFragment) {
            document.body.appendChild(docFragment);
        })
        .catch(function (err) {
            console.log(err.message);
        });
})();
