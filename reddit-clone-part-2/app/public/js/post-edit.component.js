(function() {
  'use strict'

  angular.module('app')
    .component('postEdit', {
      controller: editPostController,
      // bindings: {
      //   editPost: '='
      // },

      templateUrl: 'templates/postEditTemplate.html'

    })

    editPostController.$inject = ['$http', postService]


    function editPostController ($http, postService) {
      const vm = this
      vm.post = postService.post
      vm.newPost;

      vm.editPost = function () {

        console.log(vm.post, 'PASS POST EDIT POST FUNCTION');

        // let postId = vm.editPost.id
        // console.log(postId, 'POST ID IN THE EDIT')
        postService.editPost(vm.post)



        //postService.addPost(vm.post)
        vm.newPost = !vm.newPost
      }
    }

}());
