var triviaQuestions = [{
	question: "Who won the Super Bowl in 2014?",
	answerList: ["Seahawks", "Patriots", "Packers", "Steelers"],
	answer: 0
},{
	question: "Who was the first unanimous NBA MVP?",
	answerList: ["Michael Jordan", "Magic Johnson", "Lebron James", "Stephen Curry"],
	answer: 3
},{
	question: "Which team in the MLB broke the curse of the Bambino?",
	answerList: ["Yankees", "Dodgers", "Red Sox", "Angels"],
	answer: 2
},{
	question: "What year did Michael Jordan win his first NBA championship?",
	answerList: ["1991", "1990", "1993", "1989"],
	answer: 0
},{
	question: "Who has the most championships in the four major american sports?",
	answerList: ["Celtics", "Yankees", "Patriots", "Capitals"],
	answer: 1
},{
	question: "Who holds the all time home run record in the MLB?",
	answerList: ["Babe Ruth", "Hank Aaron", "Alex Rodriguez", "Barry Bonds"],
	answer: 3
},{
	question: "How many hockey players are on a NHL roster?",
	answerList: ["23", "30", "15", "20"],
	answer: 0
},{
	question: "Which of the following were established most recently?",
	answerList: ["MLB", "NBA", "NFL", "MLS"],
	answer: 3
},{
	question: "Which sport is being played in the movie Space Jam?",
	answerList: ["Baseball", "Soccer", "Basketball", "Football"],
	answer: 2
},{
	question: "Which of the following professinal sports has a one game championship?",
	answerList: ["Baseball", "Football", "Basketball", "Hockey"],
	answer: 1
},];


var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10'];
var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;
var messages = {
	correct: "Correct",
	incorrect: "Incorrect",
	endTime: "Out of time",
    finished: "Results"
}

$('#startBtn').on('click', function(){
	$(this).hide();
	newGame();
});

$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});

