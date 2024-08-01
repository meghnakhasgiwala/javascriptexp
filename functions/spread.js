// function add(...a) /*spread  or rest operator prints all arrays  output is [4,5,6,7,8,] [23,45,1]*/
// {
//     console.log(a);
// }
// add(4,5,6,7,8);
// add(23,45,1);
function add(...a)
{
    let sum=0;
    for(let i of a)
    {
        sum+=i;
        
    }
    console.log(sum);
}
add(4,5,6,7,8);/* sum of all the elememts are displayed output is 30*/
add(23,45,1);/*output is 69*/