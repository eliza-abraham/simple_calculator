var calculator = {
  result: null,

  add: function(operands){
    this.result = this.result || 0
    for (var i = 0; i < operands.length; i++) {
      this.result += operands[i];
    }
    return this.result;
  },

  sub: function(operands){
    this.result = this.result || 0;
    for (var i = 0; i < operands.length; i++) {
      this.result -= operands[i];
    }
    return this.result;
  },

  mul: function(operands){
    this.result = this.result || 1;
    for (var i = 0; i < operands.length; i++) {
      this.result *= operands[i];
    }
    return this.result;
  },

  div: function(operands){
    this.result = this.result || operands[0];
    for (var i = 0; i < operands.length; i++) {
      if (operands[i] != 0) { // div by 0
        this.result = this.result / operands[i];
      }
    }
    return this.result;
  },

  // TODO: use arguments instead of operands
  calculate: function(operator, operands){
    switch (this.operator) {
      case '+':s
        this.add(operands);
        break;
      case '-':
        this.sub(operands);
        break;
      case '*':
        this.mul(operands);
        break;
      case '/':
        this.div(operands);
        break;
      default:
        break;
    }
    return this.result
  }
}
