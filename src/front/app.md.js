import angular from 'angular';
import angularSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';
import angularTranslate from 'angular-translate';
import angularTranslateLoaderStaticFiles from 'angular-translate-loader-static-files';
import { AppComponent } from './app.cp';
import './app.css';
import { AppConfig } from './app.config';
import { CommonModule } from './components/common/common.md';
import { HomeComponent } from './components/home/home.cp';
import './components/home/home.css';

export const AppModule = angular
    .module('app', [
        angularSanitize,
        uiRouter,
        angularTranslate,
        angularTranslateLoaderStaticFiles,
        CommonModule
    ])
    .component('app', AppComponent)
    .component('homeCp', HomeComponent)
    .config(AppConfig)
    // Disable debug infos (ng-scope, etc...)
    .name;
