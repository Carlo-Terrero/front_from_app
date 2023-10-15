import React, {useEffect, useState} from "react";
import axios from "axios";

import AddIcon from '@mui/icons-material/Add';

import TableDashboard from "./tableDashboard/tableDashboard";
import FormManager from "./formsManager/formsManager";

export default function Dashboard({data}){

    const [surveys, setSurveys] = useState();
    const [viewForm, setViewForm] = useState(false);

    useEffect(()=>{
        axios.get('http://localhost:8000/api/surveys')
             .then(response => setSurveys(response.data))
    },[]);

    
    return(
        <section className="container_dashboard">
            <h1>Dashboard</h1>

            <p className="dashboard_introduccion">Gestione aquí una lista de posibles clientes</p>

            { 
                viewForm ?
                    <FormManager close={setViewForm}/> : 
                    <div 
                        className="dashboard_add"
                        onClick={()=>setViewForm(true)}
                    >
                        Añadir cliente
                        <AddIcon />
                    </div>
            }

            <TableDashboard surveys={surveys} category={data.user_type}/>
        </section>
    )
}

// id
// user_name: 'Lucía Incapie',
//     user_mail: 'lucia@gmail.com',
//     user_pass: 'user',
//     user_type: