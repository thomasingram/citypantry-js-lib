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
            case 'special':
            case 4:
                return 'Special';
            case 'n/a':
            case 'N/A':
            case 5:
                return 'N/A';
            default:
                throw 'Unexpected type: ' + type;
        }
    };
});
