function getDate() {
    var d = new Date();
    var date = "";

    if (d.getDate() < 10) {
        date = "0" + d.getDate();
    } else {
        date = d.getDate();
    }


    if ((d.getMonth() + 1) < 10) {
        date += ".0" + (d.getMonth() + 1);
    } else {
        date += "." + (d.getMonth() + 1);
    }

    date += "." + d.getFullYear();

    console.log(date);
}

getDate();



