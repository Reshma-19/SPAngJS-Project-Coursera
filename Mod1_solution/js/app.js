'use strict';
(function(){

var app =angular.module('LunchCheck',[]);
app.controller('LunchCheckController',function($scope){
$scope.msg="";
$scope.items="";
$scope.checkItems=function(){
    if($scope.items==""){
      $scope.msg='Please enter data first';
     return;
    }
    else{
      var listLen=textItems($scope.items);
      if(listLen == 0||$scope.items==" "){ $scope.msg='Empty!'; }
      else  if(listLen<=3){
            $scope.msg='Enjoy!';
          }
      else{
          $scope.msg='Too much!';
        }
     }
  };
function textItems(string){
	var StringArray = string.split(",");
	console.log(StringArray);
	return StringArray.length;
}
})
})();
