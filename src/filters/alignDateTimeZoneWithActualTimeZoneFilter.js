// This filter appends the UTC offset '+0100' and removes the zone designator 'Z'
// if British Summer Time is in effect. Expects a string and returns a string.

angular.module('cpLib').filter('alignDateTimeZoneWithActualTimeZone', function() {
    function isBSTInEffect(date) {
        const now = new Date();
        const dateToCompare = new Date(Date.parse(date));

        // Loop over the 31 days of March for the current year.
        let lastSundayOfMarch;
        for (let i = 31; i > 0; i--) {
            let tempDate = new Date(now.getFullYear(), 2, i);

            if (tempDate.getDay() === 0) {
                lastSundayOfMarch = tempDate;
                break;
            }
        }

        // Loop over the 31 days of October for the current year.
        let lastSundayOfOctober;
        for (let i = 31; i > 0; i--) {
            let tempDate = new Date(now.getFullYear(), 9, i);

            if (tempDate.getDay() === 0) {
                lastSundayOfOctober = tempDate;
                break;
            }
        }

        return (dateToCompare > lastSundayOfMarch && dateToCompare < lastSundayOfOctober);
    }

    return (date) => {
        return isBSTInEffect(date) ? date.replace(/Z$/, '+0100') : date;
    };
});
