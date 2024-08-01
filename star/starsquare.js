//square
let n = 10;
let Star = ""
for(let i = 0; i <n; i++)
{
    for(let j= 0 ; j<n;j++)
    {
        if(j== 0 || i == 0 || i == n-1 || j == n-1)
        {
            Star += "* "
        }
        else
        {
            Star += "  "
        }
    }
    Star += "\n";
}
console.log(Star);
