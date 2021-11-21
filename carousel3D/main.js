const left = document.querySelector(".arrow-left");
const rigth = document.querySelector(".arrow-rigth");
const img= document.querySelectorAll(".img");
const carousel=document.querySelector(".carousel");
let long=img.length;
let i=1;
    
let cuenta;

rigth.addEventListener("click",()=>{
    
   
   if(i==long){
       carousel.style.transform=`translateX(0%)`;
       i=1;
   }
   else{
    cuenta= i * 100;
    carousel.style.transform=`translateX(-${cuenta}%)`;
    i++;
   }
})
left.addEventListener("click",()=>{


  if(i==1){
    cuenta = (long-1)*100
    carousel.style.transform=`translateX(-${cuenta}%)`;
    i=long
  }
  else if(i==2){
   
    carousel.style.transform=`translateX(0%)`;
    i--;
    
  }
  else{
    i--;
    cuenta=100
    carousel.style.transform=`translateX(-${cuenta}%)`;
  }

 })