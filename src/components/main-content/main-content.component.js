import style from './style.scss'

class MainContentController {

}

export default {
  controller: MainContentController,
  transclude: true,
  template: `
    <md-content layout-fill class="${style.mainContent}" ng-transclude></md-content>
  `
}
