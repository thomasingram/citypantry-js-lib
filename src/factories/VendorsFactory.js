angular.module('cpLib').factory('VendorsFactory', function(ApiService, $q) {
    return {
        getAllVendors: () => ApiService.get(`/vendors`),

        getAllActiveAndApprovedVendors: () => ApiService.get(`/vendors/all-active-and-approved`),

        getVendor: (idOrSlug) => ApiService.get(`/vendors/${idOrSlug}`),

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

        getBusinessTypes: () => ApiService.get(`/business-types`),

        updateVendor: (id, updatedVendor) => ApiService.put(`/vendors/${id}`, updatedVendor),

        updateSelf: (updatedVendor) => ApiService.put(`/vendors/me`, updatedVendor),

        deleteVendor: (id) => ApiService.delete(`/vendors/${id}`),

        approveVendor: (id) => ApiService.put(`/vendors/${id}/approve`)
    };
});
