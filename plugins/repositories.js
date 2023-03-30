import createRepository from "~/repositories/Repository";
const DOMAIN = process.env.DOMAIN;
const DOMAIN_VUIHOC = process.env.DOMAIN_VUIHOC;
const STATUS_SUCCESS = 200;
const STATUS_INTERNAL_SERVER_ERROR = 500;

export default ({ $axios, $cookies }, inject) => {
    const tokenUser = $cookies.get("token_user") ?? "";
    const axiosInstance = $axios.create({
        baseURL: DOMAIN,
        withCredentials: false,
        headers: {
            Authorization: tokenUser ? `Bearer ${tokenUser}` : "",
        },
    });
    axiosInstance.interceptors.response.use(
        (response) => {
            const statusCode = response.status;
            if (statusCode === STATUS_SUCCESS && !response.data.code) {
                return {
                    success: true,
                    data: response.data.data,
                    time_current: response.data.now,
                };
            }

            return {
                success: false,
                data: [],
            };
        },
        (error) => {
            if (error.response) {
                return {
                    error: true,
                    status: STATUS_INTERNAL_SERVER_ERROR,
                    message: error.data?.message ?? "",
                    errors: error.response.data,
                    data: error.data,
                };
            }
            if (error.request) {
                return {
                    error: true,
                    status: STATUS_INTERNAL_SERVER_ERROR,
                    message: error.statusText ?? "",
                    errors: error,
                };
            }
            return {
                error: true,
                status: STATUS_INTERNAL_SERVER_ERROR,
                message: error ?? "",
            };
        }
    );

    // 2
    const axiosVuiHoc = $axios.create({
        baseURL: DOMAIN_VUIHOC,
        withCredentials: false,
        headers: {
            Authorization: `Bearer ${tokenUser}`,
            "Accept-Language": "ja",
            "Send-From": "WEB",
            app_id: "1",
        },
    });
    axiosVuiHoc.interceptors.response.use(
        (response) => {
            const statusCode = response.status;
            if (statusCode === STATUS_SUCCESS && !response.data.code) {
                return {
                    success: true,
                    data: response.data.data,
                    time_current: response.data.time_current,
                };
            }

            return {
                success: false,
                data: [],
            };
        },
        (error) => {
            if (error.response) {
                return {
                    error: true,
                    status: STATUS_INTERNAL_SERVER_ERROR,
                    message: error?.data?.message ?? "",
                    errors: error?.response?.data,
                    data: error?.data,
                };
            }
            if (error.request) {
                return {
                    error: true,
                    status: STATUS_INTERNAL_SERVER_ERROR,
                    message: error?.statusText ?? "",
                    errors: error,
                };
            }
            return {
                error: true,
                status: STATUS_INTERNAL_SERVER_ERROR,
                message: error ?? "",
            };
        }
    );

    inject("repositories", createRepository(axiosInstance, axiosVuiHoc));
};
