import template from './schools.tpl.html';
import SchoolsCtrl from './schools.controller';

export default {
    template: template,
    controller: SchoolsCtrl,
    require: {
        overviewCtrl: '^overview'
    }
};
