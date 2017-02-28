var rozgaar = angular.module('rozgaar',[]);

rozgaar.controller('validUser', function($scope){
	$scope.submitDet = function(){
		check($scope.jobID);
	}
	function check(data){
		if($scope.jobID === "admin"){
			alert("Welcome to Rozgaar");
		}
	}
});