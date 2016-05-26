<<<<<<< HEAD
angular.module('MyApp', ['appRoutes', 'mainCtrl', 'authService', 'userCtrl', 'userService', 'storyService', 'storyCtrl', 'reverseDirective'])

.config(function($httpProvider) {

	$httpProvider.interceptors.push('AuthInterceptor');


})
=======
angular.module('app',[]);
>>>>>>> 81eb0d0549b3308af4aa336b6358511efbde292c
