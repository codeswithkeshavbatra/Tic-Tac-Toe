let btnBox=document.querySelectorAll(".box");
let resetGame=document.querySelector(".reset");
let winner=document.querySelector(".win");
let show=document.querySelector(".newwin");
let reset=document.querySelector(".reset");
let newgame=document.querySelector(".newGame");

let turn=true;
const WinPattern=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [2,4,6]
];
btnBox.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn===true){
            box.innerText="X";
            turn=false;
        }
        else{
            box.innerText="O";
            turn=true;
        }
        box.disabled=true;
        chekWinner();
    });
})
function showWinner(champ){
    winner.innerText=`Winner ${champ}`;
    show.classList.remove("hide");
    reset.classList.add("hide");
    newgame.classList.remove("hide");
}
function enable(){
    turn=true;
    for(let Box of btnBox){
        Box.innerText="";
        Box.disabled=false;
    }
        show.classList.add("hide");
        reset.classList.remove("hide")
        newgame.classList.add("hide");
}
function Disable(){
    for(let Box of btnBox){
        Box.disabled=true;
    }
}
function chekWinner(){
    for(let patttern of WinPattern){
        let pater1val=btnBox[patttern[0]].innerText;
        let pater2val=btnBox[patttern[1]].innerText;
        let pater3val=btnBox[patttern[2]].innerText;
        if(pater1val!="" && pater2val!="" && pater3val!=""){
            if(pater1val===pater2val && pater2val===pater3val){
                Disable();
                showWinner(pater1val);
            }
        }
    }
}
reset.addEventListener("click",enable);
newgame.addEventListener("click",enable);