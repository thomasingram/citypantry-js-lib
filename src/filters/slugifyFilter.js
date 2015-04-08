angular.module('cpLib').filter('slugify', function() {
    return text => String(text).replace(/ +/g, '-').toLowerCase();
});
