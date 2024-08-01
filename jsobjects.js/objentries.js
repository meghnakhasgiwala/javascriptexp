let person={
    name:'meg',
    age:35
}
/*u can add later also with assign*/
Object.assign(person,{job:"developer"});
console.log(person);
/*another way to add later*/
person.desc="senior";
console.log(person);
/*gives output values and keys in form of array*/
console.log(Object.entries(person));
/*you can use for loop also*/
for(let i of Object.entries(person))
{
    console.log(i);
}
// const myobject={a:1,b:2};
// console.log(myobject.a);
//console.log(person.hasownproperty('name'));
const obj = {
    prop1: 'value1',
    prop2: 'value2'
};

console.log(obj.hasOwnProperty('prop1')); // true
console.log(obj.hasOwnProperty('prop3')); // false
