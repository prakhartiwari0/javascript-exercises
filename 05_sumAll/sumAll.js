const sumAll = function(num1, num2) {
    let start;
    let end;
    let final = 0;
    if (num1>num2){
        start = num2;
        end = num1;
    }
    else{
        start = num1;
        end = num2;
    }
    if(num1<0||num2<0||typeof(num1)!='number'||typeof(num2)!='number'){
        return 'ERROR';
    }

    let n = 0;
    let i = 0;
    let form = 0;
    while (i!=end+1){
        if (form==2*n+1){
            n++;
        }
        if (i%2==0){
            form = 2*n
        }
        else if (i%2!=0){
            form = 2*n+1
        }
        final = final+form
        i++;
    }



    return final;

};

// Do not edit below this line
module.exports = sumAll;
