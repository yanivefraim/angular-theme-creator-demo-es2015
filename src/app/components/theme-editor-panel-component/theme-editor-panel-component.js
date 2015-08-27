import angular from 'angular';
import template from './theme-editor-panel-component.tpl';
import fontSizeComponent from '../font-color-component/font-color-component';

class ThemeEditorPanelComponent {
  /* @ngInject */
  constructor() {
  }
  onFontSizeChangeEvent(fontSize) {
    this.onFontSizeChange({fontSize: fontSize});
  }

  onFontColorChangeEvent(fontColor) {
    this.onFontColorChange({fontColor: fontColor});
  }

  onFontFamilyChangeEvent(fontFamily) {
    this.onFontFamilyChange({fontFamily: fontFamily});
  }
}

export default angular
  .module('themeEditorPanelComponentModule', [template.name, 'themeCreatorFontSizeComponentModule', 'themeCreatorFontColorComponentModule', 'themeCreatorFontFamilyComponentModule'])
  .directive('themeEditorPanelComponent', function() {
    return {
      templateUrl: template.name,
      scope: {
        fontSize: '@',
        fontFamily: '@',
        fontColor: '@',
        onFontColorChange: '&',
        onFontSizeChange: '&',
        onFontFamilyChange: '&'
      },
      bindToController: true,
      controller: ThemeEditorPanelComponent,
      controllerAs: 'ctrl'
    };
  });
