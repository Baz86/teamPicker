pickerTeamApp.controller("PickerController", ["$scope", function($scope) {
	$scope.players = [];
	$scope.playersOne = [];
	$scope.playersTwo = [];

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

	$scope.evenTeams = function() {
			for (var i = 0; i < $scope.players.length; i += 1) {
				if ((i % 2)!= 0) {
					$scope.playersOne.push($scope.players[i]);
				} else {
					$scope.playersTwo.push($scope.players[i]);
				}
			};
		}	
	

	$scope.pickTeams = function() {
		$scope.playersOne = [];
		$scope.playersTwo = [];
		$scope.players.sort(function(a, b) {
			return a.skill - b.skill;
		});

		$scope.evenTeams();
		$scope.showList = true;
	}

	$scope.shuffleTeams = function() {
		$scope.players = shuffle($scope.players);
		var cut = $scope.players.length / 2;
		$scope.playersOne = $scope.players.slice(0, cut);
		$scope.playersTwo = $scope.players.slice(cut);
		$scope.showList = true;
	}

	$scope.changeTotal = function() {
		
		if ($scope.totalPlayers  === "12") {
			$scope.sixASide = true;
			$scope.sevenASide = false;
			$scope.eightASide = false;
			$scope.nineASide = false;
		} else if ($scope.totalPlayers === "14") {
			$scope.sixASide = true;
			$scope.sevenASide = true;
			$scope.eightASide = false;
			$scope.nineASide = false;
		} else if ($scope.totalPlayers === "16") {
			$scope.sixASide = true;
			$scope.sevenASide = true;
			$scope.eightASide = true;
			$scope.nineASide = false;
		} else if ($scope.totalPlayers === "18") {
			$scope.sixASide = true;
			$scope.sevenASide = true;
			$scope.eightASide = true;
			$scope.nineASide = true;
		} else {
			$scope.sixASide = false;
			$scope.sevenASide = false;
			$scope.eightASide = false;
			$scope.nineASide = false;
		}

	}
}]);
