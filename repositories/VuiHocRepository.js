export default (axios) => ({
    // register account
    checkAccount: (params = {}) => {
        return axios.post(`/api/check-account`, params);
    },
    sendOTP: (params = {}) => {
        return axios.post(`/api/send-otp`, params);
    },
    verifyOTPSMS: (params = {}) => {
        return axios.post(`/api/verify-otp-sms`, params);
    },
    registerAccount: (params = {}) => {
        return axios.post(`/api/register`, params);
    },
    resetPassword: (params = {}) => {
        return axios.post(`/api/reset-password`, params);
    },

    getUserProfile: (params = {}) => {
        return axios.get(`/api/profile`, {
            params,
        });
    },
    getNotification: (params = {}) => {
        return axios.get(`/api/notify`, {
            params,
        });
    },

    login: (params = {}) => {
        return axios.post(`/api/login`, params);
    },
    changePassword: (params) => {
        return axios.post(`/api/change-password/`, params);
    },
});
