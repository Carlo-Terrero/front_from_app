import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { useStoreSurvey } from "../../../../hooks/store/useStoreSurvey/useStoreSurvey";

export default function HandleButtons({elementData, setSurveyEdit}){

    const {getSurveys, deleteSurveys} = useStoreSurvey()

    function HandleEdit(element){
        setSurveyEdit(element)
    }

    async function  HandleDelte(element){
        const respose = await deleteSurveys(element);
        respose == undefined ? getSurveys() : alert('Ha ocurrido un error')
    }

    return(
        <div className="container_button_management">
            <ModeEditIcon className="btn_edit" onClick={() => HandleEdit(elementData)}/>
            <DeleteIcon className="btn_delete" onClick={() => HandleDelte(elementData)}/>
        </div>
    )
}