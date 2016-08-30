;(function(angular){
	"use Strict";
	angular.module("headermodule", [])
	.controller('headercontroller',function($scope, $http){
		
		$scope.onload = function()
		{
			$scope.pagename = "Header Page";
			$scope.ab = JSON.parse(sessionStorage.getItem("result"));
			
   				alert($scope.ab[0].username);
		}
	});
	
	
})(angular);