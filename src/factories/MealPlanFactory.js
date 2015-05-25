angular.module('cpLib').factory('MealPlanFactory', function (ApiService) {
    return {
        getCustomers: () => ApiService.get(`/meal-plan/customers`),

        updateMealPlanPreferences: (id, mealPlanPreferences) => ApiService.post(`/meal-plan/customers/${id}/requirements`, mealPlanPreferences),

        generateMealPlan: (id, startDate) => ApiService.post(`/meal-plan/customers/${id}/generate`, {startDate: startDate})
    };
});
