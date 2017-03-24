// importation header.html
import template from './header.html';

export const HeaderComponent = {
    template,
    controller: class HeaderComponent {
        constructor() {
            'ngInject';
        }
    }
};
