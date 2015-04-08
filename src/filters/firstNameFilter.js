angular.module('cpLib').filter('firstName', function() {
    return fullName => String(fullName).split(' ')[0];
});
