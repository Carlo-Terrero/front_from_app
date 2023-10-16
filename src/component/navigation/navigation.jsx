import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import { useStoreUser } from "../hooks/store/useStoreUser/useStoreUser";

export default function Navigation(){

    const logOut = useStoreUser(state => state.logOut);
    const userLogin = useStoreUser(state => state.loggedIn);

    function out(){
        localStorage.removeItem("userForm")
        logOut();
    }

    return(
        <div className="container_navigation">
            <div className="navigation_left">
                <p>Gestor {userLogin.user_name}</p>

                <p>Categoría {userLogin.user_type}</p>
            </div>

            <div className="navigation-right">
                <LogoutIcon className="hover_icon" onClick={()=>out()} />
            </div>
        </div>
    )
}
