angular.module('overview').component('schools', {
    templateUrl: "app/overview/schools/schools.tpl.html",
    controller: ['uuid4', 'School', 'ActiveCache',
        function (uuid4, School, ActiveCache) {

            this.$onInit = function () {
                this.schools = School.query({}, () => {
                    if (ActiveCache.school) {
                        this.active.school = ActiveCache.school;
                    }
                });
            };

            this.addSchool = function () {
                this.schools.$resolved = false;
                let school = new School({
                    id: uuid4.generate(),
                    name: 'Νεο σχολείο'
                });
                //TODO: this.setActiveSchool(null);
                school.$save({}, () => {
                    this.schools = School.query();
                });
            };
        }
    ]
});
