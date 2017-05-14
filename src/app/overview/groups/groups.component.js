import template from './groups.tpl.html';

export default function groupsComponent() {
    return {
        template: template,
        controller: 'GroupsCtrl',
        require: {
            overviewCtrl: '^overview'
        }
    };
}
