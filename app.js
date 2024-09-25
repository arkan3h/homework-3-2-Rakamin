function generateRandomArray(length) {
    var array = [];
    for (var i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 50) + 1);
    }
    return array;
}
function splitArrayByIndex(array) {
    var evenArray = [];
    var oddArray = [];
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evenArray.push(array[i]);
        }
        else {
            oddArray.push(array[i]);
        }
    }
    return { evenArray: evenArray, oddArray: oddArray };
}
function getMinValue(array) {
    var min = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}
function getMaxValue(array) {
    var max = array[0];
    for (var i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}
function getTotal(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}
function getAverage(array) {
    var total = getTotal(array);
    return total / array.length;
}
function compareArrays(evenArray, oddArray) {
    var evenMin = getMinValue(evenArray);
    var oddMin = getMinValue(oddArray);
    var evenMax = getMaxValue(evenArray);
    var oddMax = getMaxValue(oddArray);
    var evenTotal = getTotal(evenArray);
    var oddTotal = getTotal(oddArray);
    var evenAverage = getAverage(evenArray);
    var oddAverage = getAverage(oddArray);
    console.log("Min lebih besar: ".concat(evenMin > oddMin ? 'Array Genap' : 'Array Ganjil'));
    console.log("Max lebih besar: ".concat(evenMax > oddMax ? 'Array Genap' : 'Array Ganjil'));
    if (evenTotal > oddTotal) {
        console.log('Total lebih besar array genap');
    }
    else if (evenTotal < oddTotal) {
        console.log('Total lebih besar array ganjil');
    }
    else if (evenTotal == oddTotal) {
        console.log('Total memiliki nilai yang sama antara array genap dan ganjil');
    }
    if (evenAverage > oddAverage) {
        console.log('Rata-rata lebih besar array genap');
    }
    else if (evenAverage < oddAverage) {
        console.log('Rata-rata lebih besar array ganjil');
    }
    else if (evenAverage == oddAverage) {
        console.log('Rata-rata memiliki nilai yang sama antara array genap dan ganjil');
    }
}
function main() {
    var randomArray = generateRandomArray(100);
    console.log("Array dengan 100 nilai random: ", randomArray);
    var _a = splitArrayByIndex(randomArray), evenArray = _a.evenArray, oddArray = _a.oddArray;
    console.log("\nArray genap: ", evenArray);
    console.log("\nArray ganjil: ", oddArray);
    console.log("\nArray Genap:");
    console.log("Min: ".concat(getMinValue(evenArray)));
    console.log("Max: ".concat(getMaxValue(evenArray)));
    console.log("Total: ".concat(getTotal(evenArray)));
    console.log("Rata-rata: ".concat(getAverage(evenArray)));
    console.log("\nArray Ganjil:");
    console.log("Min: ".concat(getMinValue(oddArray)));
    console.log("Max: ".concat(getMaxValue(oddArray)));
    console.log("Total: ".concat(getTotal(oddArray)));
    console.log("Rata-rata: ".concat(getAverage(oddArray)));
    console.log("\nPerbandingan nilai min, max, total, dan rata-rata");
    compareArrays(evenArray, oddArray);
    console.log("");
}
main();
