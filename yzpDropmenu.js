var app=angular.module('yzpDropmenu',[]);
app.directive('yzpDropmenu',function(){
	return{
		scope:{
			name:'@',
			items:'='
		},
		template:'<div><button ng-mouseover="toggleList()">{{name}}</button><drop-list></drop-list></div>',
		link:function(scope){
			scope.toggleList=function(){
				scope.isShow=!scope.isShow;
			}
		}

	}
});
app.directive('dropList',function(){
	return{
		template:'<ul ng-if="isShow" ng-mouseleave="toggleList()"><li ng-repeat="x in items">{{x}}</li></ul>'
	}
});
