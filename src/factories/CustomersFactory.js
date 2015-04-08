angular.module('cpLib').factory('CustomersFactory', function(ApiService, $q) {
    return {
        getAllCustomers: () => ApiService.get(`/customers`),

        getCustomer: id => ApiService.get(`/customers/${id}`),

        updateCustomer: (id, updatedCustomer) => ApiService.put(`/customers/${id}`, updatedCustomer),

        updateSelf: attributes => ApiService.put(`/customers/self`, attributes),

        getAddresses: () => ApiService.get(`/addresses`),

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

            return ApiService.get(`/addresses`).then(pluckMatchingAddress);
        },

        updatePayOnAccountDetails: (payOnAccountDetails) => ApiService.put(`/customers/pay-on-account`, payOnAccountDetails),

        approveRequestToPayOnAccount: (id) => ApiService.put(`/customers/${id}/approve-request-to-pay-on-account`),

        rejectRequestToPayOnAccount: (id) => ApiService.put(`/customers/${id}/reject-request-to-pay-on-account`),

        revokePaymentOnAccount: (id) => ApiService.put(`/customers/${id}/revoke-payment-on-account`)
    };
});
