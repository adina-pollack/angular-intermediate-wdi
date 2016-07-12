"use strict";

(function(){
  angular
    .module("bleets")
    .controller("BleetEditController", [
      "BleetFactory",
      "$stateParams",
      "$state",
      BleetEditControllerFunction
    ]);

    function BleetEditControllerFunction(BleetFactory, $stateParams, $state){
      this.bleet = BleetFactory.get({id: $stateParams.id})
      this.update = function(){
        this.bleet.$update({id: $stateParams.id}).then(function(response){
          $state.go("bleetShow", ({id: response.id}));
      })
    }
  }
})();
