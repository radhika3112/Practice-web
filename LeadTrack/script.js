let btn=document.querySelector("#save-btn")
let myLeads=[];
let ip=document.getElementById("input-el")
let u=document.getElementById("ulel")

btn.addEventListener("click",()=>{
    myLeads.push(ip.value);
    ip.value="";
    render();
 })
 
 function render()
 {
 let listItem="";
for(let i=0;i<myLeads.length;i++)
{
    listItem += "<li>" + myLeads[i] + "</li>"
}
u.innerHTML = listItem;
 }
