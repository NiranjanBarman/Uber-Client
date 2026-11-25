
import { useEffect, useState } from "react";
import { UserDataContext } from "./UserDataContext";
import { configureAccessTokenContext } from "../services/authToken";

const UserContext = ({ children }) => {

    const [userData, setUserData] = useState({
        name: "",
        email: "",
        password: ""
    });
    const [accessToken, setAccessTokenState] = useState(null);

    useEffect(() => {
        configureAccessTokenContext(setAccessTokenState);

        return () => {
            configureAccessTokenContext(null);
        };
    }, []);

    return (
        <UserDataContext.Provider value={{ userData, setUserData, accessToken, setAccessTokenState }}>
            {children}
        </UserDataContext.Provider>
    );
};

export default UserContext;
