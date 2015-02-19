// var count = (function(){
//   var counter = 0;
//   return counter += 1
// })

// var count = (function(){
//   var counter = 0;
//   return function(){
//     return counter += 1
//   }
// })

var count = (function(){
  var counter = 0;
  return function(){
    return counter += 1;
  }
})();



$(document).ready(function(){
  // count();
  // count();
  // c = count()
  // console.log(c);
});