class NavMenuItemController {

}

export default {
  require: '^navMenu',
  bindings: { item: '<', onItemClick: '&' },
  controller: NavMenuItemController,
  template: `
    <md-list-item ng-click="$ctrl.onItemClick($ctrl.item)">
      <md-icon class="material-icons" aria-label="{{$ctrl.item.title}}">{{$ctrl.item.icon}}</md-icon>
      <p class="md-body-2">{{$ctrl.item.title}}</p>
    </md-list-item>
  `
}
