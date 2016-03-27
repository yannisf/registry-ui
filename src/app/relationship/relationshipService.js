angular.module('relationship').service('RelationshipService', ['$rootScope', 'ActiveCache', 'Relationship',
    function ($rootScope, ActiveCache, Relationship) {
        var fetchRelationships = function(childId) {
            return Relationship.fetchRelationships({childId: childId});
        };

        return {
            fetchRelationships: fetchRelationships,
        };
    }
]);
