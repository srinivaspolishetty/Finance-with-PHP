;(function(angular) {

    "use strict";

    angular.module('commonmodule', ['menumodule', 'headermodule',  'addtrancmod', 'viewmodule', 'dashboardmodule'])
            .config(['$stateProvider', '$urlRouterProvider',  function($stateProvider,  $urlRouterProvider) {
            
                $urlRouterProvider.otherwise("/dashboard"); 
                
                $stateProvider

                   
                .state('dashboardmodule', {
                    url: "/dashboard",
                    templateUrl: "../dashboard/dashboard.html",            
                    controller: "homecontroller"  
                })
                
                
                
                .state('addtrancmod', {
                    url: "/addtranc",
                    templateUrl: "../addtranc/addtranc.html",            
                    controller: "addtranc"  
                })
                
                
                .state('viewmodule', {
                    url: "/viewdetails",
                    templateUrl: "../viewdetails/viewdetails.html",            
                    controller: "viewdetailscontroller"  
                })


            }]) 
             

})(angular);