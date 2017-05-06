function SchoolsCtrl(uuid4, School, ActiveCache) {

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

SchoolsCtrl.$inject = ['uuid4', 'School', 'ActiveCache'];
