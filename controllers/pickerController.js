pickerTeamApp.controller("PickerController", ["$scope", function($scope) {

	/* Here I am setting the value of my players, playersOne and playersTwo to empty arrays, 
	ready to be populated by the values typed in to my form inputs using ng-model */

	$scope.players = [];
	$scope.playersOne = [];
	$scope.playersTwo = [];

	// below is a shuffle function for shuffling my players array

	function shuffle(array) {
  			var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  			while (0 !== currentIndex) {

    // Pick a remaining element...
    			randomIndex = Math.floor(Math.random() * currentIndex);
    			currentIndex -= 1;

    // And swap it with the current element.
    			temporaryValue = array[currentIndex];
    			array[currentIndex] = array[randomIndex];
    			array[randomIndex] = temporaryValue;
  			}

  			return array;
		}

	/* Below is a function to add the totals of my playersOne and playersTwo arrays. This will be used
	to display the totals of the even teams. This can  also be reused for other arrays of objects */

	function teamTotal(team) {
		var sum = 0;

		for (var i = 0; i < team.length; i += 1) {
			sum += team[i].skill;
		}

		return sum;
	};

	/* The function below seperates my sorted players array into two evenly matched teams based on skill level.
	 It loops through the array and assigns even indexes to the empty playersOne array and odd indexes to the 
	 empty playersTwo array. */

	$scope.evenTeams = function(team) {
			for (var i = 0; i < team.length; i += 1) {
				if ((i % 2)!= 0) {
					$scope.playersOne.push(team[i]);
				} else {
					$scope.playersTwo.push(team[i]);
				}
			};
		}	
	
	/* The below function selects my two evenly matched teams. It first resets the playersOne and playerTwo
	arrays to empty arrays. It then sorts my players array into ascending order based on skill level and runs
	the sorted players array through my evenTeams function. Finally it adds up the total skill level for each
	team using my teamTotal function and assigns them to two variables called playersOneTotal and playersTwoTotal
	and displays the totals and team lists on the page. */
	
	$scope.pickTeams = function() {
		$scope.playersOne = [];
		$scope.playersTwo = [];
		$scope.players.sort(function(a, b) {
			return a.skill - b.skill;
		});

		$scope.evenTeams($scope.players);
		$scope.playersOneTotal = teamTotal($scope.playersOne);
		$scope.playersTwoTotal = teamTotal($scope.playersTwo);
		$scope.showList = true;
		$scope.total = true;
	}

	/* This function picks random teams. It first passes my players array into my shuffle function.
	then creates a variable called cut and asigns it a value that is equal to half the arrays length. It then 
	slices the shuffled players array using the cut variable to define the end point of the first and start
	point of the second slice and assigns the results to the playersOne and playersTwo variables respectively.
	Finally is shows the results on the page as two lists and hides the team totals. */

	$scope.shuffleTeams = function() {
		$scope.players = shuffle($scope.players);
		var cut = $scope.players.length / 2;
		$scope.playersOne = $scope.players.slice(0, cut);
		$scope.playersTwo = $scope.players.slice(cut);
		$scope.showList = true;
		$scope.total = false;
	}

	/* This function takes the value of the select picker and uses it in an if statement to see which team
	size has been selected and then shows or hides the correct number of form inputs for that team total. */

	$scope.changeTotal = function() {
		
		if ($scope.totalPlayers  === "6") {
			$scope.sixASide = true;
			$scope.sevenASide = false;
			$scope.eightASide = false;
			$scope.nineASide = false;
		} else if ($scope.totalPlayers === "7") {
			$scope.sixASide = true;
			$scope.sevenASide = true;
			$scope.eightASide = false;
			$scope.nineASide = false;
		} else if ($scope.totalPlayers === "8") {
			$scope.sixASide = true;
			$scope.sevenASide = true;
			$scope.eightASide = true;
			$scope.nineASide = false;
		} else if ($scope.totalPlayers === "9") {
			$scope.sixASide = true;
			$scope.sevenASide = true;
			$scope.eightASide = true;
			$scope.nineASide = true;
		} else if ($scope.totalPlayers === "10") {
			$scope.sixASide = true;
			$scope.sevenASide = true;
			$scope.eightASide = true;
			$scope.nineASide = true;
			$scope.tenASide = true;
		} else if ($scope.totalPlayers === "11") {
			$scope.sixASide = true;
			$scope.sevenASide = true;
			$scope.eightASide = true;
			$scope.nineASide = true;
			$scope.tenASide = true;
			$scope.elevenASide = true;
		} else {
			$scope.sixASide = false;
			$scope.sevenASide = false;
			$scope.eightASide = false;
			$scope.nineASide = false;
			$scope.tenASide = false;
			$scope.elevenASide = false;
		}

	}
}]);
