//!Document object:
console.log(document)
console.log(document.body)//has access but document.body,center does not have access so we use getelementbyId

//? Targeting elements
//*    1)getElementById()
//*    2)getElementsClassName()
//*    3)getElementsTagName()
let Count=0;

let MyH=document.getElementById("Head1");
//console.log(MyH)- 1)
//MyH.innerText="hello by J.S"
//console.log(MyH.innerText)
/*setInterval(()=>{
    console.log(MyH.innerText);
},1000);*/
// setTimeout(()=>{
//     MyH.innerText="hello by jawascript";
    
// },3000);
//makes the counter
// setInterval(() =>{
//     MyH.innerText=Count;
//     Count++;
// },1000);

//? changing the content
//innerText iwll print with <u> </u> tag and innerHTML will print withou tag and text will be underlined
//MyH.innerText="<u>hi everyone</u>"
//MyH.innerHTML="<u>hi everyone</u>"
//MyH.textContent="<u>hi </u>"
let Mypara=document.getElementsByClassName("para")
//console.log(Mypara) 2)
let allpara=document.getElementsByTagName("p")
//console.log(allpara) 3)

//?Outer
//MyH.outerHTML="<u id='Head1'>hi by js</u>";//h1 tag goes away and only now <u> tac=g coees </u> since id also goes away and if we give new id Head1 it goes to tag <u></u>
//MyH = document.getElementById("Head1");// sowe create again new element
//MyH.innerText="bye J.S"

//? ATTRIBUTES
MyH.setAttribute("src","myimg.jpeg");
MyH.removeAttribute("src");

//!------controlling CSS----
//? 1. By style property
//? 2. class list

// MyH.style.background= "red";
// MyH.style.color="white";
// MyH.style.fontSize="60px";
// MyH.style.fontWeight="bold";
//instead of doing above this we mk classlist
MyH.classList.add("style1");
MyH.classList.add("style2");
//MyH.classList.remove("style1");
MyH.classList.replace("style1","style5");
console.log(MyH.classList.contains("style2"));
console.log(MyH.classList.length);
//console.log(MyH.classList.toggle("style1"));
console.log(MyH.classList);

//?------events----
let flag=true;
function fun(){
    if (flag==true){
        document.body.style.backgroundColor="white"
        document.body.style.color="black";

    //MyH.classList.add("style1");
    flag=false;
    }
    else{
        //MyH.classList.remove("style1");
        document.body.style.backgroundColor="black"
        document.body.style.color="white";


        flag=true;

    }
}





