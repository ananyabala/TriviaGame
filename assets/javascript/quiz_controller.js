var questions;
var questionIndex=0;
var score;

function getQuestionIndex () {
return questionIndex;
}
console.log(getQuestionIndex());


function endGame () {
    return questions.length===questionIndex;
}


function correctAnswer () {
    questionIndex++;
    if (getQuestionIndex().correctAnswer(answer)) {
        score++;
    }
}