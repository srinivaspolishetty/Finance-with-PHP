;(function(angular){
	"use Strict";
	angular.module("indexapp", ['ngStorage', 'ui.router',  'commonmodule'])
	.controller('homecontroller',function($scope, $http, $localStorage, $sessionStorage, $window){
		
		$scope.onload = function()
		{
			$scope.pagename = "Home Page";
		}
		$scope.tony = function() {
			sessionStorage.clear();
			location.href="../../index.html";
		}
	});
	
	
})(angular);