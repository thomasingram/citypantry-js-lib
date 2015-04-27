angular.module('cpLib').filter('dateIgnoreTimezone', function($filter) {
    return (date, format) => $filter('date')(date.replace(/(Z|[\+\-]\d+)$/, ''), format);
});
