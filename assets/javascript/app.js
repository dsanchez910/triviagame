const triviaQuestions = [{
	question: "How many World Series titles do the Yankees have?",
	answerList: ["9", "16", "22", "27"],
	answer: 3
},{
	question: "Who was the last Yankees Player to win Rookie of the Year?",
	answerList: ["Derek Jeter", "Mariano Rivera", "Aaron Judge", "Alex Rodriguez"],
	answer: 2
},{
	question: "Who was the last official Yankees Captain?",
	answerList: ["Derek Jeter", "Mariano Rivera", "Aaron Judge", "Alex Rodriguez"],
	answer: 0
},{
	question: "What year did the Yankees capture their first World Series?",
	answerList: ["1903","1927", "1965", "1991"],
	answer: 1
},{
	question: "What city in New York do the Yankees play in?",
	answerList: ["Queens", "Brooklyn", "Manhattan", "Bronx"],
	answer: 3
},{
	question: "What Team is the Yankees biggest Rival?",
	answerList: ["Dodgers", "Mets", "Red Sox", "Rays"],
	answer: 3
},{
	question: "Who was the last Yankees pitcher to win World Series MVP?",
	answerList: ["CC Sabathia", "Rodger Clemmons", "Mariano Rivera", "David Cone"],
	answer: 2
},{
	question: "What year was the last Yankees World Series Title?",
	answerList: ["2001", "2005", "2009", "2011"],
	answer: 2
},{
	question: "What year was the new Yankees Stadium built?",
	answerList: ["2006", "2009", "2015", "2018"],
	answer: 1
},{
	question: "How many jersey numbers have the Yankees retired?",
	answerList: ["15", "9", "20", "32"],
	answer: 0
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
