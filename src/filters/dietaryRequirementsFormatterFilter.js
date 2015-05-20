/**
 * Format dietary requirements as HTML.
 */
angular.module('cpLib').filter('dietaryRequirementsFormatter', function($sce) {
    function escapeHtml(input) {
        return input.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    }

    return (dietaryRequirements) => {
        if (!dietaryRequirements.customInstructions && !dietaryRequirements.requirements.length) {
            return $sce.trustAsHtml('None.');
        }

        let html = '';

        dietaryRequirements.requirements.forEach(group => {
            html += group.headCount + ': ' + group.requirements.map(r => escapeHtml(r.name)).join(' + ') + '<br />';
        });

        if (dietaryRequirements.customInstructions) {
            html += 'Custom instructions:<br />'
                + dietaryRequirements.customInstructions.replace(/\n+$/, '').replace(/\n/g, '<br />');
        }

        html = html.replace(/(<br \/>)+$/, '');

        return $sce.trustAsHtml(html);
    };
});
