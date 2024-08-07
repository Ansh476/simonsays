let gameseq = [];
let userseq = [];

let btns = ["green", "yellow", "blue", "red"];

let start = false;
let level = 0;

let h2 = document.querySelector('h2');

document.addEventListener("keypress",function() {
    if(start == false){
        start = true;
    }
    console.log("game started");
    levelup();
});


function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userflash(btn){
    btn.classList.add("uflash");
    setTimeout(function(){
        btn.classList.remove("uflash");
    },250);
}


function levelup(){
    userseq = [];
    level++;
    h2.innerText = `Level ${level}`;
    let randidx = Math.floor(Math.random()*3);
    let randcolor = btns[randidx];
    let randbtn = document.querySelector(`.${randcolor}`);
    btnflash(randbtn);
    gameseq.push(randcolor)
    console.log(gameseq);
}

function incorrect(btn){
    btn.classList.add("iflash");
    setTimeout(function(){
        btn.classList.remove("iflash");
    },100);
}

function restart(){
    alert(`your score is ${level-1}`);
    h2.innerText = `Game over!Press any key to start`;
    reset();
}

let body = document.querySelector("body");
function checkans(idx){
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelup,1000);
        }
    }else{
        incorrect(body);
        setTimeout(restart,500);
    }
}

function buttonpress(){
    let btn = this;
    userflash(btn);
    let usercolor = btn.getAttribute("id");
    userseq.push(usercolor);
    checkans(userseq.length-1);
}


let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",buttonpress)
}

function reset(){
    start = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
