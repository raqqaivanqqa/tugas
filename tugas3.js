function mean(arr ) {
    var sum = arr.reduce((a, b) =>{
        return a + b;
    }, 0)
    var total = sum / arr.length
    console.log(total.toPrecision(3));
    
}

mean([1, 0, 4, 5, 2, 4, 1, 2, 3, 3, 3]);
mean([2, 3, 2, 3]);
mean([3, 3, 3, 3, 3]);