;(function(angular){
	"use Strict";
	angular.module("menumodule", [])
	.controller('menucontroller',function($scope, $http){
		
		$scope.onload = function()
		{
			$scope.pagename = "Menu Page";
		}
	});
	
	
})(angular);