(function() {
  'use strict'

  angular.module('app')
    .component('houseNew', {
      controller: function ($state, houseService) {
        const vm = this

        vm.$onInit = function () {
          vm.posts = postService.posts
        }

        vm.addHouse = function () {
          postService.addPost(vm.post)
          // TODO: go to the appropriate URL here
          $state.go('show-house', vm.house)
        }
      },
      template: `
        <h1>New House</h1>

        <form ng-submit="$ctrl.addHouse()">
          <p>
            Name: <input ng-model="$ctrl.house.name">
          </p>
          <p>
            Address: <input ng-model="$ctrl.house.address">
          </p>
          <p>
            <button type="submit">Create House</button>
          </p>
        </form>
      `
    })

}());
