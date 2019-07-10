const triviaQuestions = [{
	question: "Who won the Super Bowl in 2014?",
	answerList: ["Seahawks", "Patriots", "Packers", "Steelers"],
	answer: 0
},{
	question: "Who was the first unanimous NBA MVP?",
	answerList: ["Michael Jordan", "Magic Johnson", "Lebron James", "Stephen Curry"],
	answer: 3
},{
	question: "Which team in the MLB broke the curse of the 'Bambino'?",
	answerList: ["Yankees", "Dodgers", "Red Sox", "Angels"],
	answer: 2
},{
	question: "What year did Michael Jordan win his first NBA championship?",
	answerList: ["1991", "1990", "1993", "1989"],
	answer: 0
},{
	question: "Who has the most championships in the four major American sports?",
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
	question: "Which sport is being played in the movie 'Space Jam'?",
	answerList: ["Baseball", "Soccer", "Basketball", "Football"],
	answer: 2
},{
	question: "Which of the following professional sports has a one game championship?",
	answerList: ["Baseball", "Football", "Basketball", "Hockey"],
	answer: 1
},];


let questionArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10'];
let currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;
let messages = {
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

function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}

function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	answered = true;
    
    
	$('#currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaQuestions.length);
	$('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
	}
	countdown();
	
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
	});
}

function countdown(){
	seconds = 15;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;

	time = setInterval(showCountdown, 1000);
}

function showCountdown(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}


function answerPage(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty();
	$('.question').empty();

	var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
	
	
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer is: ' + rightAnswerText);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer is: ' + rightAnswerText);
		answered = true;
	}
	
	if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 5000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 5000);
	}	
}

function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();


	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Start Over');
}