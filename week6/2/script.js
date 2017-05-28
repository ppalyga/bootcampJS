(function () {

    Array.myFrom = function myFrom(toArr, func, that) {
        let arr = [];

        if (toArr == null) {
            throw new Error('Cannot convert undefined or null');
        }

        if (!('length' in toArr)) {
            return arr;
        }

        for (let i = 0; i < toArr.length; i++) {
            arr.push(toArr[i]);
        }

        if (typeof func === 'function') {
            arr = arr.map(func, that);
        }

        return arr;
    };




    var lis = document.querySelectorAll("ul li");

    var lisArr = Array.myFrom(lis);

    console.log(Array.isArray(lisArr)); // true

    var lisTexts = Array.from(lis, function (li) {
        return li.textContent;
    });

    console.log(lisTexts);
    // lisTexts powinna być tablicą z tekstami wszystkich <li>

})();

