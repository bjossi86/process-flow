webpackJsonp([0],[,,function(n,i){},function(n,i,t){n.exports={template:t(7),controller:function(){this.doDone=function(){}},bindings:{type:"<",description:"<",timespan:"<",optional:"<",index:"<",details:"<"}}},function(n,i,t){n.exports={template:t(8),controller:["$http",function(n){var i=this;n.get("assets/cards.json").then(function(n){i.cards=n.data})}]}},function(n,i){function t(n,i,t){t.html5Mode(!0).hashPrefix("!"),i.otherwise("/"),n.state("app",{url:"/",component:"app"})}t.$inject=["$stateProvider","$urlRouterProvider","$locationProvider"],n.exports=t},,function(n,i){n.exports='<div class="card-wrapper" ng-click="flipped=!flipped">\n    <div ng-init="done=false" class="card" ng-class="{\'flipped\': flipped}" style="width:200px">\n      <figure class="front" ng-class="{\'optional\': $ctrl.optional, \'done\': $ctrl.done}">\n          <span class="numbering">{{$ctrl.index}}</span>\n          <div ng-if="$ctrl.type === \'email\'" class="icon"><i class="fa fa-envelope-o" aria-hidden="true"></i></div>\n          <div ng-if="$ctrl.type === \'connect\'" class="icon"><i class="fa fa-plug" aria-hidden="true"></i></div>\n          <div ng-if="$ctrl.type === \'database\'" class="icon"><i class="fa fa-database" aria-hidden="true"></i></div>\n          <div ng-if="$ctrl.type === \'search\'" class="icon"><i class="fa fa-search" aria-hidden="true"></i></div>\n          <div ng-if="$ctrl.type === \'meeting\'" class="icon"><i class="fa fa-comments" aria-hidden="true"></i></div>\n          <div ng-if="$ctrl.type === \'testing\'" class="icon"><i class="fa fa-flask" aria-hidden="true"></i></div>\n\n          \x3c!-- No type selected --\x3e\n          <div ng-if="!$ctrl.type" class="icon"><i class="fa fa-cogs" aria-hidden="true"></i></div>\n\n          <div class="text-container">\n            <h4><b>{{$ctrl.description}}</b></h4>\n            <p ng-if="$ctrl.timespan">{{$ctrl.timespan}}</p>\n            <p ng-if="!$ctrl.timespan">?</p>\n          </div>\n      </figure>\n      <figure class="back">\n        <input type="checkbox" ng-model="$ctrl.done" ng-click="$event.stopPropagation();flipped = false">\n        <p class="text-container">\n            {{$ctrl.details}}\n        </p>\n      </figure>\n    </div>\n</div>'},function(n,i){n.exports='<div class="card-container">\n  <card\n      ng-repeat="card in $ctrl.cards"\n      index="card.index"\n      type="card.type"\n      description="card.description"\n      timespan="card.timespan"\n      optional="card.optional"\n      details="card.details">\n  </card>\n</div>'},function(n,i,t){var a=t(0),e=t(4),c=t(3);t(1);var s=t(5);t(2);n.exports="app",a.module("app",["ui.router"]).config(s).component("app",e).component("card",c)}],[9]);