angular.module('cpLib').factory('UsersFactory', function(ApiService) {
    return {
        getAllUsers: () => ApiService.get(`/users`),

        masqueradeAsUser: id => ApiService.post(`/user/masquerade`, {id: id}),

        getLoggedInUser: () => ApiService.get(`/users/get-authenticated-user`),

        registerVendor: registerDetails => ApiService.post(`/user/register-vendor`, registerDetails),

        changeOwnPassword: passwords => ApiService.put(`/user/self/change-password`, passwords),

        getPaymentCards: () => ApiService.get(`/payment-cards`),

        addPaymentCard: (cardDetails) => ApiService.post(`/payment-cards`, cardDetails)
    };
});
