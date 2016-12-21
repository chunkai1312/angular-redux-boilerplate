class AppBarController { }

export default {
  transclude: true,
  bindings: { pageTitle: '@', backButton: '<', onMenuButtonClick: '&', onBackButtonClick: '&' },
  controller: AppBarController,
  template: `
    <md-toolbar layout="row" class="md-whiteframe-z2">
      <div class="md-toolbar-tools">
        <md-button class="md-icon-button" aria-label="Menu" 
            ng-click="$ctrl.onMenuButtonClick()" ng-if="!$ctrl.backButton" hide-gt-sm>
          <md-icon>menu</md-icon>
        </md-button>
        <md-button class="md-icon-button" aria-label="Back" 
            ng-click="$ctrl.onBackButtonClick()" ng-if="$ctrl.backButton">
          <md-icon>arrow_back</md-icon>
          <md-tooltip md-direction="bottom">Back</md-tooltip>
        </md-button>
        <h1>{{$ctrl.pageTitle}}</h1>
        <span flex></span>
        <span ng-transclude></span>
      </div>
    </md-toolbar>
  `
}
