import angular from 'angular';

const childGenderTypeFilter = function (childGenderTypeMap) {
    return function (value) {
        return childGenderTypeMap[value];
    };
};

const firstNameFilter = function () {
    return function (child) {
        let value = child.firstName;
        if (child.callName) {
            value += " (" + child.callName + ")";
        }
        return value;
    };
};

const guardianGenderTypeFilter = function (guardianGenderTypeMap) {
    return function (value) {
        return guardianGenderTypeMap[value];
    };
};

const preSchoolLevelFilter = function (preSchoolLevelMap) {
    return function (value) {
        return preSchoolLevelMap[value];
    };

};

const relationshipFilter = function (relationshipMap) {
    return function (value) {
        return relationshipMap[value];
    };
};

const telephoneTypeFilter = function (telephoneTypeMap) {
    return function (value) {
        return telephoneTypeMap[value];
    };
};

export default angular.module('filters', [])
    .filter('childGenderTypeFilter', ['childGenderTypeMap', childGenderTypeFilter])
    .filter('firstNameFilter', [firstNameFilter])
    .filter('guardianGenderTypeFilter', ['guardianGenderTypeMap', guardianGenderTypeFilter])
    .filter('preSchoolLevelFilter', ['preSchoolLevelMap', preSchoolLevelFilter])
    .filter('relationshipFilter', ['relationshipMap', relationshipFilter])
    .filter('telephoneTypeFilter', ['telephoneTypeMap', telephoneTypeFilter])
    .name;
