
exports.min = function min (array) {
    if (typeof array === "undefined" || array === null || array === '' || isNaN(array[1]) || typeof array === 'Infinity') {
        return 0;
    } else {
    return Math.min.apply(null, array);
    }
}

exports.max = function max (array) {
    if (typeof array === "undefined" || array === null || array === '' || isNaN(array[1]) || typeof array === 'Infinity') {
        return 0;
    } else {   
    return Math.max.apply(null, array);
    }
}

exports.avg = function avg (array) {
    if (typeof array === "undefined" || array === null || array === '' || isNaN(array[1]) || typeof array === 'Infinity') {
        return 0;
    }    
    let sum = 0; 
    for(var i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum / array.length;
}
