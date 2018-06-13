$(document).ready(function() {

	// call updateGame with 0 as the input parameter for wins and losses so that we can initialize the game
     updateGame(0, 0);

	// execute the game logic for every click on one of the crystals
	$(".crystal").on("click", function() {
		var currentScore = getTotalScore();
		var crystalValue = parseInt($(this).val());
		var targetNumber = getTargetNumber();

		var newScore = currentScore + crystalValue;
		if (currentScore + crystalValue > targetNumber) {
			// the player lost the current game and so,
			// update losses count
			var currentLossesCount = getLosses();
			setLosses(++currentLossesCount, true);

			// start a new game
			updateGame(getWins(), getLosses());
		} else if (newScore < targetNumber) {
			// the current game is still in play and so,
			// only update the total score
			setTotalScore(newScore);
		} else {
			// the player won the current game and so,
			// update wins count
			var currentWinsCount = getWins();
			setWins(++currentWinsCount, true);

			// start a new game
			updateGame(getWins(), getLosses());
		}
      });

	// function for game initialization and subsequent update
	function updateGame(winsCount, lossesCount) {
		// set the values for the elements with ids wins, losses to the passed in input value
		setWins(winsCount);
		setLosses(lossesCount);

		// set the total score to 0
		setTotalScore(0);

		// randomly set the value for the target number and the 4 crystals
		setTargetNumber();
		setCrystalValues();
	}

	function getWins() {
		return parseInt($("#wins").text());
	}

	function setWins(value, changeBackground) {
		$("#wins").text(value);
		if (changeBackground) {
			resetLossesContainerBackground();
			setWinsContainerBackground();
		}
	}

	function resetWinsContainerBackground() {
		$("#wins-container").css("background-color", "#8af7f2");
	}

	function setWinsContainerBackground() {
		$("#wins-container").css("background-color", "green");
	}

	function getLosses() {
		return parseInt($("#losses").text());
	}

	function setLosses(value, changeBackground) {
		$("#losses").text(value);
		if (changeBackground) {
			resetWinsContainerBackground();
			setLossesContainerBackground();
		}
	}

	function resetLossesContainerBackground() {
		$("#losses-container").css("background-color", "#8af7f2");
	}

	function setLossesContainerBackground() {
		$("#losses-container").css("background-color", "red");
	}

	function getTotalScore() {
		return parseInt($("#total-score").text());
	}

	function setTotalScore(value) {
		$("#total-score").text(value);
	}


	function getTargetNumber() {
		return parseInt($("#target-number").text());
	}

	function setTargetNumber() {
		// assign random values between 19 - 120 to the element with id target-number
		$("#target-number").text(Math.floor(Math.random() * (120 - 19 + 1)) + 19);
	}

	function setCrystalValues() {
		// assign random values between 1 - 12 to each of the crystals with ids crystal-1, crystal-2, crystal-3, and crystal-4 by setting the 'value' attribute of each fo these elements
		$("#crystal-1").val(Math.floor(Math.random() * 12) + 1);
		$("#crystal-2").val(Math.floor(Math.random() * 12) + 1);
		$("#crystal-3").val(Math.floor(Math.random() * 12) + 1);
		$("#crystal-4").val(Math.floor(Math.random() * 12) + 1);

		// console.log the chosen letter (for debugging and perhaps cheating purposes!)
		// console.log("crystal 1 value: " + $("#crystal-1").val());
		// console.log("crystal 2 value: " + $("#crystal-2").val());
		// console.log("crystal 3 value: " + $("#crystal-3").val());
		// console.log("crystal 4 value: " + $("#crystal-4").val());
	}

});