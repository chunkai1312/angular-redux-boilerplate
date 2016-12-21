import angular from 'angular'
import ngAnimate from 'angular-animate'
import ngAria from 'angular-aria'
import ngMaterial from 'angular-material'
import ngMessages from 'angular-messages'

import appBar from './app-bar'
import appTitleBar from './app-title-bar'
import navMenu from './nav-menu'
import mainContent from './main-content'

import 'angular-material/angular-material.css'

export default angular
  .module('app.components', [
    ngAnimate, ngAria, ngMaterial, ngMessages,
    appBar, appTitleBar, navMenu, mainContent
  ])
  .name
