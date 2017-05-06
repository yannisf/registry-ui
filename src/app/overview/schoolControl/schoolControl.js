angular.module('overview').directive('schoolControl',

	function () {
		return {
			restrict: 'A',
			scope: {
				school: "=schoolControl",
				schools: "=",
				active: "="
			},
			bindToController: true,
			controllerAs: '$ctrl',
			templateUrl: "app/overview/schoolControl/schoolControl.tpl.html",
			controller: ['School', 'ActiveCache', function (School, ActiveCache) {

				this.$onInit = function () {
					this.oldValue = this.school.name;
				};

				this.working = false;

				this.remove = function () {
					this.working = true;
					this.school.$remove({}, () => {
							let index = this.schools.indexOf(this.school);
							this.schools.splice(index, 1);
							//TODO
							// if (this.school.id === ActiveCache.school.id) {
							// ActiveCache.school = null;
							// }
							this.working = false;
						},
						() => {
							this.working = false;
						});
				};

				this.edit = function () {
					this.editMode = true;
				};

				this.cancel = function () {
					this.editMode = false;
					this.school.name = this.oldValue;
				};

				this.update = function () {
					this.editMode = false;
					this.working = true;
					this.school.$save({}, () => {
						this.working = false;
					});
				};
			}]
		};
	}
);
