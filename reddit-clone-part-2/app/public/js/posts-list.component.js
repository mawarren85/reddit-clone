(function() {
  'use strict'

  angular.module('app')
    .component('postsList', {
      bindings: {
        addedPost: '=',
        onSubmit: '&',
        editPost: '<'
      },
      controller: listController,
      templateUrl: '/templates/postsTemplate.html'
    });


  listController.$inject = ['$http', postService, '$scope'];

  function listController($http, postService, $scope) {
    const vm = this;

    var newPost;
    var newComment;
    var commentsList;


    vm.$onInit = function() {
      postService.getPosts()
      .then(function(posts) {
        vm.posts = posts;
      });
    };

    vm.updatedPosts = function(posts) {
      vm.posts = posts;
    };

    vm.posts;
    vm.newPost = false;
    vm.editPost = false;
    vm.newComment = false;
    vm.toggleComments = false;
    vm.post;
    vm.addCommentPost;
    vm.showEditPost;
    vm.optionName;
    vm.sortType = 'title'


    vm.showNewForm = function() {
      console.log('meow')
      vm.newPost = !vm.newPost;
    }

    vm.refreshPosts = function(addedPost) {
      console.log('yasssssssssss??')
      vm.posts = addedPost
    }
    vm.deletePost = function (post) {
      postService.deletePost(post)
      .then(function(posts) {
        vm.posts = posts;
      })

    }

    vm.showEditForm = function(post) {
      console.log(post, 'POST IN SHOW EDIT')
      vm.showEditPost = post
      vm.editPost = !vm.editPost
      postService.passPost(post)
    }


    vm.showAddComment = function(post) {
      vm.addCommentPost = post
      vm.newComment = !vm.newComment;
    }


    vm.showComments = function(post) {
      vm.post = post
      vm.toggleComments = !vm.toggleComments
    }

    vm.addComment = function(post) {

      vm.post = post
      vm.newComment = !vm.newComment;

      let postId = post.id
      post.content = post.content

      $http.post(`/api/posts/${postId}/comments`, post)
        .then(function() {
          $http.get(`/api/posts`).then(function(response) {
            console.log(response.data, 'RESPONSE DATA IN POST COMMENT')
            vm.posts = response.data
          })
        })
    }


    vm.addLike = function(post) {
      postService.addLike(post)
      .then(function(posts) {
        vm.posts = posts
      })
    }


    vm.subtractLike = function(post) {
      postService.subtractLike(post)
      .then(function(posts) {
        vm.posts = posts
      })
    }


    vm.sort = function(optionName) {
      console.log('helo');
      if (optionName == 'Likes') {
        vm.sortType = 'vote_count'
      } else {
        vm.sortType = optionName
        console.log(vm.sortType, 'SORT TYPE')
      }
    }

    vm.optionNames = [{
      label: 'Title'
    }, {
      label: 'Author'
    }, {
      label: 'Likes'
    }]



  }

}());
