
import { useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthLoading from "../../components/AuthLoading";

import { userAPI } from "../../services/api";

import { getAccessToken, setAccessToken, clearAuth, isAccessTokenExpired } from "../../services/authToken";

const UserProtectedWrapper = () => {

    const location = useLocation();

    const [loading, setLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {

        let active = true;

        const checkAuth = async () => {

            const token = getAccessToken();

            if (token && !isAccessTokenExpired()) {
                if (active) {
                    setAuthorized(true);
                }
                if (active) {
                    setLoading(false);
                }
                return;
            }

            try {

                const response = await userAPI.refreshToken();

                const newAccessToken = response.data.accessToken;

                if (!newAccessToken) {
                    throw new Error("Access token not received");
                }

                setAccessToken(newAccessToken);

                if (active) {
                    setAuthorized(true);
                }

            } catch (error) {
                console.log(error)
                clearAuth();

                if (active) {
                    setAuthorized(false);
                }

            } finally {

                if (active) {
                    setLoading(false);
                }
            }
        };

        checkAuth();

        return () => {
            active = false;
        };

    }, []);

    if (loading) {
        return <AuthLoading />;
    }

    if (!authorized) {
        return (
            <Navigate
                to="/user-login"
                replace
                state={{ from: location }}
            />
        );
    }

    return <Outlet />;
};

export default UserProtectedWrapper;
