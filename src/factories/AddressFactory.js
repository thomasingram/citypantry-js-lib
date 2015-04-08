angular.module('cpLib').factory('AddressFactory', function(ApiService) {
    return {
        getAddresses: () => ApiService.get(`/addresses`),

        createAddress: (address) => ApiService.post(`/addresses`, {address: address}),

        updateAddress: (id, updatedAddress) => ApiService.put(`/addresses/${id}`, updatedAddress),

        deleteAddress: (id) => ApiService.delete(`/addresses/${id}`)
    };
});
