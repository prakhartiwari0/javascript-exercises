const leapYears = function(year) {
    let ans;
    if((year%4==0)&&(year%100!=0||year%400==0)){ans=true}
    else{ans=false}
    return ans


};

// Do not edit below this line
module.exports = leapYears;
