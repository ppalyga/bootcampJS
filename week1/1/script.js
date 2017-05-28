var productsCount = 50;
var price = 100;
var discountPrice;

if (productsCount > 100) {
    discountPrice = 0.8 * price;
} else if (productsCount >= 51) {
    discountPrice = 0.85 * price;
} else if (productsCount >= 21) {
    discountPrice = 0.9 * price;
} else if (productsCount >= 5) {
    discountPrice = 0.95 * price;
} else {
    discountPrice = price;
}

if (price < 0 || productsCount < 0) {
    console.log('Wprowadzona cena przed obniżką lub ilość produktów jest niepoprawna.')
} else if (discountPrice === price) {
    console.log('Tej ilości produktów nie obejmuje obniżka.');
} else {
    console.log('Podstawowa cena produktu to ' + price + ' złotych, a cena po obniżce to ' + discountPrice + ' złotych.');
}





