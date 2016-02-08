angular.module('app', ['ngResource', 'ngRoute']);

angular.module('app').config(function($routeProvider, $locationProvider){
    var routeRoleChecks = {
        admin: {auth: function (mvAuth) {
            return mvAuth.authorizeCurrentUserForRoute('admin');
        }},
        user: {auth: function (mvAuth) {
            return mvAuth.authorizeAuthenticatedUserForRoute();
        }}
    };
    $locationProvider.html5Mode({enabled:true, requireBase:false});
    $routeProvider
        .when('/', {templateUrl: '/partials/main', controller: 'mvMainCtrl'})
        .when('/admin/users', {templateUrl: '/partials/user-list', controller: 'mvUserListCtrl', resolve: routeRoleChecks.admin
        })
        .when('/signup', {templateUrl: '/partials/signup', controller: 'mvSignupCtrl'
        })
        .when('/profile', {templateUrl: '/partials/profile', controller: 'mvProfileCtrl', resolve: routeRoleChecks.user
        })
        .when('/courses', {templateUrl: '/partials/course-list', controller: 'mvCourseListCtrl'
        })
        .when('/courses/:id', {templateUrl: '/partials/course-details', controller: 'mvCourseDetailCtrl'
        });
});

angular.module('app').run(function($rootScope, $location) {
    $rootScope.$on('$routeChangeError', function(evt, current, previous, rejection) {
        if(rejection === 'not authorized') {
            $location.path('/');
        }
    })
});