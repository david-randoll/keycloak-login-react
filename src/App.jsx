import { useState } from "react";
import useAuth from "./hooks/useAuth";
import Protected from "./components/Protected";
import Public from "./components/Public";

function App() {
    const isLogin = useAuth();

    return isLogin ? <Protected /> : <Public />;
}

export default App;
