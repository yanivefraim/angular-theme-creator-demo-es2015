import angular from 'angular';
import template from './font-size-component.tpl'

class FontSizeComponent {
  /* @ngInject */
  constructor() {
  }

  fontSizeChangedEvent() {
    this.fontSizeChanged({fontSize: this.fontSize});
  }
}

export default angular
  .module('themeCreatorFontSizeComponentModule', [template.name])
  .directive('fontSizeComponent', function() {
    return {
      templateUrl: template.name,
      scope: {
        fontSize: "@",
        fontSizeChanged: "&"
      },
      bindToController: true,
      controllerAs: 'ctrl',
      controller: FontSizeComponent
    };
  });
