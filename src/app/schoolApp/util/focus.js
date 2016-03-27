angular.module('schoolApp').directive('focus', [
    function focus() {
		return {
			restrict: 'A',
			link: function(scope, element) {
				element[0].focus();
			}
		};
	}
]);