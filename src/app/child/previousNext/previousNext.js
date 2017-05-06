angular.module('child').component('previousNext', {
    bindings: {},
    templateUrl: "app/child/previousNext/previousNext.tpl.html",
    controller: ['$state', 'ActiveCache',
        function ($state, ActiveCache) {
            this.groupHasMoreThanOneChildren = ActiveCache.childIds.length > 1;

            this.nextChild = function () {
                var next = findNextChild();
                if (next.rollover) {
                    console.log("Ανακύκλωση καταλόγου. ");
                }
                $state.go('viewChild', {childId: next.id})
            };

            this.previousChild = function () {
                var previous = findPreviousChild();
                if (previous.rollover) {
                    console.log("Ανακύκλωση καταλόγου. ");
                }
                $state.go('viewChild', {childId: previous.id});
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
