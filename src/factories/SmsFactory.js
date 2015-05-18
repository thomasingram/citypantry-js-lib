angular.module('cpLib').factory('SmsFactory', function (ApiService) {
    return {
        getSms: (id) => ApiService.get(`/sms/${id}`),

        sendSms: (sms) => ApiService.post(`/sms`, sms),

        getSmsHistory: () => ApiService.get(`/sms/all`),

        getAllSmsByNumber: (number) => ApiService.get(`/sms/${number}`)
    };
});
