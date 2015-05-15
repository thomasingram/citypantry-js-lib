angular.module('cpLib').filter('getCustomerMealPlanStatusText', function() {
    return function(customerMealPlanStatus) {
        switch (customerMealPlanStatus) {
            case 1:
                return 'None';
            case 2:
                return 'Requested callback';
            case 3:
                return 'Pending first generation';
            case 4:
                return 'Pending first staff approval';
            case 5:
                return 'Active';
            default:
                throw 'Unexpected customerMealPlanStatus: ' + customerMealPlanStatus;
        }
    };
});
