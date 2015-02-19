var Dog = function(name, breed, age, origin){
  this.name = name;
  this.breed = breed;
  this.age = age
  this.origin = origin
}

var rover = new Dog('Rover', 'Pitbul', '3', 'England');
rover.bark = function(){
  console.log('bow wow!');
}

var lass = new Dog('Lass', 'Boxer', '3', 'India');

Dog.prototype.roll = function(){
	console.log(this.name + " rolls over");
}

rover.bark();
// lass.bark(); does not work since it is defined only for rover
rover.roll();
lass.roll();

lass.bark = function(){
	console.log('woof!');
}

lass.bark();



