import angular from 'angular';
import template from './theme-preview-panel-component.tpl';

class ThemePreviewPanelComponent {
  /* @ngInject */
  constructor($scope, $interpolate) {
    let style = "font-family: {{ctrl.fontFamily}}; color: {{ctrl.fontColor}}; font-size: {{ctrl.fontSize}}px;";
    $scope.$watch('ctrl.fontSize + ctrl.fontColor + ctrl.fontFamily', () => {
      this.styleProp = $interpolate(style)($scope);
    });
  }
}

export default angular
.module('themePreviewPanelComponentModule', [template.name])
  .directive('themePreviewPanelComponent', function() {
    return {
      templateUrl: template.name,
      scope: {
        fontSize: '@',
        fontColor: '@',
        fontFamily: '@'
      },
      bindToController: true,
      controller: ThemePreviewPanelComponent,
      controllerAs: 'ctrl'
    };
  });
