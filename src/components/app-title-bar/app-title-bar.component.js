import style from './style.scss'

class AppTitleBarController { }

export default {
  transclude: true,
  bindings: { appTitle: '@', appIcon: '@', onAppIconClick: '&' },
  controller: AppTitleBarController,
  template: `
    <md-toolbar class="md-whiteframe-z2"">
      <div class="md-toolbar-tools">
        <div class="${style.appIcon}" layout="row" layout-align="start center" ng-click="$ctrl.onAppIconClick()" flex>
          <img ng-src="{{$ctrl.appIcon}}" alt="App Icon">
          <span>{{$ctrl.appTitle}}</span>
        </div>
      </div>
    </md-toolbar>
  `
}
