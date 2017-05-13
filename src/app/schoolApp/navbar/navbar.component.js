import template from './navbar.tpl.html';

export default function navbarComponent() {
    return {
        template: template,
        controller: 'NavbarCtrl'
    }
}
