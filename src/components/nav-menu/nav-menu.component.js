class NavMenuController {

}

export default {
  bindings: {},
  controller: NavMenuController,
  transclude: { item: 'navMenuItem' },
  template: `
    <md-list>
      <div ng-transclude="item"></div>
    </md-list>
  `
}
