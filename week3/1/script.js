(function () {

    if (!String.prototype.hasOwnProperty('repeatt')) {
        String.prototype.repeatt = function (times) {

            var str = '' + this,
                repeated = '';

            for (var i = times; i > 0; i--) {
                repeated += str;
            }

            return repeated;
        }
    };

})();