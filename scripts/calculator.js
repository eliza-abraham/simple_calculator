var Calculator = function(){
  this.operand1 = 0
  this.operand2 = 0
  this.operator = null
  this.result = 0;

  this.clear = function(){
    this.operand1 = 0
    this.operand2 = 0
    this.operator = null
    this.result = 0;
  }

  this.show = function(){
    console.log('this.operand1 = ' + this.operand1)
    console.log('this.operand2 = ' + this.operand2)
    console.log('this.operator = ' + this.operator)
    console.log('this.result = ' + this.result)
  }

  // Make pvt
  this.add = function(){
    this.result = this.operand1 + this.operand2;
  };

  // Make pvt
  this.sub = function(){
    this.result = this.operand1 + this.operand2;
  };

  // Make pvt
  this.mul = function(){
    this.result = this.operand1 * this.operand2;
  };

  // Make pvt
  this.div = function(){
    this.result = this.operand1 / this.operand2;
  };

  this.calculate = function(){ //operand1, operand2, operator){
    // this.operand1 = operand1 || this.operand1;
    // this.operand2 = operand2 || this.operand2;
    // this.operator = operator || this.operator;

    console.log(this.operand1 + " " + this.operator + " " + this.operand2);

    switch (this.operator) {
      case '+':
        this.add();
        break;
      case '-':
        this.sub();
        break;
      case '*':
        this.mul();
        break;
      case '/':
        this.div();
        break;
      default:
        break;
    }
    return this.result
  }
}

