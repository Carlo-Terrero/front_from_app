import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function HandleButtons({elementData}){

    function HandleEdit(element){
        console.log(" Edit element ", element);
    }

    function HandleDelte(element){
        console.log(" Delete element ", element);
    }

    return(
        <div className="container_button_management">
            <ModeEditIcon className="btn_edit" onClick={() => HandleEdit(elementData)}/>
            <DeleteIcon className="btn_delete" onClick={() => HandleDelte(elementData)}/>
        </div>
    )
}