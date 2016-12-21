import angular from 'angular'
import navMenuComponent from './nav-menu.component'
import navMenuItemComponent from './nav-menu-item.component'

export default angular
  .module('app.components.navMenu', [])
  .component('navMenu', navMenuComponent)
  .component('navMenuItem', navMenuItemComponent)
  .name
