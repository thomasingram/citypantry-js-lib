angular.module('cpLib').factory('UsersFactory', function(ApiService, API_BASE) {
    return {
        getAllUsers: () => ApiService.get(`${API_BASE}/users`),

        masqueradeAsUser: id => ApiService.post(`${API_BASE}/user/masquerade`, {id: id}),

        getLoggedInUser: () => ApiService.get(`${API_BASE}/users/get-authenticated-user`),

        registerVendor: registerDetails => ApiService.post(`${API_BASE}/user/register-vendor`, registerDetails),

        changeOwnPassword: passwords => ApiService.put(`${API_BASE}/user/self/change-password`, passwords),

        getPaymentCards: () => ApiService.get(`${API_BASE}/payment-cards`),

        addPaymentCard: (cardDetails) => ApiService.post(`${API_BASE}/payment-cards`, cardDetails)
    };
});
