import angular from 'angular';
import template from './theme-editor-panel-component.tpl';
import fontColorComponent from '../font-color-component/font-color-component';
import fontSizeComponent from '../font-size-component/font-size-component';
import fontFamilyComponent from '../font-family-component/font-family-component';

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
.module('themeEditorPanelComponentModule', [template.name, fontColorComponent.name, fontSizeComponent.name, fontFamilyComponent.name])
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
