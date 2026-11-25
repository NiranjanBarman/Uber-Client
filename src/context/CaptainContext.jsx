import { useState } from "react";
import { CaptainDataContext } from "./CaptainDataContext";

const CaptainContext = ({ children }) => {
    const [captainData, setCaptainData] = useState({
        fullName: {
            firstname: "",
            lastname: ""
        },
        email: "",
        vehicle: {}
    });
    const [captainAccessToken, setCaptainAccessToken] = useState(null);

    return (
        <CaptainDataContext.Provider value={{
            captainData,
            setCaptainData,
            captainAccessToken,
            setCaptainAccessToken
        }}>
            {children}
        </CaptainDataContext.Provider>
    );
};

export default CaptainContext;