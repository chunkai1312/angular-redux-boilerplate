import angular from 'angular'
import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'

import 'angular-material/angular-material.css'

export default angular
  .module('app.core', [
    ngAnimate,
    ngAria,
    ngMaterial,
    ngMessages
  ])
  .config(($locationProvider) => {
    'ngInject'

    if (process.env.NODE_ENV !== 'development') {
      $locationProvider.html5Mode(true)
    } else {
      $locationProvider.hashPrefix('!')
    }
  })
  .name
