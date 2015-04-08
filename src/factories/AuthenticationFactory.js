angular.module('cpLib').factory('AuthenticationFactory', function(ApiService, API_BASE) {
    return {
        login: loginDetails => ApiService.post(`${API_BASE}/user/login`, loginDetails),

        register: registerDetails => ApiService.post(`${API_BASE}/user/register`, registerDetails),

        requestResetEmail: email => ApiService.post(`${API_BASE}/user/request-reset-email`, email),

        setPassword: resetDetails => ApiService.post(`${API_BASE}/user/set-password`, resetDetails)
    };
});
