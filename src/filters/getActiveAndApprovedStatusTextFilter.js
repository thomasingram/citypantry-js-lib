angular.module('cpLib').filter('getActiveAndApprovedStatusText', function() {
    return function(active, approved) {
        if (active === false && approved === false) {
            return 'In progress';
        } else if (active === true && approved === false) {
            return 'Awaiting approval';
        } else if (active === false && approved === true) {
            return 'Inactive';
        } else if (active === true && approved === true) {
            return 'Active';
        } else {
            throw new Error('Unexpected: active: ' + active + ', approved: ' + approved);
        }
    };
});
