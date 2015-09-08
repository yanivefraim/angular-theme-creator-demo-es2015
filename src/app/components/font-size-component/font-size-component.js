import angular from 'angular';

export default angular
  .module('themeCreatorFontSizeComponentModule', [])
  .directive('fontSizeComponent', function() {
    return {
      template: `<input id="fontSize" class="form-control" name="fontSize" ng-model="ctrl.fontSize" ng-change="ctrl.modelChanged()"/>
`,
      scope: {
        fontSize: "@",
        fontSizeChanged: "&"
      },
      bindToController: true,
      controllerAs: 'ctrl',
      controller: FontSizeComponent
    };
  });

class FontSizeComponent {
  /* @ngInject */
  constructor() {
  }

  modelChanged() {
    this.fontSizeChanged({fontSize: this.fontSize});
  }
}

