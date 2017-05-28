function getJSON (url, success, error) {
    xhr = new XMLHttpRequest();

    if (url && url !== "") {
        xhr.open("GET", url, true);
    } else {
        throw new Error('Podaj URL dla żądania')
    };

    xhr.setRequestHeader('Accept', 'application/json');

    xhr.send();

    xhr.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            if (success !== '') {
                var parsed = JSON.parse(this.response);
                success(parsed);
            }
        }
    }

    xhr.onerror = function () {
        if (error !== '') {
            error(new Error('Żądanie nie mogło zostać zrealizowane'));
        }
    };
};

getJSON('http://code.eduweb.pl/bootcamp/users/', function (data) {
    console.log('Sukces');
    console.log(data);
}, function (err) {
    console.log('Wystąpił błąd!');
    console.log(err);
});