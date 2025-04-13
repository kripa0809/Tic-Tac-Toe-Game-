let boxes= document.querySelectorAll(".box");
let restBtn=document.querySelector("#reset-btn");
let newGame=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO=true; 

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

const resetGame=() =>{
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");
}


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("BOX WAS CLICKED!");
        if(turnO){
            // PLAYER O
            box.innerText="O";
            turnO=false;
        }else{
            // PLAYER X
            box.innerText="X";
            turnO=true;
        }

        checkWinner();
    });
});

const disableBoxes =()=>{
    for (let box of boxes){
        box.disabled= true;
    }
};

const enableBoxes =()=>{
    for (let box of boxes){
        box.disabled= false;
        box.innerText="";
    }
};

const showWinner = (winner) =>{
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide")
   disableBoxes();
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
            let postVal1 = boxes [pattern[0]].innerText;
            let postVal2 = boxes [pattern[1]].innerText;
            let postVal3 = boxes [pattern[2]].innerText;

            if(postVal1 !="" && postVal2 !="" && postVal3 !=""){
                if(postVal1 === postVal2 && postVal2===postVal3){
                    console.log("winner!",postVal1);
                    showWinner(postVal1);
                }
            }
        }
    };

   newGame.addEventListener("click",resetGame);
   restBtn.addEventListener("click",resetGame);

   
   
