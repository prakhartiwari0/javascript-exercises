const fibonacci = function(num) {
    if (num<0) {
        return "OOPS"
        
    }
    let i = 0;
    let fibonacci_series_arr = []
    let next_num;
    while (i < num + 1) {
        if (i == 0) {
            fibonacci_series_arr.push(1, 1)
        }
        else {
            next_num = fibonacci_series_arr[i] + fibonacci_series_arr[i - 1]
            fibonacci_series_arr.push(next_num)
        }
        i++;
    }
    return fibonacci_series_arr[num - 1]

};

// Do not edit below this line
module.exports = fibonacci;
