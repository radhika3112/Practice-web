let val=document.getElementById("h")
let count=0;
function incre()
{
   count+=1;
   val.innerHTML=count;
}
let c=document.getElementById("sv")

function save()
{
  let d= count+"-"
  c.innerHTML +=d
  val.innerHTML=0;
  count=0;
}
