import angular from 'angular';
import fontColorComponent from '../components/font-color-component/font-color-component';
import themeCreatorComponent from '../components/theme-creator-component/theme-creator-component';
import MainTemplate from './main.tpl';
import './main.css!';

class MainController{
  /*@ngInject*/
  constructor(){
    this.fontSize = 16;
    this.fontColor = '#444444';
  }
}

export default angular
  .module('main', [
    MainTemplate.name,
    themeCreatorComponent.name,
    'themeCreatorFontColorComponentModule'])
  .config(['$stateProvider', function($stateProvider){
    $stateProvider.state('main', {
      url: '/main',
      templateUrl: MainTemplate.name,
      controller: 'MainController',
      controllerAs: 'ctrl'
    });
  }])
  .controller('MainController', MainController);
