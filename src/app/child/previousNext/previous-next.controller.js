export default function PreviousNextCtrl($state, $transitions, $document, ActiveCache) {

    this.$onInit = function () {
        // console.log('Initializing PreviousNextCtrl', this);
        this.groupHasMoreThanOneChildren = ActiveCache.childIds.length > 1;

        $document.on("keyup", ($event) => {
            console.log('keyup');
            if ($event.keyCode === 39) {
                this.nextChild();
            } else if ($event.keyCode === 37) {
                this.previousChild();
            }
        });

        let unregister = $transitions.onExit({}, () => {
            console.log('canceling keyup');
            $document.off("keyup");
            unregister();
        });

    };

    this.nextChild = function () {
        let next = findNextChild();
        if (next.rollover) {
            console.log("Ανακύκλωση καταλόγου. ");
        }
        $state.go('viewChild', {
            childId: next.id
        })
    };

    this.previousChild = function () {
        let previous = findPreviousChild();
        if (previous.rollover) {
            console.log("Ανακύκλωση καταλόγου. ");
        }
        $state.go('viewChild', {
            childId: previous.id
        });
    };

    function findNextChild() {
        let result = {};
        let numberOfChildren = ActiveCache.childIds.length;
        let currentChildId = ActiveCache.child.id;
        let currentChildIdIndex = ActiveCache.childIds.indexOf(currentChildId);
        if (currentChildIdIndex + 1 < numberOfChildren) {
            result.id = ActiveCache.childIds[currentChildIdIndex + 1];
        } else {
            result.id = ActiveCache.childIds[0];
            result.rollover = true;
        }
        return result;
    }

    function findPreviousChild() {
        let result = {};
        let numberOfChildren = ActiveCache.childIds.length;
        let currentChildId = ActiveCache.child.id;
        let currentChildIdIndex = ActiveCache.childIds.indexOf(currentChildId);
        if (currentChildIdIndex !== 0) {
            result.id = ActiveCache.childIds[currentChildIdIndex - 1];
        } else {
            result.id = ActiveCache.childIds[numberOfChildren - 1];
            result.rollover = true;
        }
        return result;
    }
}

PreviousNextCtrl.$inject = ['$state', '$transitions', '$document', 'ActiveCache'];
