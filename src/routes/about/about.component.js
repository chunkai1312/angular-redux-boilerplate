import { bindActionCreators } from 'redux'
import * as actions from 'actions'

class AboutController {
  /* @ngInject */
  constructor ($ngRedux, $scope) {
    const unsubscribe = $ngRedux.connect(this.mapStateToThis, this.mapDispatchToThis)(this)
    $scope.$on('$destroy', unsubscribe)
  }

  $onInit () {
    this.actions.toggleBackButton()
  }

  $onDestroy () {
    this.actions.toggleBackButton()
  }

  mapStateToThis = (state) => ({
    appLayout: state.appLayout
  })

  mapDispatchToThis = (dispatch) => ({
    actions: bindActionCreators(actions, dispatch)
  })
}

export default {
  controller: AboutController,
  template: `
    <main-content>

    </main-content>
  `
}
