angular.module('cpLib').filter('getPayOnAccountStatusText', function() {
    return function(isPayOnAccount) {
        if (isPayOnAccount === false) {
            return 'No';
        } else if (isPayOnAccount === true) {
            return 'Yes';
        } else {
            throw new Error('Unexpected: isPayOnAccount: ' + isPayOnAccount);
        }
    };
});
