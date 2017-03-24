'use strict';

// Create app.config module
import { AppConfig } from './routes';

export const ConfigModule = angular.module('config', [])
    .config('AppConfig', AppConfig)
    .name;
