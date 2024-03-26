
const box = document.querySelectorAll(".box");
const resetBtn = document.querySelector("#Reset");
const winnerdiv=document.querySelector(".alert");
const winner=document.querySelector(".hurrah");

const win=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];




let turn = true;

box.forEach((box) => {
  box.addEventListener("click", () => {
    if (turn) {
       const a= box.innerHTML="<h1>O</h1>";
    
    console.log(box,turn,a )
     turn =!turn // Toggle the turn variable
    } else {
     const b= box.innerHTML="<h1>X</h1>"
      turn = !turn; // Toggle the turn variable
    }        
    
    box.disabled=true
    checked();
    
})

    
    
});


const  checked=()=>{
    for (const pattern of win) {
        const  position1=box[pattern[0]].innerHTML;
       const  position2=box[pattern[1]].innerHTML;
       const  position3=box[pattern[2]].innerHTML;
      
     if (position1!=="" && position2!=="" && position3!=="" ) {
          if (position1===position2 && position2===position3 ) {
                 
             winnerdiv.appendChild(winner);
            winnerdiv.style="display:block";
            winnerdiv.style.color="orange";
            winnerdiv.style.fontSize="30px";   

             
          }        
       }
        }

}

resetBtn.addEventListener("click", () => {
 box.forEach((box)=>{
    box.innerHTML=""
 })
});
