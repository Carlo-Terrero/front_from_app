import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';

export default function Navigation({logOut, data}){

    return(
        <div className="container_navigation">
            <div className="navigation_left">
                <p>Gestor {data.user_name}</p>

                <p>Categoría {data.user_type}</p>
            </div>

            <div className="navigation-right">
                <LogoutIcon className="hover_icon" onClick={()=>logOut(null)} />
            </div>
        </div>
    )
}
