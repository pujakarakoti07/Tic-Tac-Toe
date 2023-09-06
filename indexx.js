console.log("Welcome to Tic Tac Toe")
let audioTurn = new Audio("push.wav");
let turn = "X"
let music=new Audio("mixkit-arcade-retro-changing-tab-206.wav");
let isgameover = false;

// Function to change the turn
const changeTurn = ()=>{
    return turn === "X"? "0": "X"
}

// Function to check for a win
const checkwin = ()=>{
    let boxtexts=document.getElementsByClassName("boxtext");
    let win=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,4,8],
        [2,4,6],
        [1,4,7],
        [2,5,8],
        [0,3,6]
    ]
    win.forEach(e=>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[2]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[0]].innerText !== "") ){
            document.querySelector('.info').innerText = boxtexts[e[0]].innerText + " Won"
            isgameover = true
        }

    })


    
}


// Game Logic
music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener("click", ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkwin();
            if(!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            }else{
                music.play();
            }
          
        
        }
    })
})

// Add onclick listener to reset button
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X"; 
    isgameover = false
    document.querySelector(".line").style.width = "0vw";
    document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px"
})