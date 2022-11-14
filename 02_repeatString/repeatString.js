const repeatString = function(text, repetition) {
    if (repetition<0){
        return "ERROR"
    }
    n = 0
    let result = ""
    while (n<repetition){
        result = result+text
        n = n+1 
        }
    return result


};

// Do not edit below this line
module.exports = repeatString;
