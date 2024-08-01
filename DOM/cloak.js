let Dabba=document.getElementsByClassName("Dabba");
//console.log(Dabba);

//Dabba[0].innerText="24";
setInterval(() => {
    let Mydate= new Date();
    Dabba[0].innerText=Mydate.getHours();
    Dabba[1].innerText=Mydate.getMinutes();
    Dabba[2].innerText=Mydate.getSeconds();


    
}, 1000);