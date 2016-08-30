;(function(angular){
	"use Strict";
	angular.module("dashboardmodule", ['ngStorage'])
	.controller('dashboardcontroller',function($scope, $http, $localStorage, $sessionStorage, $window){
		
		$scope.onload = function()
		{
			$scope.pagename = "Dash Board";
		}


            $scope.Get = function () {
            	/*alert(JSON.stringify($localStorage.LocalMessage));*/
            	/*$window.alert($sessionStorage.SessionMessage);*/
            	$scope.ab = sessionStorage.getItem("result");
   				alert($scope.ab);
            }




	});
	
	
})(angular);