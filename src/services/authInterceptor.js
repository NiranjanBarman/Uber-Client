
import api from "./api";

import {
    getAccessToken,
    setAccessToken,
    clearAccessToken
} from "./authToken";

let refreshRequest = null;

api.interceptors.request.use((config) => {

    const accessToken = getAccessToken();

    if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
});

api.interceptors.response.use(

    (response) => response,

    async (error) => {

        const originalRequest = error.config;

        if (!originalRequest || error.response?.status !== 401) {
            return Promise.reject(error);
        }

        const isRefreshRequest =
            originalRequest.url?.includes("/refresh-token");

        if (isRefreshRequest || originalRequest._retry) {
            clearAccessToken();
            return Promise.reject(error);
        }

        originalRequest._retry = true;

        try {

            if (!refreshRequest) {

                const refreshUrl = originalRequest.url?.startsWith("/captain/")
                    ? "/captain/refresh-token"
                    : "/user/refresh-token";

                refreshRequest = api.get(refreshUrl);
            }

            const response = await refreshRequest;

            const newAccessToken = response.data.accessToken;

            if (!newAccessToken) {
                throw new Error("Access token not received");
            }

            setAccessToken(newAccessToken);

            originalRequest.headers.Authorization =
                `Bearer ${newAccessToken}`;

            return api(originalRequest);

        } catch (refreshError) {

            clearAccessToken();

            return Promise.reject(refreshError);

        } finally {

            refreshRequest = null;
        }
    }
);
