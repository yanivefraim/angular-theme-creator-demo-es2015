import angular from 'angular';
import fontColorComponent from '../components/font-color-component/font-color-component';
import themeCreatorComponent from '../components/theme-creator-component/theme-creator-component';
import LoginTemplate from './login.tpl';
import './login.css!';

class LoginController{
  /*@ngInject*/
  constructor(){
    this.fontSize = 16;
    this.fontColor = '#444444';
  }
}

export default angular
  .module('login', [
    LoginTemplate.name,
    themeCreatorComponent.name,
    'themeCreatorFontColorComponentModule'])
  .config(['$stateProvider', function($stateProvider){
    $stateProvider.state('login', {
      url: '/login',
      templateUrl: LoginTemplate.name,
      controller: 'LoginController',
      controllerAs: 'ctrl'
    });

    $stateProvider.state('login.signup', {
      url: '/login/signup',
      templateUrl: 'app/login/signup.tpl.html'
    });
  }])
  .controller('LoginController', LoginController);
