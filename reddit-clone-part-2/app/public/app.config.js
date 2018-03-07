(function() {
 'use strict';

 angular.module('app').config(config)

 config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

 function config($stateProvider, $urlRouterProvider, $locationProvider){

   $locationProvider.html5Mode(true)

   $stateProvider
     .state({
       name: 'posts-list',
       url: '/',
       component: 'postsList',
     })
     .state({
       name: 'post-new',
       url: '/posts/new',
       component: 'postNew',
     })
     .state({
       name: 'post-comment',
       url: '/posts/comment',
       component: 'postComment',
     })
 }

}());
