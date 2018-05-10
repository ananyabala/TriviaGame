// var questions = [
// ["Q1. What term did people use to refer to the Beatles debuting in North America?", "The British Invasion","The Psychedelic Invasion", "The Age of Aquarius", "The Great Debut",1],
// ["Q2. In 1974, what song did Abba win Eurovision with, and subsequently rise to international stardom?", "Mamma Mia","The Winner Takes It All", "Super Trouper", "Waterloo",4],
// ["Q3. Who is the famous guitarist from Cream, who went on to also have a solo career?", "Jimi Hendrix","Mark Knopfler", "Eric Clapton", "Chuck Berry",3],
// ["Q4. Which period was the pilot of TV show Mad Men set in?", "40s","50s", "60s", "70s",4],
// ["Q5. Which country were the Olympics in 1976 hosted?", "Canada","Austria", "Mexico City", "Germany",1],
// ["Q6. Which year did the famous Spanish painter Pablo Picasso die?", "1972","1973", "1975", "1970",2],
// ["Q7. In which song in the movie Grease does John Travolta sing about a car?", "We Go Together","Greased Lightning", "You're The One That I Want", "Beauty School Dropout",2],
// ["Q8. Which movie contains the famous phrase: I&ll make you an offer you can't refuse?", "Rocky","The Departed", "The Godfather", "A Clockwork Orange",3],
// ];

// var myQuestions =document.getElementById("question");
// console.log(myQuestions.children[0]);



// console.log(questions);
// for (var i =0;i<questions.length;i++) {
//     var element=document.getElementById("page-1");
//     element.innerHTML=questions.children[i];
// }

// var classname = document.getElementsByClassName("answer");
// console.log(classname);
// // Calling the function myAnswer
// for (var i=0;i<classname.length;i++){
//     classname[i].addEventListener('click',myAnswer,false);
// }

// function myAnswer (){
//     var idAnswer =myAnswer.getAttribute("data-id");
//     document.getElementById("page-1").innerHTML='Answer'+idAnswer;
// }

function submitAnswers() {
    var total = 8;
    var score = 0;
    // Get User Input
    var q1 = document.forms["quizForm"]["q1"].value;
    var q2 = document.forms["quizForm"]["q2"].value;
    var q3 = document.forms["quizForm"]["q3"].value;
    var q4 = document.forms["quizForm"]["q4"].value;
    var q5 = document.forms["quizForm"]["q5"].value;
    var q6 = document.forms["quizForm"]["q6"].value;
    var q7 = document.forms["quizForm"]["q7"].value;
    var q8 = document.forms["quizForm"]["q8"].value;



    // Validation
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) === null || eval('q' + i) === '') {
            alert("You missed Question " + i);
            return false;
        }

    }

    // Set Correct Answers
    var answers = ["a", "d", "c", "a", "d", "d", "b", "a"];

    // Check answers 
    for (i = 1; i <= total; i++) {
        if (eval('q' + i) === answers[i - 1]) {
            score++;
        }

    }

// Display Results
var results = document.getElementById("results");
results.innerHTML="You scored <span>"+score+"</span> out of <span>"+total+"</span>"

 alert("You scored " + score + " out of " + total);
 return false;
}

