var app = angular.module('MyApp', ['ngRoute', 'satellizer']);

app.config(function($routeProvider, $authProvider, $locationProvider) {

  // *** satellizer settings *** //
  $authProvider.google({
    url: '/auth/google',
    clientId: '884728629839-2iv7aklau49oki7mqim5hk6ulor3f0g8.apps.googleusercontent.com',
    redirectUri: window.location.origin,
  });

  $routeProvider
    .when('/', {
      templateUrl: 'partials/welcome.html',
      access: {restricted: false}
    })
    .when('/home', {
      templateUrl: 'partials/home.html',
      access: {restricted: false}
    })
    .when('/login', {
      templateUrl: 'partials/login.html',
      controller: 'loginCtrl',
      access: {restricted: false}
    })
    .when('/signup', {
      templateUrl: 'partials/signup.html',
      controller: 'signupCtrl',
      access: {restricted: false}
    })
    .when('/profile', {
      templateUrl: 'partials/profile.html',
      controller: 'profileCtrl',
      access: {restricted: true}
    })
    .otherwise('/');

});

app.run(function ($rootScope, $location, $route, $auth) {
  $rootScope.$on('$routeChangeStart', function (event, next, current) {
    if (next.access.restricted && !$auth.isAuthenticated()) {
      $location.path('/login');
      $route.reload();
    }
  });
});
