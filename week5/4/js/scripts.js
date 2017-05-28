/*jshint esversion: 6 */
(function () {
    let button = document.querySelector('#getNumbers');
    let output = document.querySelector('#showNumbers');

    class Lotek {
        constructor() {
            this.numbers = [];
            this.random = null;
            this.getNumbers();
        }

        [Symbol.iterator]() {
            let numbers = this.numbers,
                index = 0;

            return {
                next: function () {
                    return {
                        done: (index === numbers.length) ? true : false,
                        value: numbers[index++]
                    };
                }
            };
        }

        static getRandom(min, max) {
            return Math.round(Math.random() * (max - min) + min);
        }

        getNumbers() {
            for (let i = 0; i < 6; i++) {
                this.random = Lotek.getRandom(1, 49);

                while (this.numbers.indexOf(this.random) !== -1) {
                    this.random = Lotek.getRandom(1, 49);
                }
                this.numbers.push(this.random);
            }
            return this.Numbers;
        }

        checkNumbers(...nums) {
            let check = {
                numbers: [],
                count: 0
            };
            for (let i = 0; i < nums.length; i++) {
                if (this.numbers.indexOf(nums[i]) !== -1) {
                    check.numbers.push(nums[i]);
                    check.count++;
                }
            }

            console.log(`Trafione liczby to: ${check.count === 0 ? 'brak' : check.numbers}`);
            console.log(`Ilość trafionych liczb: ${check.count}`);

        }
    }

    function showRandomNumbers() {
        let shot = new Lotek(),
            numbers = [...shot];
        console.log(`Wylosowane liczby to: ${numbers}`);
        for (let number of shot) {
            console.log(number);
        }
        let results = shot.checkNumbers(2, 13, 15, 22, 34, 40);


        output.value = shot.numbers;
    }

    button.addEventListener('click', showRandomNumbers, false);
})();
