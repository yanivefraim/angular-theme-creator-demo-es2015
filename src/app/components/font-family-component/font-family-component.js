import angular from 'angular';
import template from './font-family-component.tpl'

class FontFamilyComponent {
  /* @ngInject */
  constructor() {
    this.fonts = ['Helvetica','Ariel', 'fantasy','cursive'];
  }

  fontFamilyChangedEvent() {
    this.fontFamilyChanged({fontFamily: this.fontFamily});
  }
}

export default angular
  .module('themeCreatorFontFamilyComponentModule', [template.name])
  .directive('fontFamilyComponent', function() {
    return {
      templateUrl: template.name,
      scope: {
        fontFamily: "@",
        fontFamilyChanged: "&"
      },
      bindToController: true,
      controllerAs: 'ctrl',
      controller: FontFamilyComponent
    };
  });
