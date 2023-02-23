//This is an array
const schedule = ['Mon:Work', 'Tue:Party!', 'Wed:Work', 
'Thur: Netflix Binge!', ''];
document.getElementById("test1").innerHTML = schedule;

console.log(schedule);
// Array method
schedule.push('Dont forget to hydrate during the week!')
console.log(schedule)

//Access by index
schedule.indexOf('Eat')


//This is an object
const person= {
    name: "John Doe",
    age: 46,
    ethnicity: "Latino"
} //Const variable and the value is an object