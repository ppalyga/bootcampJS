let btn = document.querySelector('#btn'),
    ul = document.createElement('ul');

function getJSON(url, success, error) {
    xhr = new XMLHttpRequest();

    if (url && url !== "") {
        xhr.open("GET", url, true);
    } else {
        throw new Error('Podaj URL dla żądania');
    }

    xhr.setRequestHeader('Accept', 'application/json');

    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            if (success !== '') {
                var parsed = JSON.parse(this.response);
                success(parsed);
            }
        }
    };

    xhr.onerror = function () {
        if (error !== '') {
            error(new Error('Żądanie nie mogło zostać zrealizowane'));
        }
    };
}

btn.addEventListener('click', function () {
    getJSON('http://code.eduweb.pl/bootcamp/json/', function (data) {

        window.map = new WeakMap();

        data.forEach(function (elem) {

            let li = document.createElement('li');
            li.innerHTML = elem.name;

            map.set(li, elem);

            li.addEventListener('click', function () {
                let obj = map.get(this);
                this.innerHTML = `${obj.name} <a href='mailto:${obj.email}'>${obj.email}</a>`;
            });

            ul.appendChild(li);
        });

        document.body.appendChild(ul);
    }, function (err) {
        console.log(err);
    });
});


