let boxes = document.querySelectorAll("#box");
let resetBtn = document.querySelector("#reset");
let turn= true;
const winning = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],

];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicked");
        if(turn){
            box.innerText="O";
            turn = false;
        }else{
            box.innerText="X";
            turn = true
        }
        box.disabled = true
        checkWinner();
    })
})

const disableboxes = () =>{
  for(let box of boxes){
    box.disabled = true;
  }
}
const checkWinner = () => {
  for (let pattern of winning) {
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        if(pos1Val=="X"){
            let winnerrx = document.getElementById("winnerx").style.color="green";   
            disableboxes();      
        }else{
            let winnerro = document.getElementById("winnero").style.color="green";
            disableboxes();
        }
        }

        }

      }
    }
    