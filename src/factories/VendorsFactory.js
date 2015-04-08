angular.module('cpLib').factory('VendorsFactory', function(ApiService, API_BASE, $q) {
    return {
        getAllVendors: () => ApiService.get(`${API_BASE}/vendors`),

        getAllActiveAndApprovedVendors: () => ApiService.get(`${API_BASE}/vendors/all-active-and-approved`),

        getVendor: (idOrSlug) => ApiService.get(`${API_BASE}/vendors/${idOrSlug}`),

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

        getBusinessTypes: () => ApiService.get(`${API_BASE}/business-types`),

        updateVendor: (id, updatedVendor) => ApiService.put(`${API_BASE}/vendors/${id}`, updatedVendor),

        updateSelf: (updatedVendor) => ApiService.put(`${API_BASE}/vendors/me`, updatedVendor),

        deleteVendor: (id) => ApiService.delete(`${API_BASE}/vendors/${id}`),

        approveVendor: (id) => ApiService.put(`${API_BASE}/vendors/${id}/approve`)
    };
});
