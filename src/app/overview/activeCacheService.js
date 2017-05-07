angular.module('overview').service('ActiveCache', ['$http', '$q',

    function($http, $q) {
    	this.school = null;
    	this.department = null;
    	this.group = null;
    	this.child = null;
    	this.children = null;
    	this.childIds = null;

    	this.resolveGroup = function(groupId) {
    	    if (this.group && this.group.id == groupId) {
    	        return $q(function(resolve) {
    	            resolve();
    	        });
    	    } else {
    	        this.clearSchool();
    	        return $http.get('api/overview/group/' + groupId + '/info').then((response) => {
    	            this.school = response.data.school;
    	            this.department = response.data.department;
    	            this.group = response.data.group;
    	        });
    	    }
    	};
    	
    	this.clearChild = function() {
    	    this.child = null;
    	};

    	this.clearGroup = function() {
    	    this.clearChild();
    	    this.children = null;
    	    this.childIds = null;
    	    this.group = null;
    	};
    	
    	this.clearDepartment = function() {
    	    this.clearGroup();
    	    this.department = null;
    	};
    	
    	this.clearSchool = function() {
    	    this.clearDepartment();
    	    this.school = null;
    	};
    	
    }
]);
