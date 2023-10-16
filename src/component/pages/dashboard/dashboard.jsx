import React, {useEffect, useState} from "react";
import axios from "axios";

import AddIcon from '@mui/icons-material/Add';

import TableDashboard from "./tableDashboard/tableDashboard";
import FormManager from "./formsManager/formsManager";
import { useStoreUser } from "../../hooks/store/useStoreUser/useStoreUser";
import { useStoreSurvey } from "../../hooks/store/useStoreSurvey/useStoreSurvey";

export default function Dashboard(){

    const [viewForm, setViewForm] = useState(false);
    const [surveyEdit, setSurveyEdit] = useState();

    const userLoged = useStoreUser(state => state.loggedIn)
    const {getSurveys, surveyList} = useStoreSurvey()

    useEffect(()=>{
        getSurveys()
    },[]);

    return(
        <section className="container_dashboard">
            <h1>Dashboard</h1>

            <p className="dashboard_introduccion">Gestione aquí una lista de posibles clientes</p>

            { 
                viewForm || surveyEdit?
                    <FormManager surveyEdit={surveyEdit} close={setViewForm} setSurveyEdit={setSurveyEdit}/> : 
                    <div 
                        className="dashboard_add"
                        onClick={()=>setViewForm(true)}
                    >
                        Añadir cliente
                        <AddIcon />
                    </div>
            }

            <TableDashboard 
                setSurveyEdit={setSurveyEdit} 
                surveys={surveyList} 
                category={userLoged.user_type}
            />

        </section>
    )
}
