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
        console.log(data);
        for (let i = 0; i < data.length; i++) {
            let li = document.createElement('li');
            let { name,
                  username, 
                  email, 
                  address: { 
                      geo: { 
                          0: lat, 
                          1: lon 
                        } 
                    }, 
                  website, 
                  company: { 
                      name: companyName 
                    } 
                } = data[i] || {};

            li.innerHTML = `Imię: ${name} | 
            Nazwa użytkownika: ${username} | 
            Email: ${email} | 
            Strona WWW: <a href=http://${website}>${website}</a> | 
            Nazwa firmy: ${companyName} | 
            <a href=http://bing.com/maps/default.aspx?cp=${lat}~${lon}>Pokaż na mapie</a>`;
            
            ul.appendChild(li);
        }
        
        document.body.appendChild(ul);
    }, function (err) {
        console.log(err);
    });
});


