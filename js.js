//Function Declaration
function add(n1, n2){
    return n1 +n2;
 }
 console.log(add(3,3))

//Function expression
 const sub = function(n1,n2){
    return n1 - n2
} 
console.log(sub(3,3))
  
//callback example
const cb = function(n1,n2, callback){
  return "Result from the two numbers: "+n1+"+"+n2+"="+callback(n1,n2);
}
console.log(cb(3,3,sub))

//2
console.log( add(1,2) )     // What will this print? = 3
console.log( add )          // What will it print and what does add represent? = add function
console.log( add(1,2,3) ) ; // What will it print = 3 
console.log( add(1) );	  // What will it print 	= NaN
console.log( cb(3,3,add) ); // What will it print = Result from the two numbers: 3+3=6
console.log( cb(4,3,sub) ); // What will it print = result from the two numbers: 4+3=1
//console.log(cb(3,3,add())); // What will it print (and what was the problem) = doesn't print anything, throws error instead
console.log(cb(3,"hh",add));// What will it print = result form the two numbers = 3+hh=3hh

//4 
function mul(n1, n2){
  return n1 * n2;
}
console.log(mul(3,3))

//5
console.log(cb(3,3,function(n1, n2) {
  return n1/n2
}))

//1 
const names = ["frederik", "lars", "jan", "bo", "peter"]
names.forEach(name => console.log(name));

const namesFiltered = names.filter(function(name){
    return name.length <=3;
})
namesFiltered.forEach(name=> console.log(name))

//2
const uppercasedNames = names.map(function(name) {
  return name.toUpperCase()})
uppercasedNames.forEach(name => console.log(name))

//3
console.log(names.map(n => `<li>${n}</li>` + "\n").join(""))

//4
const cars = [
  { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
  { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
  { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
  { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
  { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
];

//filter by year
var carsFilteredByYear = cars.filter(function(car) {
  return car.year > 1999
})
carsFilteredByYear.forEach(car => console.log(car))

//filter by model
var carsFilteredByMake =  cars.filter(function(car) {
  return car.make = 'Volvo'
})
carsFilteredByMake.forEach(car => console.log(car))

/*Asynchronous callbacks
will print out 'aaa', 'ddd', 'fff' instant, and print 'eee' and 'fff' with delay
const msgPrinter = function(msg,delay){
  setTimeout(() => console.log(msg),delay); //Observe an arrow-function
};
console.log("aaaaaaaaaa");
msgPrinter ("bbbbbbbbbb",2000);
console.log("dddddddddd");
msgPrinter ("eeeeeeeeee",1000);
console.log("ffffffffff");
*/

//javascript objects
const car = {
  brand: "Ford",
  model: "galaxy",
  color: "yellow",
  year: "2020"
}

for(prop in car){
  console.log(prop, car[prop])
}

delete car.model
for(prop in car) {
  console.log(prop, car[prop])
}

car.numberOfSeats = "5"
for(prop in car){
  console.log(prop, car[prop])
}