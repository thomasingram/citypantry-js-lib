angular.module('cpLib').filter('dateIsBSTInEffect', function() {
    /**
     * This filter returns whether the date passed is inside British Summer Time. The timezone attached
     * to the date passed is ignored.
     *
     * @param  {String|Date} date
     * @return {Boolean}
     */
    return (date) => {
        if (typeof date === 'string') {
            date = new Date(Date.parse(date));
        }

        // Loop over the 31 days of March for the current year.
        let lastSundayOfMarch;
        for (let i = 31; i > 0; i--) {
            let tempDate = new Date(date.getFullYear(), 2, i);

            if (tempDate.getDay() === 0) {
                lastSundayOfMarch = tempDate;
                break;
            }
        }

        // Loop over the 31 days of October for the current year.
        let lastSundayOfOctober;
        for (let i = 31; i > 0; i--) {
            let tempDate = new Date(date.getFullYear(), 9, i);

            if (tempDate.getDay() === 0) {
                lastSundayOfOctober = tempDate;
                break;
            }
        }

        return (date > lastSundayOfMarch && date < lastSundayOfOctober);
    };
});
