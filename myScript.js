//This is an array
const schedule = ['Mon:Work', 'Tue:Party!', 'Wed:Work', 
'Thur: Netflix Binge!', 'Fri-Sat: Party all weekend!'];
document.getElementById("test1").innerHTML = schedule;

console.log(schedule);
// Array method
schedule.push('Dont forget to hydrate during the week!')
document.getElementById("test2").innerHTML = 'Dont forget to hydrate during the week!';
console.log(schedule)

//Access by index
schedule.indexOf('Mon:Work')


//This is an object
//object method is the invoked function
const user = {
    name: ' Party go-er Shaniqua',
    age: 34,
    married: false,
    height: '5 feet 4 inches',
    hair: 'Fire Red',
    purchases: ['wine glasses','snacks', 'stereo', 'music'],

    sayName: function(){
        console.log(this);
   }
   
};
user.sayName();


//Object Prototype
function Person (first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }
const janeDoe = new Person ("Shaniqua", "Brown", 34 , "blue");

document.getElementById("test3").innerHTML =
" Shaniqua likes to party and is" + janeDoe.age + "but she doesnt let that stop her!"; 
