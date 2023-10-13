import React from "react";

import LoginForm from "./loginForm";
export default function Login(){

    return(
        <div className="container_login">
            <div className="container_column_left">
                Foto
            </div>

            <div className="container_colimn_right">
                <LoginForm/>
            </div>

        </div>
    )
}