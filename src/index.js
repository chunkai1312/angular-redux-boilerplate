import 'babel-polyfill'
import angular from 'angular'
import components from './components'
import containers from './containers'
import routes from './routes'
import store from './store'

angular
  .module('app', [components, containers, routes, store])
  .component('root', { template: '<ui-view />' })
