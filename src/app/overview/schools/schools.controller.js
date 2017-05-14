export default function SchoolsCtrl(uuid4, School, ActiveCache) {

    this.$onInit = function () {
        this.overviewCtrl.schools = School.query();
    };

    this.showSchools = function () {
        return this.schoolsResolved() &&
            this.hasSchools();
    }

    this.schoolsResolved = function () {
        return this.overviewCtrl.schools.$resolved;
    }

    this.hasSchools = function () {
        return this.overviewCtrl.schools.length > 0;
    }

    this.setActiveSchool = function (school) {
        this.overviewCtrl.setActiveSchool(school);
    };

    this.isActiveSchool = function (school) {
        if (ActiveCache.school) {
            return school.id === ActiveCache.school.id;
        }
    }

    this.addSchool = function () {
        this.overviewCtrl.schools.$resolved = false;
        let school = new School({
            id: uuid4.generate(),
            name: 'Νεο σχολείο'
        });
        school.$save({}, () => {
            this.setActiveSchool(school);
            this.overviewCtrl.schools = School.query();
        });
    };
}

SchoolsCtrl.$inject = ['uuid4', 'School', 'ActiveCache'];
