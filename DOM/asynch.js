async function Getdata()
{
    let topic="India";
    let Data = await fetch('https://newsapi.org/v2/everything?q=${topic}&from=2024-02-17&sortBy=publishedAt&apiKey=439fcea975f74577a1b3585bab992b1f');
    Data = await Data.json();
    console.log(Data);
   

}
Getdata();
