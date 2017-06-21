import template from './groups.tpl.html';
import GroupsCtrl from './groups.controller';

export default {
    template: template,
    controller: GroupsCtrl,
    require: {
        overviewCtrl: '^overview'
    }
};
