let boxes = document.querySelectorAll("#box");
let resetBtn = document.querySelector("#reset");
let turn= true;
const winning = [
    [1,2,3],
    [1,4,7],
    [1,5,9],
    [2,5,8],
    [3,6,9],
    [4,5,6],
    [7,8,9],
    [3,5,7]
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
        checkwinner();
    })
})

const checkwinner = () => {
    for(let pattern of winning){
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if(pos1val != "" && pos2val !="" && pos3val !=""){
            if(pos1val == pos2val && pos2val == pos3val){
                console.log("Winner");
            }
        }
    }
};