// * 
// * * 
// * * * 
// * * * * 
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 
let Star = ""

for(let i = 0; i < 5; i++)
{
    for(let j = 0; j <=i ;j++)
    {
        Star += "* "
    }
    Star += "\n";
}


for(let i = 0; i <4; i++)
{
    for(let j = i; j < 4; j++)
    {
        Star += "* "
    }
    Star += "\n";
}



console.log(Star);
