// * * * * * 
//  * * * * * 
//   * * * * * 
//    * * * * * 
//     * * * * * 
//     * * * * * 
//    * * * * * 
//   * * * * * 
//  * * * * * 
// * * * * * 
//arrow
let Star = ""
for(let i = 0; i < 5; i++)
{

    for(let j = 0; j <= i; j++)
    {
        Star += " "
    }

    for(let k = 0; k < 5; k++)
    {
        Star += "* "
    }

    Star += "\n";
}

for(let i = 0; i < 5; i++)
{

    for(let j = i; j < 5; j++)
    {
        Star += " "
    }

    for(let k = 0; k < 5; k++)
    {
        Star += "* "
    }

    Star += "\n";
}
console.log(Star);
