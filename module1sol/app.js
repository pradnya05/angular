(function(){
'use strict';

   angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController);
LunchCheckController.$inject=['$scope'];
function LunchCheckController($scope)
{
	$scope.lunch='';
	$scope.ans='';
	$scope.check=false;
	$scope.checklunch=function(){
		if($scope.lunch.trim().length==0){
			$scope.empty=true;
			$scope.ans='please enter data first!'
		}
		else{
			$scope.check=true;
			$scope.empty=false;
			var arraylunch=$scope.lunch.split(',');
			//console.log(arraylunch);
			//var arraylunchwithoutempty=arraylunch.filter(function(v){
			//	return v.trim()!=='';
			//});
			console.log(arraylunch);
			if (arraylunch.length<=3){
				$scope.ans='Enjoy!';
			}
			else{
				$scope.ans='Too much!';
			}

		}
	};
}

	})();