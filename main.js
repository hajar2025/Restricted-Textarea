
const text = document.getElementById("text");

let  scor = document.getElementById("score");

const pp = document.getElementById("p")





text.addEventListener("input",()=>{ 
  
 let c =  scor.innerText = text.value.length ;
   
     if(c >= 250){
            scor.style.color = 'red';
            text.style.color = 'red';
            pp.style.color = 'red' ;
            text.style.border = ' 2px solid red' ;
            text.value = text.value.substring(0, 249);
     }
     else{
        scor.style.color = 'black';
            text.style.color = 'black';
            pp.style.color = 'black' ;
            text.style.border = ' 2px solid black' ;
             
     }
    
})


