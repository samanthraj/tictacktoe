let boxes = document.querySelectorAll(".box");
let dis = 0;
let winpaterns =[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
]
let o = document.querySelector("#o");
let p = document.querySelector("p");
boxes.forEach((val)=>{
val.addEventListener("click",()=>{
    if(dis===0){
        val.innerText="x";
        val.style.color="#33658A"
        dis =1;
        
    }
    else if(dis===1){
        val.innerText="o";
        val.style.color="white";
        dis=0;
    }
    val.disabled =true;
     checkwinner();
})
}) 

function checkwinner(){
    for(patern of winpaterns){
        pos1 = boxes[patern[0]].innerText;
        pos2 = boxes[patern[1]].innerText;
        pos3 = boxes[patern[2]].innerText;
if(pos1!="",pos2!="",pos3!=""){
    if( (pos1==="x"&& pos2==="x" && pos3==="x")){
        o.append("x is the winner");
        celeb.setAttribute("class","win")
        celeb.innerText="X won";
      
       
    
stop();
    }
  else  if( (pos1==="o" && pos2==="o" && pos3==="o")){
    o.append("o is the winner");
    
    celeb.setAttribute("class","win")
    stop();
    celeb.innerText="O Won";
    }
   
       
    }
    }
   
}
function stop(){
    for (box of boxes){
        box.disabled=true;
    }
    }
    
  function start(){
    for(box of boxes){
        box.disabled=false;
    }
  }    
       
    
   
    
    
    let reset = document.querySelector("#reset");
reset.addEventListener("click",   
function refresh(){

    for(box of boxes){
        box.innerText="";
        box.diabled= false;
            
      o.textContent = ""; }  start();  
    celeb.setAttribute("class","hlo") 
celeb.innerText="" }
      );
let celeb = document.querySelector(".hlo");

