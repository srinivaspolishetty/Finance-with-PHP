;(function(angular){
	"use Strict";
	angular.module("viewmodule", ['ui.bootstrap'])
	.controller('viewdetailscontroller',function($scope, $http){
		
		$scope.onload = function()
		{
			$scope.pagename = "View Candidates page";
			$scope.details_fields = true;
		}
		
		$scope.showdetails = function()
		{
			$scope.view_details = true;
			$scope.details_fields = false;
		}
		
		$scope.showdetailsfields = function()
		{
			$scope.details_fields = true;
			$scope.view_details = false;
		}
		
		$scope.fromDateOptions = {
				date : new Date(),
				showWeeks : false
			};
		$scope.fromDateopen = function() {
			$scope.fromDatePopup.opened = true;
		};
		
		$scope.fromDatePopup = {
				opened : false
			};
		
		
		$scope.toDateOptions = {
				date : new Date(),
				showWeeks : false
			};
		$scope.toDateopen = function() {
			$scope.toDatePopup.opened = true;
		};
		
		$scope.toDatePopup = {
				opened : false
			};
		
		
	});
	
	
})(angular);