const calculator = {
    subtract: function(a, b){
        return a - b;
    },
    multiply: function(a, b) {
        return a * b;
    },
    divide: function(a, b) {
        return b !== 0 ? a / b : "cannot divide by zero";
    }
};
module.exports = calculator;