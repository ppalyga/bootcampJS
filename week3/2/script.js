(function () {
    function Toggler(sel) {
        this.elem = document.querySelector(sel);
    }

    Toggler.prototype.getElem = function () {
        return this.elem;
    }

    Toggler.prototype.show = function () {
        this.elem.style.display = "initial";
    }

    Toggler.prototype.hide = function () {
        this.elem.style.display = "none";
    }

    var elem = new Toggler("#section");
    var button = document.querySelector("#button");

    button.addEventListener("click", function () {

        if (elem.getElem().style.display == "none") {
            elem.show();
        } else {
            elem.hide();
        }

    }, false);
})();