'use strict';

// Create Angular config for app.config module

export function AppConfig($compileProvider, $stateProvider, $urlRouterProvider, $locationProvider, $translateProvider) {
        'ngInject';

        $compileProvider.debugInfoEnabled(false);

        $stateProvider
                .state('app', {
                    url: '/{lang}',
                    abstract: true,
                    controller: class StateController {
                        constructor($stateParams, $state, $translate) {
                            'ngInject';
                            console.log($translate.preferredLanguage());

                            if($stateParams.lang !== 'en') {
                                $stateParams.lang = 'fr';
                                $state.go('app.header');
                            }
                            console.log($stateParams);
                        }
                    },
                    params: {
                        lang: { squash: true, value: null}
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

            // Use JSON Files
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
