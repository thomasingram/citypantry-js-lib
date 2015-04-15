angular.module('cpLib').filter('getPaidOnAccountStatusText', function() {
    return function(paidOnAccountStatus) {
        switch (paidOnAccountStatus) {
            case 0:
            case 'disabled':
                return 'Disabled';
            case 1:
            case 'additional_information_needed':
                return 'Additional information needed';
            case 2:
            case 'enabled':
                return 'Enabled';
            default:
                throw 'Unexpected paidOnAccountStatus: ' + paidOnAccountStatus;
        }
    };
});
