export default class SchoolsCtrl {

    constructor(uuid4, School, ActiveCache) {
        Object.assign(this, {
            uuid4,
            School,
            ActiveCache
        })
    }

    $onInit() {
        this.overviewCtrl.schools = this.School.query();
    }

    showSchools() {
        return this.schoolsResolved() &&
            this.hasSchools();
    }

    schoolsResolved() {
        return this.overviewCtrl.schools.$resolved;
    }

    hasSchools() {
        return this.overviewCtrl.schools.length > 0;
    }

    setActiveSchool(school) {
        this.overviewCtrl.setActiveSchool(school);
    }

    isActiveSchool(school) {
        if (this.ActiveCache.school) {
            return school.id === this.ActiveCache.school.id;
        }
    }

    addSchool() {
        this.overviewCtrl.schools.$resolved = false;
        let school = new this.School({
            id: this.uuid4.generate(),
            name: 'Νεο σχολείο'
        });
        school.$save({}, () => {
            this.setActiveSchool(school);
            this.overviewCtrl.schools = this.School.query();
        });
    }
}

SchoolsCtrl.$inject = ['uuid4', 'School', 'ActiveCache'];
