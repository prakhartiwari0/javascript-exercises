const reverseString = function(string) {
    l = string.length
    n = 0
    result = ""
    while (l!=0) {
        l = l-1
        result = result+string[l]
    }
    return result

};

// Do not edit below this line
module.exports = reverseString;
