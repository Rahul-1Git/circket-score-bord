{/* <h1><u>CRICKET SCORE BOARD</u></h1>
<h2 id="run">RUNS : </h2>
<button onclick="run1()">+1</button>
<button onclick="run2()">+2</button>
<button onclick="run4()">+4</button>
<button onclick="run6()">+6</button>

<h2 id="wicket">WICKET : </h2>
<button onclick="wicket1()">+1</button>

<h2 id="over"> OVER :</h2>
<button onclick="over1()">+1</button>

<h2 id = "ball">BALLS : </h2>
<button onclick="ball1()">+1</button>

<script src="index.js"></script> */}

let runs = document.getElementById("run")
let runvalue = 0
let wickets = document.getElementById("wicket")
let wicketvalue = 0
let overs = document.getElementById("over")
let overvalue = 0
let balls = document.getElementById("ball")
let ballvalue = 0

function run1(){
runvalue += 1
runs.innerText = " RUNS : " + runvalue
}

function run2(){
    runvalue += 2
    runs.innerText = " RUNS : " + runvalue
}

function run4(){
    runvalue += 4
    runs.innerText =" RUNS : " + runvalue
}

function run6(){
    runvalue += 6
    runs.innerText = " RUNS : " + runvalue
}


function  wicket1(){
    wicketvalue +=1
    wicket.innerText  = "WICKET : " + wicketvalue
}

function  over1(){
    overvalue +=1
    over.innerText  = "OVER : " + overvalue
}

function  ball1(){
    ballvalue +=1
    ball.innerText  = "BALLS :  "  + ballvalue
}

function reset(){
    runvalue = 0
    runs.innerText = " RUNS : " +  0

    wicketvalue = 0
    wicket.innerText  = "WICKET : " + 0

    overvalue = 0
    over.innerText  = "OVER : " + 0

    ballvalue = 0
    ball.innerText = "BALLS :  "  + 0
}