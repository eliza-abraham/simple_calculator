var app = app || {};

(function() {
  app.Calculator = {

    init: function() {
      this.calculator = Object.create(calculator);
      this.calcScreen = $('input#calc-screen');
      this.operand = $('.operand');
      this.operator = $('.operator');
      this.equals = $('.eual');
      this.bindEvents();
    },

    bindEvents: function() {
      this.operand.on('click', this.appendToScreen()));
      this.operator.on('click', this.appendToScreen()));
      this.equals.on('click', this.compute(this)))
    },

    appendToScreen: function(value) {
      var string = this.calcScreen.val() + value;
      this.calcScreen.val(string);
    },

    updateScreen: function(result) {
      this.calcScreen.val(result);
    },

    clearScreen: function() {
      this.calcScreen.val('0');
    },

    compute: function() {
      console.log('In progress');
      // var result = 0;
      // parse and iterate through the operators and operands
        // result = this.calculator.calculate(operator, operand1, operand2)
      // this.updateScreen(value);
      this.clearScreen();
    }
  };
})();

$(document).ready(function(){
  // app.Calculator.init();
});
