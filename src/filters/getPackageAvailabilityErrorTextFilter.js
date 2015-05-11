angular.module('cpLib').filter('getPackageAvailabilityErrorText', function() {
    return function(availability) {
        if (!availability.isPostcodeOk) {
            return 'This meal cannot be delivered to your location.';
        } else if (availability.isVendorDailyCapacityExceeded) {
            return 'The vendor has too many orders on this day.';
        } else if (!availability.isDateOk) {
            return 'This meal cannot be delivered on this date.';
        } else if (!availability.isTimeOk) {
            return 'This meal cannot be delivered at this time.';
        } else if (!availability.isEnoughNotice) {
            return 'The vendor needs more notice to deliver at this time.';
        } else if (availability.isVendorOnHoliday) {
            return 'The vendor is on holiday on that date.';
        } else {
            throw new Error('Unknown error: isPostcodeOk: ' + availability.isPostcodeOk +
                ', isVendorDailyCapacityExceeded: ' + availability.isVendorDailyCapacityExceeded +
                ', isDateOk: ' + availability.isDateOk + ', isTimeOk: ' + availability.isTimeOk +
                ', isEnoughNotice: ' + availability.isEnoughNotice +
                ', isVendorOnHoliday: ' + availability.isVendorOnHoliday
            );
        }
    };
});
