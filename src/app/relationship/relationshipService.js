angular.module('relationship').service('RelationshipService', ['Relationship',
    function (Relationship) {
        this.fetchRelationships = function (childId) {
            return Relationship.fetchRelationships({
                childId: childId
            });
        };
    }
]);
