function findLargestNumbers(numbers) {
    // Arrayni tartiblash
    numbers.sort(function (a, b) {
        return b - a;
    });

    // Eng katta 2 sonni olish
    var largestNumbers = numbers.slice(0, 2);

    return largestNumbers;
}

var son = +prompt("Siz son kiriting va biz sizga uni 2ta eng kattasini topb beramiz", "nechta son kiritasiz");
var numbers = [];

if (!isNaN(son) && son > 0) {
    for (var i = 0; i < son; i++) {
        var input = +prompt("Son kiriting");
        if (!isNaN(input)) {
            numbers.push(input);
        } else {
            console.log("Notogri narsa kiritildi");
        }
    }

    console.log(findLargestNumbers(numbers));
} else {
    console.log("Notogri narsa kiritildi");
}
