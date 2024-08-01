let UserDataForm=document.getElementById("UserDataForm");
let UserList=document.getElementById("UserList");
let UserDataShowCase=document.getElementById("UserDataShowCase");
// we click on submit in inspect whatever we write it goes away as page is being reloadednso we use e.preventdefault
let Td=document.getElementsByTagName("td");
let UpdateBtn=document.getElementById("UpdateBtn");
let DeleteBtn=document.getElementById("DeleteBtn");
let AllUsers= [];
let CurrentData= "";

function CloseDataShowCase()
{
  UserDataShowCase.style.visibility = "hidden";
}

function OpenDataShowCase()
{
  UserDataShowCase.style.visibility = "visible";
}
function ShowUserData(e)
{
  Td[0].innerText=e.Id;
  Td[1].innerText=e.Name;
  Td[2].innerText=e.Age;

}
function handleClick(e)
{
  ShowUserData(e);
  OpenDataShowCase();
 CurrentData=e;
} 

function DisplayData()
{
    // with  backtic u cn put $write variable if u use "" u hv to write this way "p" + x +"p"
    // `<p>${AllUsers[0].Name}</p>`- instead we will write <p>${e.name}</p> as e is getting the . Allusers get all the objects
   UserList.innerHTML=" "
    AllUsers.map((e)=>{ 
      let NewPara = document.createElement("p");
      NewPara.innerText= e.Name;
      NewPara.addEventListener("click", ()=>{handleClick(e)});
      UserList.appendChild(NewPara);
      
      //Userlist.innerHTML+=
        // `<p onclick="handleClick(e)">${e.Name}</p>`
        //return `<p onclick="handleClick()">${e.Name}</p>`

});

    
}
UserDataForm.addEventListener("submit", (e)=>{
    e.preventDefault();
    // console.log(e.target[0].value);
    // console.log(e.target[1].value);
    // console.log(e.target[2].value); now we made an object
    let Currentid = e.target[0].value;
    let DuplicateId=false;

    AllUsers.forEach((e)=>
    {
      if (e.Id == Currentid)
      {
        DuplicateId= true;
      }

    });
   if (e.target[1].value.length<=0)
   {
    alert("Name is required");
   }
   else if(DuplicateId == true)
   {
    alert("Id already exists");
    let UserDetails={
      Id: e.target[0].value,
      Name:e.target[1].value,
      Age:e.target[2].value,
   };
   let Index= AllUsers.indexOf(CurrentData);
  AllUsers[Index] = UserDetails;
  DisplayData();
  CurrentData = ""
    CloseDataShowCase();
    e.target[0].value ="";
    e.target[1].value ="";
    e.target[2].value ="";
  }
   else{
    let UserDetails={
      Id: e.target[0].value,
      Name:e.target[1].value,
      Age:e.target[2].value,
  };
  

  AllUsers.push(UserDetails);
 // console.log(UserDetails);
  e.target[0].value="";//want to empty the box after once written
  e.target[1].value="";
  e.target[2].value="";
  DisplayData();
   }

});

UpdateBtn.addEventListener("click", ()=>{
//   console.log(CurrentData);
//  console.log(UserDataForm.getElementsByTagName("input"));
 UserDataForm.getElementsByTagName("input")[0].value = CurrentData.Id;
 UserDataForm.getElementsByTagName("input")[1].value = CurrentData.Name;
 UserDataForm.getElementsByTagName("input")[2].value = CurrentData.Age;
 });

DeleteBtn.addEventListener("click", ()=>{
 // console.log(CurrentData)
 // console.log(Allusers.indexof(CurrentData))
 
  AllUsers.splice(AllUsers.indexOf(CurrentData),1);
  DisplayData();
  CloseDataShowCase();
});
