import { bindActionCreators } from 'redux'
import * as actions from 'actions'
import appIcon from 'static/angular-logo.svg'

class AppController {
  /* @ngInject */
  constructor ($ngRedux, $scope, $state, $mdSidenav) {
    const unsubscribe = $ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis)(this)
    $scope.$on('$destroy', unsubscribe)

    this.$mdSidenav = $mdSidenav
  }

  handleToggleNavDrawer () {
    this.$mdSidenav('nav-drawer').toggle()
  }

  handleClickBackButton () {
    // this.$mdSidenav('nav-drawer').toggle()
    this.actions.clickBackButton()
  }

  handleMenuItemClick (menuItem) {
    if (!this.$mdSidenav('nav-drawer').isLockedOpen()) {
      this.$mdSidenav('nav-drawer').toggle()
    }
    this.actions.clickMenuItem(menuItem)
  }

  handleAppIconClick = () => {
    this.$mdSidenav('nav-drawer').toggle()
    this.actions.backToHome()
  }

  mapStateToThis = (state) => ({
    appLayout: state.appLayout
  })

  mapDispatchToThis = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
}

export default {
  bindings: { },
  controller: AppController,
  template: `
    <div layout="row" layout-fill>
      <md-sidenav
        md-component-id="nav-drawer"
        md-is-locked-open="$mdMedia('gt-sm')"
        class="md-whiteframe-z2"
      >
        <app-title-bar
          app-title="{{$ctrl.appLayout.appTitle}}"
          app-icon="${appIcon}"
          on-app-icon-click="$ctrl.handleAppIconClick()">
        </app-title-bar>
        <md-content>
          <nav-menu>
            <nav-menu-item
              ng-repeat="menuItem in $ctrl.appLayout.navMenuItems track by $index"
              item="menuItem"
              on-item-click="$ctrl.handleMenuItemClick(menuItem)"
              class="active">
            </nav-menu-item>
          </nav-menu>
        </md-content>
      </md-sidenav>
      <div flex layout="column">
        <app-bar
          page-title="{{$ctrl.appLayout.pageTitle}}"
          back-button="$ctrl.appLayout.backButton.active"
          on-menu-button-click="$ctrl.handleToggleNavDrawer()"
          on-back-button-click="$ctrl.handleClickBackButton()">
        </app-bar>
        <ui-view flex></ui-view>
      </div>
    </div>
  `
}
