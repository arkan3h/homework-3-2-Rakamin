function generateRandomArray(length: number): number[] {
    let array: number[] = [];
    for (let i = 0; i < length; i++) {
        array.push(Math.floor(Math.random() * 50) + 1);
    }
    return array;
}

function splitArrayByIndex(array: number[]): { evenArray: number[], oddArray: number[] } {
    let evenArray: number[] = [];
    let oddArray: number[] = [];
    for (let i = 0; i < array.length; i++) {
        if (i % 2 === 0) {
            evenArray.push(array[i]);
        } else {
            oddArray.push(array[i]);
        }
    }
    return { evenArray, oddArray };
}

function getMinValue(array: number[]): number {
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < min) {
            min = array[i];
        }
    }
    return min;
}

function getMaxValue(array: number[]): number {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

function getTotal(array: number[]): number {
    let total = 0;
    for (let i = 0; i < array.length; i++) {
        total += array[i];
    }
    return total;
}

function getAverage(array: number[]): number {
    let total = getTotal(array);
    return total / array.length;
}

function compareMin(evenArray: number[], oddArray: number[]): void {
    const evenMin = getMinValue(evenArray);
    const oddMin = getMinValue(oddArray);
    
    if (evenMin > oddMin) {
        console.log('Min lebih besar array genap');
    } else if (evenMin < oddMin) {
        console.log('Min lebih besar array ganjil');
    } else {
        console.log('Min memiliki nilai yang sama antara array genap dan ganjil');
    }
}

function compareMax(evenArray: number[], oddArray: number[]): void {
    const evenMax = getMaxValue(evenArray);
    const oddMax = getMaxValue(oddArray);
    
    if (evenMax > oddMax) {
        console.log('Max lebih besar array genap');
    } else if (evenMax < oddMax) {
        console.log('Max lebih besar array ganjil');
    } else {
        console.log('Max memiliki nilai yang sama antara array genap dan ganjil');
    }
}

function compareTotal(evenArray: number[], oddArray: number[]): void {
    const evenTotal = getTotal(evenArray);
    const oddTotal = getTotal(oddArray);
   
    if (evenTotal > oddTotal) {
        console.log('Total lebih besar array genap');
    } else if (evenTotal < oddTotal) {
        console.log('Total lebih besar array ganjil');
    } else if (evenTotal == oddTotal) {
        console.log('Total memiliki nilai yang sama antara array genap dan ganjil');
    }
}

function compareAverage(evenArray: number[], oddArray: number[]): void {
    const evenAverage = getAverage(evenArray);
    const oddAverage = getAverage(oddArray);
   
    if (evenAverage > oddAverage) {
        console.log('Rata-rata lebih besar array genap');
    } else if (evenAverage < oddAverage) {
        console.log('Rata-rata lebih besar array ganjil');
    } else {
        console.log('Rata-rata memiliki nilai yang sama antara array genap dan ganjil');
    }
}

function main() {
    const randomArray = generateRandomArray(100);
    console.log("Array dengan 100 nilai random: ", randomArray);

    const { evenArray, oddArray } = splitArrayByIndex(randomArray);
    console.log("\nArray genap: ", evenArray);
    console.log("\nArray ganjil: ", oddArray);

    console.log("\nArray Genap:");
    console.log(`Min: ${getMinValue(evenArray)}`);
    console.log(`Max: ${getMaxValue(evenArray)}`);
    console.log(`Total: ${getTotal(evenArray)}`);
    console.log(`Rata-rata: ${getAverage(evenArray)}`);

    console.log("\nArray Ganjil:");
    console.log(`Min: ${getMinValue(oddArray)}`);
    console.log(`Max: ${getMaxValue(oddArray)}`);
    console.log(`Total: ${getTotal(oddArray)}`);
    console.log(`Rata-rata: ${getAverage(oddArray)}`);

    
    console.log("\nPerbandingan nilai min, max, total, dan rata-rata");
    compareMin(evenArray, oddArray);
    compareMax(evenArray, oddArray);
    compareTotal(evenArray, oddArray);
    compareAverage(evenArray, oddArray);
    console.log("");
}

main();
