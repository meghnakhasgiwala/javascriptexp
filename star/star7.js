//diamond pattern
let n = 10;
let Star = ""
for(let i = 0; i < n; i++)
{
    for(let j = i; j < n; j++)
    {
        Star += " "
    }
    for(let k = 0; k <=i; k++)
    {
        Star += "* "
    }
    Star += "\n";

}
for(let i = 0; i < n-1; i++)
{
    for(let j = 0; j <= i+1; j++)
    {
        Star += " "
    }
    for(let k = i; k < n-1; k++)
    {
        Star += "* "
    }
    Star += "\n";

}

console.log(Star)
