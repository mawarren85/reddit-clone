(function() {
  //  'use strict'

  angular.module('app')
    .service('postService', service)

  service.$inject = ['$http']

  function service($http) {

    this.getPosts = function() {
      return $http.get(`/api/posts`)
        .then(function(response) {
          const posts = response.data
          return posts;
        })
    }

    this.addPost = function (post) {
      return $http.post(`/api/posts`, post)
      .then(function() {
        return $http.get(`/api/posts`)
        .then(function(response) {
          const posts = response.data
          console.log(posts, 'this is posts in service')
            return posts;
        })
      })
    }

    this.deletePost = function (post) {
      console.log(post, 'DELETE IN SERVICE')
      let id = post.id
      return $http.delete(`/api/posts/${id}`).then(function() {
        return $http.get(`/api/posts`).then(function(results){
          const posts = results.data
          console.log('I WIN')
          return posts;
        })
      })
    }

    this.editPost = function (post) {
      console.log(post, 'POST IN THE EDIT')
      let id = post.id
      return $http.patch(`/api/posts/${id}`, post).then(function(response) {
      return $http.get(`/api/posts`).then(function(response) {
          const posts = response.data
          console.log('YOU PATCHED AND GOT')

          //  postService.setPost(vm.posts)
          // vm.posts = response.data
          // console.log(response.data, 'I GOT')
        })
      })
    }

    this.addLike = function (post) {
      let postId = post.id

      return $http.post(`/api/posts/${postId}/votes`, post).then(function() {
        return $http.get(`/api/posts`).then(function(results){
          const posts = results.data
          return posts;
        })
      })
    }

    this.subtractLike = function (post) {
      let postId = post.id

      return $http.delete(`/api/posts/${postId}/votes`, post).then(function() {
        return $http.get(`/api/posts`).then(function(results){
          const posts = results.data
          return posts;
        })
      })
    }


    this.setPost = function(posts) {
      this.posts = posts
    }

    this.passPost = function(post) {
      console.log(post, 'POST IN THE SERVICE')
      this.post = post;
    }

  }

}());
