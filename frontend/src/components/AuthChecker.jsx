import React, { useEffect, useState } from "react";
import { Outlet, Navigate, useLocation } from "react-router-dom";
import { auth } from "../api/firebase-config"
import ClipLoader from "react-spinners/ClipLoader";

const AuthChecker = () => {
    const location = useLocation();
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            if (currentUser) {
                auth.updateCurrentUser(currentUser)
                console.log(currentUser);

            }

            setLoading(false);
        })

        return () => unsubscribe();
    }, [])

    return <>{loading ? <ClipLoader loading={loading} size={150} aria-label="Loading Spinner" /> : (<>{auth.currentUser ? <Outlet /> : <Navigate to={"/login"} state={{ from: location.pathname }} />}</>)}</>
};

export default AuthChecker;