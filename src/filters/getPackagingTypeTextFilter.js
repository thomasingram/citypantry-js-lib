angular.module('cpLib').filter('getPackagingTypeText', function() {
    return function(type) {
        switch (type) {
            case 'individual':
            case 1:
                return 'Individual';
            case 'buffet':
            case 2:
                return 'Buffet';
            case 'either':
            case 3:
                return 'Either';
            default:
                throw 'Unexpected type: ' + type;
        }
    };
});
