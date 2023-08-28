import React, { useEffect } from "react";
import { client } from "../hooks/useAuth";

const Public = () => {
    const loginWithGithub = () => {
        // client.login({ idpHint: "github" });
        client.login();
        //login with keycloak by passing in the username and password (hardcoded for now)
    };

    return <button onClick={loginWithGithub}>Login with Github</button>;
};

export default Public;
