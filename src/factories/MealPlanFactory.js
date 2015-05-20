angular.module('cpLib').factory('MealPlanFactory', function (ApiService) {
    return {
        getCustomers: () => ApiService.get(`/meal-plan/customers`)
    };
});
