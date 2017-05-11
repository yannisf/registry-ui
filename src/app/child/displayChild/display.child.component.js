function displayChildComponent() {
    return {
        bindings: {
            child: "=",
            address: "="
        },
        templateUrl: "app/child/displayChild/display.child.tpl.html",
        controller: 'DisplayChildCtrl'
    };
}
