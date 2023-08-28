import React from "react";
import { client } from "../hooks/useAuth";

const Protected = () => {
    const checkHealth = () => {
        console.log("token: ", client.token);
        fetch("https://licensing.scubeenterprise.com/api/license/actuator/health", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${client.token}`,
            },
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div>
            Protected
            <button onClick={() => checkHealth()}>Check Health</button>
        </div>
    );
};

export default Protected;
