import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import AuthLoading from "../../components/AuthLoading";
import { CaptainDataContext } from "../../context/CaptainDataContext";
import { captainAPI } from "../../services/api";
import {
    clearAuth,
    getAccessToken,
    isAccessTokenExpired,
    setAccessToken
} from "../../services/authToken";

const CaptainProtectedWrapper = () => {
    const location = useLocation();
    const { captainAccessToken, setCaptainAccessToken } = useContext(CaptainDataContext);
    const [loading, setLoading] = useState(true);
    const [authorized, setAuthorized] = useState(false);

    useEffect(() => {
        let active = true;

        const checkAuth = async () => {
            const token = captainAccessToken || getAccessToken();

            if (token && !isAccessTokenExpired(token)) {
                setAccessToken(token);
                if (active) {
                    setAuthorized(true);
                    setLoading(false);
                }
                return;
            }

            try {
                const response = await captainAPI.refreshToken();
                const newAccessToken = response.data.accessToken;

                if (!newAccessToken) {
                    throw new Error("Access token not received");
                }

                setAccessToken(newAccessToken);
                setCaptainAccessToken(newAccessToken);
                if (active) {
                    setAuthorized(true);
                }
            } catch {
                clearAuth();
                setCaptainAccessToken(null);
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
    }, [captainAccessToken, setCaptainAccessToken]);

    if (loading) {
        return <AuthLoading />;
    }

    if (!authorized) {
        return <Navigate to="/captain-login" replace state={{ from: location }} />;
    }

    return <Outlet />;
};

export default CaptainProtectedWrapper;