var app=angular.module("AngularApp",[]);app.controller("AngularAppController",["$scope",function(e){e.name="Ahsan Ahmed",e.message="This Message is Generated via Angular JS which means the Angular JS is working Correctly"}]),app.directive("customDirective",[function(){return{restrict:"EA",scope:{name:"="},templateUrl:"./assets/html/customDirective.html",controller:function(e){}}}]);