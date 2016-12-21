import * as actions from 'actions/counter'

class CounterController {
  /* @ngInject */
  constructor ($ngRedux, $scope) {
    const unsubscribe = $ngRedux.connect(this.mapStateToThis, actions)(this)
    $scope.$on('$destroy', unsubscribe)
  }

  handleIncrement () {
    this.increment()
  }

  handleDecrement () {
    this.decrement()
  }

  handleIncrementAsync () {
    this.incrementAsync()
  }

  mapStateToThis (state) {
    const { counter } = state
    return { counter }
  }
}

export default {
  controller: CounterController,
  template: `
    <md-card>
      <md-card-content>
        <span>Counter: {{$ctrl.counter}}</span>
      </md-card-content>
      <md-card-actions>
        <md-button class="md-primary" ng-click="$ctrl.handleIncrement()">Inrement</md-button>
        <md-button class="md-accent" ng-click="$ctrl.handleDecrement()">Derement</md-button>      
        <md-button ng-click="$ctrl.handleIncrementAsync()">Inrement Async</md-button>
      </md-card-actions>
    </md-card>
  `
}
