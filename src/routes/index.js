import angular from 'angular'
import uiRouter from 'angular-ui-router'
import app from './app'
import home from './home'
import about from './about'

export default angular
  .module('app.routes', [uiRouter, app, home, about])
  .config(($locationProvider, $stateProvider, $urlRouterProvider) => {
    'ngInject'

    $locationProvider.html5Mode(true)

    $stateProvider
      .state('app', {
        name: 'app',
        component: 'app',
        abstract: true
      })
      .state('home', {
        parent: 'app',
        name: 'home',
        url: '/',
        component: 'home'
      })
      .state('about', {
        parent: 'app',
        name: 'about',
        url: '/about',
        component: 'about'
      })

    $urlRouterProvider.otherwise('/')
  })
  .name
