angular.module('cpLib').filter('addressSingleLineFormatter', function($sce) {
    return (address, separator = ', ') => {
        if (!address) {
            return $sce.trustAsHtml('');
        }

        function safe(input) {
            return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }

        return $sce.trustAsHtml(safe(address.addressLine1) +
            (address.addressLine2 ? separator + safe(address.addressLine2) : '') +
            (address.addressLine3 ? separator + safe(address.addressLine3) : '') +
            (address.city ? separator + safe(address.city) : '') +
            (address.postcode ? separator + safe(address.postcode) : '') +
            (address.countryName ? separator + safe(address.countryName) : ''));
    };
});
