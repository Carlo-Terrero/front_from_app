import React, {useEffect, useState} from "react";
import axios from "axios";

import AddIcon from '@mui/icons-material/Add';

import TableDashboard from "./tableDashboard/tableDashboard";
import FormManager from "./formsManager/formsManager";
import { useStoreLogIn } from "../../hooks/useStore/useStore";

export default function Dashboard(){

    const [surveys, setSurveys] = useState();
    const [viewForm, setViewForm] = useState(false);
    const [surveyEdit, setSurveyEdit] = useState();

    const userLoged = useStoreLogIn(state => state.loggedIn)

    useEffect(()=>{
        axios.get('http://localhost:8000/api/surveys')
             .then(response => setSurveys(response.data))
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
                surveys={surveys} 
                category={userLoged.user_type}
            />

        </section>
    )
}
