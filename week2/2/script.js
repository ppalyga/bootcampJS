(function () {
    var anyErrors = false;

    var btn = document.querySelector('button'),
        form = document.querySelector('form'),
        imie = document.querySelector('input'),
        mail = document.querySelector('div:nth-child(2)>input'),
        number = document.querySelector('div:nth-child(3)>input'),
        text = document.querySelector('textarea');

    function resetErrors() {
        anyErrors = false;
        imie.classList.remove('error');
        mail.classList.remove('error');
        number.classList.remove('error');
        text.classList.remove('error');
    }

    function validateText(text) {
        if (text.value.length < 1) {
            text.classList.add('error');
            anyErrors = true;
        }
    }

    function validateEmail(mail) {
        var emailAddress = mail.value.split('');

        if (emailAddress.indexOf('@') === -1) {
            mail.classList.add('error');
            anyErrors = true;
        }
    }

    function validateNumber(number) {
        var numbers = number.value.split('').filter(function (elem) {
            return Number.isInteger(+elem);
        });

        var notNumbers = number.value.split('').filter(function (elem) {
            return !Number.isInteger(+elem);
        });

        if (numbers.length === 0 || notNumbers.length > 0) {
            number.classList.add('error');
            anyErrors = true;
        }
    }

    function validateForm() {
        btn.addEventListener("click", function (e) {
            e.preventDefault();
            resetErrors();

            validateText(imie);
            validateEmail(mail);
            validateNumber(number);
            validateText(text);

            console.log(anyErrors);

            if (anyErrors === false) {
                form.submit();
            }
        }, false);
    }

    validateForm();
})();



