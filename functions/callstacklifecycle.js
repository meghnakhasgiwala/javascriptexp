/*call stack and life cycle of function*/
function sun()
{
    console.log("Hi by sun")

}
function Gun()
{
    console.log("Hi by Gun");
    sun()
    console.log("bye by Gun");
}
function Fun()
{
    console.log("Hi by Fun");
    Gun()
    console.log("bye by Fun");

}
console.log("program started")
Fun()
console.log("program ended")
