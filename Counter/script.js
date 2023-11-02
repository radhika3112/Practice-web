var count=new Date("dec 31, 2023 00:00:00").getTime();
setInterval(()=>{
    let now=new Date().getTime();
    let distance=count - now;

    let day=Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours=Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 *60));
    let min=Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let sec=Math.floor((distance%(1000 * 60)) / 1000)



    let days = document.getElementsByClassName("day")[0];
let hr= document.getElementsByClassName("hour")[0];
let mins=document.getElementsByClassName("min")[0];
let secs=document.getElementsByClassName("sec")[0];

   days.innerHTML=day;
   hr.innerHTML=hours;
   mins.innerHTML=min;
   secs.innerHTML=sec;
},1000);
