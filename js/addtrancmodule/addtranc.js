;(function(angular){
	"use Strict";
	angular.module("addtrancmod", ['ui.bootstrap', 'jcs-autoValidate'])
	.controller('addtranc',function($scope, $http){
		$scope.addtrancfield = {};
		$scope.obj={};
		$scope.onload = function()
		{
			$scope.pagename = "ADD Transaction Page";
		}
		
		$scope.DateFormat = 'dd/MMMM/yyyy';
		
		$scope.trancDateOptions = {
				date : new Date(),
				showWeeks : false
			};
		$scope.trancDateopen = function() {
			$scope.trancDatePopup.opened = true;
		};
		
		$scope.trancDatePopup = {
				opened : false
			};
		
		
		
		
		$scope.addtranc = function(addtrancfield)
		{
			alert(JSON.stringify(addtrancfield));
		}
		
		
		$scope.insrt = function()
		{
			var response = $http.get('/FinanceWS/getAllUsers');
			response.success(function(data, headers, status,
					config) {
				alert('success');
			});
			response.error(function(data, status, headers, config){
  			alert('failure');
  		  });
		}
		
	});
	
	
})(angular);