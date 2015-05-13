angular.module('cpLib').filter('getCurrentMealPlanStatusText', function() {
    return function(currentMealPlanStatus) {
        switch (currentMealPlanStatus) {
            case 1:
                return 'None';
            case 2:
                return 'Pending generation';
            case 3:
                return 'Pending staff approval';
            case 4:
                return 'Active';
            default:
                throw 'Unexpected currentMealPlanStatus: ' + currentMealPlanStatus;
        }
    };
});
