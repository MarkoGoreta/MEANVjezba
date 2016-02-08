angular.module('app').controller('mvCourseListCtrl', function($scope, mvCachedCourses) {
    $scope.courses = mvCachedCourses.query();

    $scope.sortOptions = [{value: "published", text: "Sort by Date"},
        {value:"title", text: "Sort by Title"}];

    $scope.sortOrder = $scope.sortOptions[0].value;
});