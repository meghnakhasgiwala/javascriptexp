//factory function
function person(N,A)
{
    let obj={
        Name:N,
        Age: A
    }
    return obj;
}
let p1=person("mona",35);
console.log(p1);
let p2=person("meg",25);
console.log(p2);
