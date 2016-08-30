;(function(angular){
	"use Strict";
	angular.module("mainapp", ['ngStorage', 'base64', 'ui.bootstrap', 'jcs-autoValidate'])
	.controller("indexcontroller", function($scope, $http, $base64, $localStorage, $sessionStorage, $window){
		$scope.login = {};
		$scope.onload = function()
		{
		}
		
		$scope.logn = function(login)
		{
			var pwd = $base64.encode($scope.login.Passwod);
			$scope.login.Passwod = pwd;
				
   				
			var request = $http.post('php/logincall.php', { "username" : $scope.login.UserName, "password": $scope.login.Passwod})

			request.success(function (data, status, headers, config) {
   				 if(data.length > 0)
   				 {
   				 	$scope.dtaa = JSON.stringify(data);
   				 	sessionStorage.setItem("result", $scope.dtaa);
   				 	location.href="views/home/home.html";
   				 }
   				 else
   				 {
   				 	$scope.wrongcred = true;
   				 }
   				 /*$sessionStorage.SessionMessage = "SRINIVAS Polishetty";*/
   				 /*$localStorage.LocalMessage = data;
                alert($localStorage.LocalMessage);*/
   				 
			});	
			response.error(function(data, status, headers, config){
  				alert("ERROR");  
  		  	});		

			
		}


		
	});
	
	
})(angular);