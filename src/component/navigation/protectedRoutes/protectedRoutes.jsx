import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../../pages/dashboard/dashboard";
import Navigation from "../navigation";

export default function ProtectedRoutes(){

    return(
        <>
            <Navigation/>

            <Routes>
                <Route exac path="/" element={<Dashboard/>}/>
            </Routes>
        </>
    )
}