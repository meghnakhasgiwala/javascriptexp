let Btns=document.getElementsByClassName("btn");
let AnswerData= document.getElementById("AnswerData");
let HistoryData= document.getElementById("HistoryData");

console.log(Btns);
for(let i of Btns)
{
    //console.log(i.innerHTML); //this will check in inspect that button text is coming
    i.onclick=()=>{
        let BtnText = i.innerText;
        if(BtnText=="C")
        {
            HistoryData.innerHTML=" ";// clear history data
            AnswerData.innerText="";

        }
        else if(BtnText == "=")
        {
            HistoryData.innerText = AnswerData.innerText;//save calculate and display
            let Result=eval(AnswerData.innerText);
            AnswerData.innerText=Result;
        }
        else if(BtnText == "x")
        {
            AnswerData.innerText += "*";
        }
        else if(BtnText == "x2")
        {
            HistoryData.innerText = AnswerData.innerText + " x " + AnswerData.innerText;
            AnswerData.innerText = eval(AnswerData.innerText * AnswerData.innerText);
        }
        else if(BtnText=="CE")
        {
            AnswerData.innerText=AnswerData.innerText.slice(0,-1);//will remove data from 0th index one by one
        }
        else{
            AnswerData.innerText += BtnText;
       
          
        }
        
       // console.log(i.innerText); //innerhtml will print x super 2 - so innerText we r using printed like this x<sup>2</sup>
    }
    // for(let i of Btns) -//more professional way to write
    // {//adding event listener oneach button with addeventlistener 
    //     i.addEventListener("click",(e)=>{
    //         console.log(e.target.innerText);// here target means tag e had tag ki info

    //     })
    // }
}