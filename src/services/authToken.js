let accessToken = null;
let contextSetter = null;

export const configureAccessTokenContext = (setter) => {
    contextSetter = setter;
};

export const getAccessToken = () => accessToken;

export const setAccessToken = (token) => {
    accessToken = token;
    contextSetter?.(token);
};

export const clearAccessToken = () => {
    accessToken = null;
    contextSetter?.(null);
};

export const isAccessTokenExpired = (token = getAccessToken()) => {

    if (!token) return true;

    try {
        const payload = JSON.parse(
            atob(
                token.split(".")[1]
                    .replace(/-/g, "+")
                    .replace(/_/g, "/")
            )
        );

        return payload.exp * 1000 <= Date.now();

    } catch {
        return true;
    }
};

export const clearAuth = () => {
    clearAccessToken();
};
