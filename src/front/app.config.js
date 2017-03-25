/*
App Config
*/

'use strict';

export function AppConfig($compileProvider, $urlMatcherFactoryProvider, $stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
  'ngInject';

  // Disable debug infos (ng-scope, etc...)
  $compileProvider.debugInfoEnabled(false);

  // Make /, /fr, /fr/, /fr/... works
  $urlMatcherFactoryProvider.strictMode(false);

  $stateProvider
    .state('app', {
      url: '/:lang',
      abstract: true,
      controller: class StateController {
        constructor($stateParams, $state, $translate) {
          'ngInject';
          console.log($translate.preferredLanguage());

          if ($stateParams.lang !== 'en') {
            //$stateParams.lang = 'fr';
            //$state.go('app.header');
          }
          console.log($stateParams);
        }
      },
      params: {
        lang: {
          squash: true,
          value: null
        }
      },
      template: '<app></app>'
    })
    .state('app.index', {
      url: '',
      template: '<home-cp></home-cp>'
    })
    .state('app.header', {
      url: '/header',
      template: '<header-cp></header-cp>'
    })
  $urlRouterProvider.otherwise('/');
  $locationProvider.html5Mode(true);

  // Use JSON files for translations
  $translateProvider.useStaticFilesLoader({
      prefix: './translations/lang_',
      suffix: '.json'
    })
    .registerAvailableLanguageKeys(['fr', 'en', 'es'], {
      'fr*': 'fr',
      'en*': 'en',
      'es*': 'es',
      '*': 'fr'
    })
    .fallbackLanguage('fr')
    .determinePreferredLanguage()
    .useSanitizeValueStrategy('sanitize');
}
