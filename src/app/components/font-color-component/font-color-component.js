import angular from 'angular';
import template from './font-color-component.tpl'

class FontColorComponent {
  /* @ngInject */
  constructor() {
  }

  modelChanged() {
    this.fontColorChanged({fontColor: this.fontColor});
  }
}

export default angular
  .module('themeCreatorFontColorComponentModule', [template.name])
  .directive('fontColorComponent', function() {
    return {
      templateUrl: template.name,
      scope: {
        fontColor: '@',
        fontColorChanged: '&'
      },
      bindToController: true,
      controllerAs: 'ctrl',
      controller: FontColorComponent
    };
  });
