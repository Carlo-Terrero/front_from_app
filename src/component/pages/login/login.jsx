import React from "react";

import LoginForm from "./loginForm";
import imgLogIn from "../../../assets/img/login.avif"

export default function Login({handleLogin}){

    return(
        <div className="container_login">
            <div className="container_column_left" style={{ backgroundImage: `url(${imgLogIn})`}}>
                
            </div>

            <div className="container_colimn_right">
                <LoginForm login={handleLogin}/>
            </div>

        </div>
    )
}