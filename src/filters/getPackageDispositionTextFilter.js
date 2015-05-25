angular.module('cpLib').filter('getPackageDispositionText', function() {
    return function(disposition) {
        switch (disposition) {
            case 'must_have':
            case 1:
                return 'Must have';
            case 'must_not_have':
            case 2:
                return 'Must not have';
            default:
                throw 'Unexpected disposition: ' + disposition;
        }
    };
});
