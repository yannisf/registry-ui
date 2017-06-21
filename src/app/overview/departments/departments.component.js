import template from './departments.tpl.html';
import DepartmentsCtrl from './departments.controller';

export default {
    template: template,
    controller: DepartmentsCtrl,
    require: {
        overviewCtrl: '^overview'
    }
};
