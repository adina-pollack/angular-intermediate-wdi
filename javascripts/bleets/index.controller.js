"use strict";

(function(){
  angular
    .module("bleets")
    .controller("BleetIndexController", [
      "BleetFactory",
      "$state",
      BleetIndexControllerFunction
    ]);

    function BleetIndexControllerFunction(BleetFactory, $state){
      this.bleets = BleetFactory.query();
      this.bleet = new BleetFactory();
      this.create = function(){
        console.log("hi")
        this.bleet.$save().then(function(response){
          $state.go("bleetShow", ({id: response.id}));
        })
      }
      this.destroy = function(bleet){
        this.bleet.$delete({id: bleet.id}).then(function(response){
          $state.go("bleetIndex")
        })
      }
    }
})();
