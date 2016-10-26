//Create start clock automatically or on a button click

//The first question will also show up at the same time the clock begins. If the answer they click is correct, show a congradulatory
//screen. After a few seconds, the next slide will show up. Reference slide activity in class and substitute images with divs.

//Same scsenario for lose. If the player runs out of time, times up display and show correct answer. Wait few seconds then show 
//next question. If the player chooses the wrong answer, tell the player they selected the wrong option and then display the 
//correct answer. Wait a few seconds, then show the next question.

//On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game 
//(without reloading the page).

$(document).ready(function(){
	$('#music').hide();
	$('#clock').hide();

	var youtube;
	var slideNumber = 0;
	var counter;
	var change;
	var timerBegin = 20;
	var reset = false;
	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var questions = [
		{
			quest: "Which of the following is an actual movie?",
			answer: "A. Jaws",
			choices: ["A. Jaws", "B. Laws", "C. Paws", "D. Claws"],
			// video: '<iframe id= "video" width: 200px height: 100px src = "https://www.youtube.com/embed/2I91DJZKRxs" allowfullscreen></iframe>'
			image: '<img id = "image" src = "assets/images/jaws.jpeg">'
		},
		{
			quest: "Which of the following is a western filmed in Spain?",
			answer: "B. For a Few Dollars More",
			choices: ["A. Gummy Bears", "B. For a Few Dollars More", "C. What?", "D. I dont care"],
			// video: '<iframe id= "video" width: 200px height: 100px src= "https://www.youtube.com/embed/M-k_BW8iLkk" allowfullscreen></iframe>'
			image: '<img id = "image" src = "assets/images/dollars.jpg">'
		},
		{
			quest: "Which of the following is an actual movie?",
			answer: "D. Pineapple Express",
			choices: ["A. The Mining", "B. The Natrix", "C. Huh?", "D. Pineapple Express"],
			// video: '<iframe id= "video" width: 200px height: 100px src="https://www.youtube.com/embed/8TUTxAK1EqQ" allowfullscreen></iframe>'
			image: '<img id = "image" src = "assets/images/pineapple.jpg">'
		},
		{
			quest: "Which of the following is a 1982 horror sci-fi movie?",
			answer: "C. The Thing",
			choices: ["A. Blair Witch Project", "B. The Shining", "C. The Thing", "D. Batman"],
			// video: '<iframe id= "video" width: 200px height: 100px src="https://www.youtube.com/embed/JjIXwkX1e48" allowfullscreen></iframe>'
			image: '<img id = "image" src = "assets/images/thing.jpg">'
		}
	]

	var startDiv = $('<div>Click to Start</div>').addClass('start');
	$('.startButton').append(startDiv);
	var viewResults = $('<div>Click for Results</div>').addClass('result');
	$('.resultButton').append(viewResults);
	$('.resultButton').fadeOut();
	
	$('.start').on('click', begin);
	$('.answer1').on('click', check);
	$('.answer2').on('click', checkTwo);
	$('.answer3').on('click', checkThree);
	$('.answer4').on('click', checkFour);
	$('.resultButton').on('click', vidControls);
	// $('#video').on('click', vidControls);

	function vidControls()
	{
		$('.yt_player_iframe').each(function(){
				this.contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*')
		});
		setTimeout(resetGame, 2000);
	}
	function check()
	{
		if($('.answer1').html() === questions[slideNumber].answer)
		{
			stopInterval();
			timerBegin = 21;
			correct++;
			$('.questionHolder').html('CORRECT!');
			$('.answer1').html('');
			$('.answer2').html(questions[slideNumber].image);
			$('.answer3').html('');
			$('.answer4').html('');
			slideNumber++;
			if(slideNumber === questions.length)
			{
				stop();
				stopInterval();
				$('.resultButton').fadeIn();
				// setTimeout(resetGame, 5000);
			}
			else if(slideNumber < questions.length)//Needed an else if statement here and in the other onclick functions so that
			{                                      //the code inside of them only executes if the slideNumber is < than the 
			change = setTimeout(displayDiv, 5000); //array of objects. Before when I had this these two lines of code outside 
			setTimeout(callCounter, 5000);         //the else if statement, it was still counting down the timer and switching 
			}                                      //slides, even though the if statement above was executing, because it runs 
		}										   //these two lines of code after the if statement.
		else
		{
			stopInterval();
			timerBegin = 21;
			incorrect++;
			$('.questionHolder').html('WRONG!');
			$('.answer1').html('The Correct Answer Is: ');
			$('.answer2').html(questions[slideNumber].answer);
			$('.answer3').html(questions[slideNumber].image);
			$('.answer4').html('');
			slideNumber++;
			if(slideNumber === questions.length)
			{
				stop();
				stopInterval();
				$('.resultButton').fadeIn();
				// setTimeout(resetGame, 5000);
			}
			else if(slideNumber < questions.length)
			{
			change = setTimeout(displayDiv, 5000);
			setTimeout(callCounter, 5000);
			}
		}
	}
	function checkTwo()
	{
		if($('.answer2').html() === questions[slideNumber].answer)
		{
			stopInterval();
			timerBegin = 21;
			correct++;
			$('.questionHolder').html('CORRECT!');
			$('.answer1').html('');
			$('.answer2').html(questions[slideNumber].image);
			$('.answer3').html('');
			$('.answer4').html('');
			slideNumber++;
			if(slideNumber === questions.length)
			{
				stop();
				stopInterval();
				$('.resultButton').fadeIn();
				// setTimeout(resetGame, 5000);
			}
			else if(slideNumber < questions.length)
			{
			change = setTimeout(displayDiv, 5000);
			setTimeout(callCounter, 5000);
			}
		}
		else
		{
			stopInterval();
			timerBegin = 21;
			incorrect++;
			$('.questionHolder').html('WRONG!');
			$('.answer1').html('The Correct Answer Is: ');
			$('.answer2').html(questions[slideNumber].answer);
			$('.answer3').html(questions[slideNumber].image);
			$('.answer4').html('');
			slideNumber++;
			if(slideNumber === questions.length)
			{
				stop();
				stopInterval();
				$('.resultButton').fadeIn();
				// setTimeout(resetGame, 5000);
			}
			else if(slideNumber < questions.length)
			{
			change = setTimeout(displayDiv, 5000);
			setTimeout(callCounter, 5000);
			}
		}
	}
	function checkThree()
	{
		if($('.answer3').html() === questions[slideNumber].answer)
		{
			stopInterval();
			timerBegin = 21;
			correct++;
			$('.questionHolder').html('CORRECT!');
			$('.answer1').html('');
			$('.answer2').html(questions[slideNumber].image);
			$('.answer3').html('');
			$('.answer4').html('');
			slideNumber++;
			if(slideNumber === questions.length)
			{
				stop();
				stopInterval();
				$('.resultButton').fadeIn();
				// setTimeout(resetGame, 5000);
			}
			else if(slideNumber < questions.length)
			{
			change = setTimeout(displayDiv, 5000);
			setTimeout(callCounter, 5000);
			}
		}
		else
		{
			stopInterval();
			timerBegin = 21;
			incorrect++;
			$('.questionHolder').html('WRONG!');
			$('.answer1').html('The Correct Answer Is: ');
			$('.answer2').html(questions[slideNumber].answer);
			$('.answer3').html(questions[slideNumber].image);
			$('.answer4').html('');
			slideNumber++;
			if(slideNumber === questions.length)
			{
				stop();
				stopInterval();
				$('.resultButton').fadeIn();
				// setTimeout(resetGame, 5000);
			}
			else if(slideNumber < questions.length)
			{
			change = setTimeout(displayDiv, 5000);
			setTimeout(callCounter, 5000);
			}
		}
	}
	function checkFour()
	{
		if($('.answer4').html() === questions[slideNumber].answer)
		{
			stopInterval();
			timerBegin = 21;
			correct++;
			$('.questionHolder').html('CORRECT!');
			$('.answer1').html('');
			$('.answer2').html(questions[slideNumber].image);
			$('.answer3').html('');
			$('.answer4').html('');
			slideNumber++;
			if(slideNumber === questions.length)
			{
				stop();
				stopInterval();
				$('.resultButton').fadeIn();
				// setTimeout(resetGame, 5000);
			}
			else if(slideNumber < questions.length)
			{
			change = setTimeout(displayDiv, 5000);
			setTimeout(callCounter, 5000);
			}
		}
		else
		{
			stopInterval();
			timerBegin = 21;
			incorrect++;
			$('.questionHolder').html('WRONG!');
			$('.answer1').html('The Correct Answer Is: ');
			$('.answer2').html(questions[slideNumber].answer);
			$('.answer3').html(questions[slideNumber].image);
			$('.answer4').html('');
			slideNumber++;
			if(slideNumber === questions.length)
			{
				stop();
				stopInterval();
				$('.resultButton').fadeIn();
				// setTimeout(resetGame, 5000);
			}
			else if(slideNumber < questions.length)
			{
			change = setTimeout(displayDiv, 5000);
			setTimeout(callCounter, 5000);
			}
		}
	}
	function begin()
	{
		slideNumber = 0;
		
		if(reset === true)
		{
			timerBegin = 21;
		}
		
		$('.yt_player_iframe').each(function(){
			this.contentWindow.postMessage('{"event":"command","func":"' + 'playVideo'  + '","args":""}', '*')
		});
			// loadVideoById({'videoId': '2q2bkhKq0_A',
   //             'startSeconds': 5,
   //             'suggestedQuality': 'large'});
			// player.playVideo();
		
		correct = 0;
		incorrect = 0;
		unanswered = 0;
		$('#clock').show();
		$('.start').fadeOut();
		counter = setInterval(count, 1000);
		displayDiv();
	}
	function displayDiv()
	{
		$('.questionHolder').html(questions[slideNumber].quest);
		$('.answer1').html(questions[slideNumber].choices[0]);
		$('.answer2').html(questions[slideNumber].choices[1]);
		$('.answer3').html(questions[slideNumber].choices[2]);
		$('.answer4').html(questions[slideNumber].choices[3]);
	}
	function count()
	{
		timerBegin--;
		$('#realClock').html(timerBegin);
		if(timerBegin === 0)
		{
			timerBegin = 21;
			stopInterval();
			unanswered++;
			$('.questionHolder').html('Time Is Up!');
			$('.answer1').html('The Correct Answer Is: ');
			$('.answer2').html(questions[slideNumber].answer);
			$('.answer3').html(questions[slideNumber].image);
			$('.answer4').html('');
			slideNumber++;
			if(slideNumber === questions.length)
			{
				stop();
				stopInterval();
				$('.resultButton').fadeIn();
				// setTimeout(resetGame, 5000);
			}
			else if(slideNumber < questions.length)
			{
			change = setTimeout(displayDiv, 5000);
			setTimeout(callCounter, 5000);
			}
		}
	}
	function callCounter()
	{
		counter = setInterval(count, 1000);
	}
	function stop()
	{
		clearTimeout(change);
	}
	function stopInterval()
	{
		clearInterval(counter);
	}
	
	function resetGame()
	{
		reset = true;
		$('.resultButton').fadeOut();
		stop();
		stopInterval();
		$('.questionHolder').html('Game Over');
		$('.answer1').html('Your Performance: ');
		$('.answer2').html("Correct: " + correct + " Incorrect: " + incorrect + " Unanswered: " + unanswered);
		$('.answer3').html('<iframe id= "video" width: 200px height: 100px src="https://www.youtube.com/embed/k7Awv1n438I" allowfullscreen></iframe>' + '<iframe id= "video" width: 200px height: 100px src="https://www.youtube.com/embed/I2E8wW-YGBA" allowfullscreen></iframe>' + '<iframe id= "video" width: 200px height: 100px src="https://www.youtube.com/embed/8TUTxAK1EqQ" allowfullscreen></iframe>');
		$('.answer4').html('<iframe id= "video" width: 200px height: 100px src="https://www.youtube.com/embed/2I91DJZKRxs" allowfullscreen></iframe>' + '<iframe id= "video" width: 200px height: 100px src="https://www.youtube.com/embed/hqVbOSEsJNo" allowfullscreen></iframe>' + '<iframe id= "video" width: 200px height: 100px src="https://www.youtube.com/embed/JjIXwkX1e48" allowfullscreen></iframe>' + "Music: Electric Citizen: Beggar's Need" + '<img id = "image2" src = "assets/images/electric.jpg">');
		$('.resetButton').append(startDiv);//Needed to create another section in the html with class resetButton, since 
		                                   //before when I was appending it answer4 class, when I clicked the start button, it was 
		                                   //doing the onclick function for the answer4 class and that is why it was displaying the 
		                                   //message wrong.
		$('.start').fadeIn();
	}
	
});