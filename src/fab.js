var start = process.hrtime();

function fibonacci(num) {
    var precision = 3; // 3 decimal places
    var elapsed = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli
    console.log(process.hrtime(start)[0] + " s, " + elapsed.toFixed(precision) + " ms"); 
    var a = 1, b = 0, temp

    while (num >= 0) {
        temp = a
        a = a + b
        b = temp
        num--
        console.log('the b', b)
    }

    console.log(b)
}

fibonacci(6)
