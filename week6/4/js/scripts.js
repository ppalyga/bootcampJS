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

    function createImages(imgs) {
        console.log("Obrazy wczytane.");

        let docFragment = document.createDocumentFragment();

        imgs.forEach(function (image) {
            let img = document.createElement('img');
            img.setAttribute('src', image);
            docFragment.appendChild(img);
        });

        return docFragment;
    }

    function appendImages(docFragment) {
        document.body.appendChild(docFragment);
    }

    async function getImages(urls) {
        try {
            let preload = await preloadImages(urls);
            appendImages(createImages(preload));
        } catch (err) {
            console.log(err.message);
        }
    }

    getImages(urls);
})();
