import React from "react";
import axios from "axios";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

export default function HandleButtons({elementData, setSurveyEdit}){

    function HandleEdit(element){
        setSurveyEdit(element)
    }

    function HandleDelte(element){
        axios.delete(`http://localhost:8000/api/survey/${element.id}`)
            .then(response =>{
                console.log(response)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
        <div className="container_button_management">
            <ModeEditIcon className="btn_edit" onClick={() => HandleEdit(elementData)}/>
            <DeleteIcon className="btn_delete" onClick={() => HandleDelte(elementData)}/>
        </div>
    )
}