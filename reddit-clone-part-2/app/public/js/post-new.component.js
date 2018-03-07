(function() {
  'use strict'

  angular.module('app')
    .component('postNew', {
      bindings: {
        addedPost: '=',
        onSubmit: '&',
      },
      controller: newPostController,
      templateUrl: '/templates/postTemplate.html'
    })

    newPostController.$inject = ['$http', postService]

    function newPostController ($http, postService) {
      const vm = this
      vm.newPost;

      vm.$onInit = function () {
      //  vm.posts = postService.posts
      }


      vm.addPost = function () {
        postService.addPost(vm.post)
        .then(function(posts) {
          // vm.submit = function (posts) {

            vm.onSubmit({addedPost: posts});
  console.log('helloooooooooooooo')
})
              // vm.posts = posts
              // submit(vm.posts)
              // console.log(vm.posts, 'YAY POSTS')
        }





        //postService.addPost(vm.post)
        vm.newPost = !vm.newPost
      }


}());
