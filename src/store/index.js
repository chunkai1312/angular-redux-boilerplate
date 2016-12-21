import angular from 'angular'
import ngRedux from 'ng-redux'
import ngReduxUiRouter from 'redux-ui-router'
import createSagaMiddleware from 'redux-saga'
import rootReducer from '../reducers'
import rootSaga from '../sagas'

const sagaMiddleware = createSagaMiddleware()

export default angular
  .module('app.store', [ngRedux, ngReduxUiRouter])
  .config(($ngReduxProvider) => {
    'ngInject'

    const middlewares = ['ngUiRouterMiddleware', sagaMiddleware]

    const storeEnhancers = []
    if (process.env.NODE_ENV === 'development' && window.devToolsExtension) {
      storeEnhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__())
    }

    $ngReduxProvider.createStoreWith(rootReducer, middlewares, storeEnhancers)
  })
  .run(($ngRedux, $rootScope, $timeout) => {
    'ngInject'

    sagaMiddleware.run(rootSaga)

    $ngRedux.subscribe(() => {
      $timeout(() => $rootScope.$apply(() => {}), 100)
    })
  })
  .name
