angular.module('guardian').component('displayGuardian', {
    bindings: {
        guardian: "=",
        address: "="
    },
    templateUrl: "app/guardian/displayGuardian/display.guardian.tpl.html"
});
