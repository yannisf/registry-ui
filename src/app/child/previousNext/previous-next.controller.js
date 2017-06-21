export default class PreviousNextCtrl {

    constructor($state, $transitions, $document, ActiveCache) {
        Object.assign(this, {
            $state,
            $transitions,
            $document,
            ActiveCache
        });
    }

    $onInit() {
        this.groupHasMoreThanOneChildren = this.ActiveCache.childIds.length > 1;

        this.$document.on('keyup', ($event) => {
            if ($event.keyCode === 39) {
                this.nextChild();
            } else if ($event.keyCode === 37) {
                this.previousChild();
            }
        });

        let unregister = this.$transitions.onExit({}, () => {
            this.$document.off('keyup');
            unregister();
        });

    }

    nextChild() {
        let next = this._findNextChild();
        this.$state.go('viewChild', {
            childId: next.id
        });
    }

    previousChild() {
        let previous = this._findPreviousChild();
        this.$state.go('viewChild', {
            childId: previous.id
        });
    }

    _findNextChild() {
        let result = {};
        let numberOfChildren = this.ActiveCache.childIds.length;
        let currentChildId = this.ActiveCache.child.id;
        let currentChildIdIndex = this.ActiveCache.childIds.indexOf(currentChildId);
        if (currentChildIdIndex + 1 < numberOfChildren) {
            result.id = this.ActiveCache.childIds[currentChildIdIndex + 1];
        } else {
            result.id = this.ActiveCache.childIds[0];
            result.rollover = true;
        }
        return result;
    }

    _findPreviousChild() {
        let result = {};
        let numberOfChildren = this.ActiveCache.childIds.length;
        let currentChildId = this.ActiveCache.child.id;
        let currentChildIdIndex = this.ActiveCache.childIds.indexOf(currentChildId);
        if (currentChildIdIndex !== 0) {
            result.id = this.ActiveCache.childIds[currentChildIdIndex - 1];
        } else {
            result.id = this.ActiveCache.childIds[numberOfChildren - 1];
            result.rollover = true;
        }
        return result;
    }
}

PreviousNextCtrl.$inject = ['$state', '$transitions', '$document', 'ActiveCache'];
