const removeFromArray = function(array, ...values_to_remove) {
    for (const value of values_to_remove){
        i = array.indexOf(value)
        if (array.indexOf(value)===-1){
            continue
        }
        array.splice(i, 1)
    }
    return array

};

// Do not edit below this line
module.exports = removeFromArray;
