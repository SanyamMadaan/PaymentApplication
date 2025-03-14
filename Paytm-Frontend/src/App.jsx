import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserSignIn from "./Users/Controllers/UserSignIn";
import UserSignUp from "./Users/Controllers/UserSignup";
import UserRoutes from "./Users/UserRoutes/UserRoutes";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<UserSignIn />} />

                <Route path="/signup" element={<UserSignUp />} />

                <Route path="/user/*" element={<UserRoutes />} />
            </Routes>
        </Router>
    );
}

export default App;
