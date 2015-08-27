import angular from 'angular';
import template from './theme-creator-component.tpl'
import themeEditor from '../theme-editor-panel-component/theme-editor-panel-component';
import themePreview from '../theme-preview-panel-component/theme-preview-panel-component';

class ThemeCreatorComponent {
  /* @ngInject */
  constructor() {
  }

  onFontSizeChange(fontSize) {
    this.fontSize = fontSize;
  }

  onFontColorChange(fontColor) {
    this.fontColor = fontColor;
  }

  onFontFamilyChange(fontFamily) {
    this.fontFamily = fontFamily;
  }
}

export default angular
  .module('themeCreatorComponentModule', [template.name, themeEditor.name, themePreview.name])
  .directive('themeCreatorComponent', function() {
    return {
      templateUrl: template.name,
      scope: {
        fontSize: '@',
        fontColor: '@',
        fontFamily: '@'
      },
      bindToController: true,
      controllerAs: 'ctrl',
      controller: ThemeCreatorComponent
    };
  });
