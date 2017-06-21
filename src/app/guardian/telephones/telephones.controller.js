export default class TelephonesCtrl {

    constructor(uuid4, ListSvc) {
        Object.assign(this, {
            uuid4,
            ListSvc
        });
    }

    $onInit() {
        this.ListSvc.telephoneTypes().then((data) => this.telephoneTypes = data);
    }

    addTelephone() {
        let telephone = {
            id: this.uuid4.generate()
        };
        this.model.push(telephone);
    }

    removeTelephone(telephoneIndex) {
        this.model.splice(telephoneIndex, 1);
    }

}

TelephonesCtrl.$inject = ['uuid4', 'ListSvc'];
