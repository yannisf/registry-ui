angular.module('child').component('previousNext', {
    bindings: {},
    templateUrl: "app/child/previousNext/previousNext.tpl.html",
    controller: ['$location', 'ActiveCache',
        function ($location, ActiveCache) {
            this.groupHasMoreThanOneChildren = ActiveCache.childIds.length > 1;

            this.nextChild = function () {
                var next = findNextChild();
                if (next.rollover) {
                    console.log("Ανακύκλωση καταλόγου. ");
                }
                $location.url('/child/' + next.id + '/view');
            };

            this.previousChild = function () {
                var previous = findPreviousChild();
                if (previous.rollover) {
                    console.log("Ανακύκλωση καταλόγου. ");
                }
                $location.url('/child/' + previous.id + '/view');
            };

            function findNextChild() {
                var result = {};
                var numberOfChildren = ActiveCache.childIds.length;
                var currentChildId = ActiveCache.child.id;
                var currentChildIdIndex = ActiveCache.childIds.indexOf(currentChildId);
                if (currentChildIdIndex + 1 < numberOfChildren) {
                    result.id = ActiveCache.childIds[currentChildIdIndex + 1];
                } else {
                    result.id = ActiveCache.childIds[0];
                    result.rollover = true;
                }
                return result;
            }

            function findPreviousChild() {
                var result = {};
                var numberOfChildren = ActiveCache.childIds.length;
                var currentChildId = ActiveCache.child.id;
                var currentChildIdIndex = ActiveCache.childIds.indexOf(currentChildId);
                if (currentChildIdIndex !== 0) {
                    result.id = ActiveCache.childIds[currentChildIdIndex - 1];
                } else {
                    result.id = ActiveCache.childIds[numberOfChildren - 1];
                    result.rollover = true;
                }
                return result;
            }

        }
    ]
});
