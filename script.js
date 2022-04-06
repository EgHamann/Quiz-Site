var topScore = 0
var time = 0
var questionOneText = document.querySelector("#questionOne")
var questionTwoText = document.querySelector("#questionTwo")
var questionThreeText = document.querySelector("#questionThree")
var ans1 = document.querySelector("#oneAnswer1")
var ans2 = document.querySelector("#oneAnswer2")
var ans3 = document.querySelector("#oneAnswer3")
var gameBox1 = document.querySelector("#gameBox1")
var ans1two = document.querySelector("#twoAnswer1")
var ans2two = document.querySelector("#twoAnswer2")
var ans3two = document.querySelector("#twoAnswer3")
var gameBox2 = document.querySelector("#gameBox2")
var ans1three = document.querySelector("#threeAnswer1")
var ans2three = document.querySelector("#threeAnswer2")
var ans3three = document.querySelector("#threeAnswer3")
var gameBox3 = document.querySelector("#gameBox3")
var scoreBox = document.querySelector("#scoreBox")
var timer = document.querySelector("#timer")
var startButton = document.querySelector("#start")

gameBox1.style.display = "none";
gameBox2.style.display = "none";
gameBox3.style.display = "none";
scoreBox.style.display = "none";

startButton.addEventListener('click', function(){
    gameBox1.style.display = "flex";
    time = 0
    startTimer = setInterval(function(){
        time++
        timer.textContent =`${time}`;
    }, 1000);
}) 

function wrong(x) {
    x.setAttribute("style", "background-color:red")
}
    
    ans2.addEventListener('click', function(){
        wrong(ans2)
    });
    ans3.addEventListener('click', function(){
        wrong(ans3)
    });
    ans1.addEventListener('click', function() {
        gameBox2.style.display = "flex";
        gameBox1.style.display = "none";
    })

     
    ans2two.addEventListener('click', function(){
        wrong(ans2two)
    });
    ans1two.addEventListener('click', function(){
        wrong(ans1two)
    });
    ans3two.addEventListener('click', function() {
        gameBox3.style.display = "flex";
        gameBox2.style.display = "none";
    })
     
    ans1three.addEventListener('click', function(){
        wrong(ans1three)
    });
    ans3three.addEventListener('click', function(){
        wrong(ans3three)
    });
    ans2three.addEventListener('click', function() {
        scoreBox.style.display = "flex";
        gameBox3.style.display = "none";
        clearInterval(startTimer);
    })

var score = time
var init = document.getElementById("#yourInit")
var finalScore = document.querySelector("#yourScore")


topScore
var topInit
var topRank = document.querySelector("#topScore")

if (score > topScore) {
    topScore = score
    init = topInit
}

document.getElementById("#yourInit").onsubmit = function() {
    topRank.textContent = `Best Score: ${topInit}: ${topScore}`
    finalScore.textContent = `Your Score: ${init}: ${score} seconds`
}