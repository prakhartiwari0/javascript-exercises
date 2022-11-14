const palindromes = function (value) {
    value = ((value.replaceAll("!", "")).replaceAll(",", "").replaceAll(".", "").replaceAll(" ", "")).toLowerCase();
    if ((value.split("").reverse().join(""))===value){
        return true
    }
    else{
        return false
    }

};

// Do not edit below this line
module.exports = palindromes;
