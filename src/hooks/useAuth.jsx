import React, { useEffect, useRef, useState } from "react";
import Keycloak from "keycloak-js";

export const client = new Keycloak({
    url: "http://localhost:10002/",
    realm: "Eazybankdev",
    clientId: "eazypublicclientreact",
});

const useAuth = () => {
    const [isLogin, setLogin] = useState(false);

    const isRun = useRef(false);

    useEffect(() => {
        if (isRun.current) return;
        isRun.current = true;

        client
            .init({ onLoad: "check-sso", redirectUri: "http://localhost:5173", pkceMethod: "S256" })
            .then((res) => setLogin(res))
            .catch((err) => console.log(err));
    }, []);

    return isLogin;
};

export default useAuth;
