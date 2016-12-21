import angular from 'angular'
import counterComponent from './counter.component'

export default angular
  .module('app.containers.counter', [])
  .component('counter', counterComponent)
  .name
