"use strict";

(function(){
  angular
    .module("blitter", [
      "ui.router",
      "bleets"
    ])
    .config([
      "$stateProvider",
      RouterFunction
    ]);

    function RouterFunction($stateProvider){
      $stateProvider
      .state("bleetIndex", {
        url: "/bleets",
        templateUrl: "javascripts/bleets/index.html",
        controller: "BleetIndexController",
        controllerAs: "BleetIndexViewModel"
      })
      .state("bleetShow", {
        url: "/bleets/:id",
        templateUrl: "javascripts/bleets/show.html",
        controller: "BleetShowController",
        controllerAs: "BleetShowViewModel"
      })
      .state("bleetEdit", {
        url: "/edit/bleets/:id",
        templateUrl: "javascripts/bleets/edit.html",
        controller: "BleetEditController",
        controllerAs: "BleetEditViewModel"
      });
    }
})();
