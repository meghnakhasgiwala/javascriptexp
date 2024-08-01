//! Do While Loop
let x = 10;
do
{
    console.log(x);
    x++;
}
while(x < 10);
//-------------------------
// ! Nested Loop:
// Loop Inside a Loop


for(let i = 2; i <= 20; i++)
{
    for(let j = 1; j <= 10;j++)
    {
        console.log(i,"x",j,"=",i*j);
    }
    console.log("------------");
}
