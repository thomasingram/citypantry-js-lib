angular.module('cpLib').filter('slugify', function() {
    return text => String(text)
        .replace(/ +/g, '-')
        .replace(/\//g, '-')
        .replace(/-{2,}/g, '-')
        .replace(/(.)[\.-]*$/, '$1')
        .toLowerCase();
});
