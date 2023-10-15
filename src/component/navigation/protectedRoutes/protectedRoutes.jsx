import React from "react";
import { Routes, Route } from "react-router-dom";

import Dashboard from "../../pages/dashboard/dashboard";
import Navigation from "../navigation";

export default function ProtectedRoutes({data, handleLogin}){

    console.log(data)
    return(
        <>
            <Navigation data={data} logOut={handleLogin}/>

            <Routes>
                <Route exac path="/" element={<Dashboard data={data}/>}/>
            </Routes>
        </>
    )
}