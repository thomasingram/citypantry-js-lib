angular.module('cpLib').filter('getCurrentMealPlanStatusText', function() {
    return function(currentMealPlanStatus) {
        switch (currentMealPlanStatus) {
            case 1:
                return 'Pending generation';
            case 2:
                return 'Pending staff approval';
            case 3:
                return 'Active';
            default:
                return 'Unknown';
        }
    };
});
