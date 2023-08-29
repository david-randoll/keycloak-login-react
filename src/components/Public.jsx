import React, { useEffect } from "react";
import { client } from "../hooks/useAuth";

const Public = () => {
    const loginWithGithub = () => {
        client.login({ idpHint: "github" });
    };
    const login = () => {
        client.login();
    };
    const signUp = () => {
        client.register();
    };

    return (
        <>
            <p>Public</p>
            <button style={{ margin: "20px" }} onClick={loginWithGithub}>
                Login with Github
            </button>
            <button style={{ margin: "20px" }} onClick={login}>
                Login
            </button>
            <button style={{ margin: "20px" }} onClick={signUp}>
                Sign Up
            </button>
        </>
    );
};

export default Public;
