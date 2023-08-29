import React, { useEffect, useState } from "react";
import { client } from "../hooks/useAuth";

const Protected = () => {
    const [name, setName] = useState("");
    useEffect(() => {
        loadUserInfo();
    }, []);

    const logToken = () => {
        console.log("token: ", client.token);
        client.updateToken();
    };

    const loadUserProfile = () => {
        client
            .loadUserProfile()
            .then((profile) => {
                console.log(profile);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const loadUserInfo = () => {
        client
            .loadUserInfo()
            .then((info) => {
                console.log(info);
                setName(info.name);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            <p>logged in userId: {client.subject}</p>
            <p>user: {name}</p>
            <button style={{ margin: "20px" }} onClick={() => logToken()}>
                Log Token
            </button>
            <button style={{ margin: "20px", background: "lightblue" }} onClick={() => client.accountManagement()}>
                Account Management
            </button>
            <button style={{ margin: "20px", background: "pink" }} onClick={() => client.logout()}>
                Logout
            </button>
            <button style={{ margin: "20px" }} onClick={() => loadUserProfile()}>
                Load user Profile
            </button>

            <button style={{ margin: "20px" }} onClick={() => loadUserInfo()}>
                Load user Info
            </button>
        </div>
    );
};

export default Protected;
