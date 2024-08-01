let person={
    name:'vini',
    age:25
}
person.job='Developer';
console.log(person);
person.age=45;
console.log(person);
/*key and values are functions.*/
let mykeys=Object.keys(person);
/*output is ['name', 'age', 'job]*/
console.log(mykeys);
let myvalue=Object.values(person);
/*output is ['vini',45,'developer']*/
console.log(myvalue);
/*printing using loop*/
for(let i in Object.keys(person))
{
console.log(Object.keys(person)[i],Object.values(person)[i])
}
