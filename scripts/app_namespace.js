$(document).ready(function(){
  var result = 0;

  var calc = new Calculator();
  $('.operator').click(function(){
    calc.show();
    calc.operator = $(this).val();
    result = calc.calculate();//(calc.operand1, calc.operand2, calc.operator);
    if (calc.operand2 == 0){
      calc.operator = null;
    }
    calc.operand1 = result;
    $('#calc-screen').val(result);
  })

  $('.numerical').click(function(){
    calc.show();
    var numerical = $(this).val();
    if ((parseInt(numerical) != 0) && (calc.operator == null)) {
      console.log('append');
      calc.operand2 = parseInt(calc.operand2 + numerical);
      $('#calc-screen').val(calc.operand2);
    }else{
      console.log('perform');
      calc.operand2 = parseInt(numerical);
      $('#calc-screen').val(calc.calculate);
      calc.operand1 = calc.result;
    }
  })
});