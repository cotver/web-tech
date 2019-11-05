let questions = [];
let counter = 0;
let score = 0;
let inp = "";
let me =0 ;
const quiz = document.getElementById("quiz");
const No = document.getElementById("no");
const ima = document.getElementById("ima");
const A = document.getElementById("A");
const B = document.getElementById("B");
const C = document.getElementById("C");
const D = document.getElementById("D");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const choiceD = document.getElementById("choiceD");
let ans = document.getElementById("answer");

function slide(){
    if(ans.getAttribute("open")=="0"){
        ans.style.lineHeight = "1.5";
        ans.style.paddingTop = "1em";
        ans.style.paddingBottom = "1em";
        ans.style.color = "black";
        ans.setAttribute("open", "1");
    }
    else{
        ans.style.lineHeight = "0";
        ans.style.paddingTop = "0";
        ans.style.paddingBottom = "0";
        ans.style.color = "transparent";
        ans.setAttribute("open", "0");
    }
    
}
function create(javasc){
    let requestURL = javasc;
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
    if (request.readyState == 4 && request.status == 200) {
    var myJSON = JSON.parse(request.responseText);
    myFunction(myJSON);
    }
    };
    request.open("GET", requestURL, true);
    request.send();
    function myFunction(myObj) {
        document.getElementById("title").innerHTML = myObj.title;
        questions = myObj.questions;
        quiz.innerHTML = questions[counter].question;
        No.innerHTML = counter+1+"/"+ questions.length;
        ima.innerHTML = questions[counter].image;
        A.innerHTML = questions[counter].choice1;
        B.innerHTML = questions[counter].choice2;
        C.innerHTML = questions[counter].choice3;
        D.innerHTML = questions[counter].choice4;
        ans.innerHTML = "ตอบ " + questions[counter].answer +"<br>"+ questions[counter].solution;
    }
}

function answer(answ){
    
}
function select(answ){
    if(me == 0){
        choiceA.style.background = "#fff"
        choiceB.style.background = "#fff"
        choiceC.style.background = "#fff"
        choiceD.style.background = "#fff"
        if(answ == "ก."){
            choiceA.style.background = "rgb(235, 131, 183)"
        } else if(answ == "ข."){
            choiceB.style.background = "rgb(235, 131, 183)"
        }else if(answ == "ค."){
            choiceC.style.background = "rgb(235, 131, 183)"
        }else if(answ == "ง."){
            choiceD.style.background = "rgb(235, 131, 183)"
        }
        inp = answ;
    }
    
}
function submit(){
    me=1;
    if(inp == questions[counter].answer){
        score++;
    }
    document.getElementById("submit").style.display = "none"
    document.getElementById("next").style.display = "block"
    document.getElementById("ans").style.display = "block"
}
function next(){
    me=0;
    choiceA.style.background = "#fff"
    choiceB.style.background = "#fff"
    choiceC.style.background = "#fff"
    choiceD.style.background = "#fff"
    document.getElementById("submit").style.display = "block"
    document.getElementById("next").style.display = "none"
    document.getElementById("ans").style.display = "none"
    if(questions.length == counter+1){
        document.getElementById("centered").style.display = 'block';
        document.getElementById("centerer").innerHTML = "Your Score<br>" + score+"/"+ questions.length;
    }
    counter++;
    ans.style.lineHeight = "0";
    ans.style.paddingTop = "0";
    ans.style.paddingBottom = "0";
    ans.style.color = "transparent";
    ans.setAttribute("open", "0");
    quiz.innerHTML = questions[counter].question;
    No.innerHTML = counter+1+"/"+ questions.length;
    ima.innerHTML = questions[counter].image;
    A.innerHTML = questions[counter].choice1;
    B.innerHTML = questions[counter].choice2;
    C.innerHTML = questions[counter].choice3;
    D.innerHTML = questions[counter].choice4;
    ans.innerHTML = "ตอบ " + questions[counter].answer +"<br>"+ questions[counter].solution;
}