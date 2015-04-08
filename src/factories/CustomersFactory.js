angular.module('cpLib').factory('CustomersFactory', function(ApiService, API_BASE, $q) {
    return {
        getAllCustomers: () => ApiService.get(`${API_BASE}/customers`),

        getCustomer: id => ApiService.get(`${API_BASE}/customers/${id}`),

        updateCustomer: (id, updatedCustomer) => ApiService.put(`${API_BASE}/customers/${id}`, updatedCustomer),

        updateSelf: attributes => ApiService.put(`${API_BASE}/customers/self`, attributes),

        getAddresses: () => ApiService.get(`${API_BASE}/addresses`),

        getAddressById: id => {
            const pluckMatchingAddress = response => {
                const allAddresses = response.data.addresses,
                    allIds = allAddresses.map(address => address.id),
                    address = allAddresses[allIds.indexOf(id)];

                if (address) {
                    return address;
                } else {
                    throw 'Couldn’t find address';
                }
            };

            return ApiService.get(`${API_BASE}/addresses`).then(pluckMatchingAddress);
        },

        updatePayOnAccountDetails: (payOnAccountDetails) => ApiService.put(`${API_BASE}/customers/pay-on-account`, payOnAccountDetails),

        approveRequestToPayOnAccount: (id) => ApiService.put(`${API_BASE}/customers/${id}/approve-request-to-pay-on-account`),

        rejectRequestToPayOnAccount: (id) => ApiService.put(`${API_BASE}/customers/${id}/reject-request-to-pay-on-account`),

        revokePaymentOnAccount: (id) => ApiService.put(`${API_BASE}/customers/${id}/revoke-payment-on-account`)
    };
});
