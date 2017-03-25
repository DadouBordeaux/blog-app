/*
Common Module
*/

'use strict'

import angular from 'angular';
import {
  HeaderComponent
} from './header/header.cp';
import './header/header.css';
import {
  FooterComponent
} from './footer/footer.cp';
import './footer/footer.css';

export const CommonModule = angular
  .module('common', [

  ])
  .component('headerCp', HeaderComponent)
  .component('footerCp', FooterComponent)
  .name;
