angular.module('cpLib').filter('getPackagingTypeChoiceText', function() {
    return function(type) {
        switch (type) {
            case 'individual':
            case 1:
                return 'Individual';
            case 'buffet':
            case 2:
                return 'Buffet';
            case 'dont_mind':
            case 3:
                return 'Don’t mind';
            default:
                throw 'Unexpected type: ' + type;
        }
    };
});
