function recursionFactorial(value){
    if(value == 1 || value == 0) return 1;
    else return value * recursionFactorial(value - 1);
}

module.exports = recursionFactorial;
