var app = angular.module('app', []); // [] being the dependencies

// Create the userController
// Array objects must be in the same order as the function's parameters or else it gets all wonky
app.controller('MainController', ['$scope', '$timeout', '$window', function ($scope, $timeout, $window) {
	
	$scope.timerLength = 25;
	$scope.isRunning = false;

	$scope.runTimer = function () {
		if (!$scope.isRunning)
			$scope.timerProgress = $scope.timerLength;
		$timeout(function () {
			$scope.isRunning = true;
			if ($scope.timerProgress > 0) {
				$scope.timerProgress = $scope.timerProgress - 0.1;
				$scope.timerProgress = Math.round($scope.timerProgress*100)/100;
				$scope.runTimer();
			}
			else {
				$window.alert('Time!')
				$scope.isRunning = false;
				$scope.timerProgress = $scope.timerLength;
			}
		}, 100);
	}

}]);