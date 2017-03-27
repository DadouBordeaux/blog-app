/*
  App Config
*/

'use strict';

export function AppConfig($compileProvider, $urlMatcherFactoryProvider, $stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
  'ngInject';

  // Disable debug infos (ng-scope, etc...)
  $compileProvider.debugInfoEnabled(false);

  // Make optionnal langs works in url like: /, /..., /fr, /fr/, /fr/... works
  $urlMatcherFactoryProvider.strictMode(false);

  // Fallback url if someone try to access a wrong url
  $urlRouterProvider.otherwise('/');

  // Make clean angular url works - urls without #!
  $locationProvider.html5Mode(true);

  // States
  $stateProvider.state('app', {
      url: '/:lang',
      abstract: true,
      controller: class StateController {
        constructor($stateParams, $state, $translate) {
          'ngInject';
          console.log($translate.preferredLanguage());

          /*
            reroute si :
              - lang non choisie par visiteur
              &&
              - lang navigateur != lang default
          */
          let defaultLang = 'es';

          if ($stateParams.lang !== defaultLang && $translate.preferredLanguage() !== defaultLang) {
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
    });

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
    .fallbackLanguage('es')
    .determinePreferredLanguage()
    .useSanitizeValueStrategy('sanitize');
}
