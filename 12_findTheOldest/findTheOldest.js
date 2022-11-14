const findTheOldest = function (arr) {
    function age_obj(obj) {
        if (typeof (obj.yearOfDeath) == 'undefined') {
            age = parseInt(new Date().getFullYear()) - (obj.yearOfBirth)
        }
        else {
            age = (obj.yearOfDeath) - (obj.yearOfBirth)
        }
        return age

    }
    let oldest_obj;
    for (const value of arr) {
        if (typeof (oldest_obj) == 'undefined') {
            oldest_obj = value
        }
        else {

            if (age_obj(oldest_obj) < age_obj(value)) {
                oldest_obj = value
            }
            else {
                continue
            }

        }
    }
    return oldest_obj
};

// Do not edit below this line
module.exports = findTheOldest;
