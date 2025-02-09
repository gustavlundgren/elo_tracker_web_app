import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { auth } from "../api/firebase-config"

const AuthChecker = () => {
    return <>{auth.currentUser ? <Outlet /> : <Navigate to={"/login"} />}</>;
};

export default AuthChecker;