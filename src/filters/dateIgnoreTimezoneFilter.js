angular.module('cpLib').filter('dateIgnoreTimezone', function($filter) {
    /**
     * This filter takes a date string formatted as ISO 8601 and returns just the date formatted as
     * specified in the second parameter, regardless of the timezone in the input string or the
     * timezone on the user's computer.
     *
     * @param  {String} date
     * @param  {String format
     * @return {String}
     */
    return (date, format) => $filter('date')(date.replace(/(Z|[\+\-]\d{2}\:?\d{2})$/, ''), format);
});
