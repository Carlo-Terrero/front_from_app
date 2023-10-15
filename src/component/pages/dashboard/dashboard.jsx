import React, {useEffect, useState} from "react";
import axios from "axios";

import TableDashboard from "./tableDashboard/tableDashboard";

export default function Dashboard({data}){

    const [surveys, setSurveys] = useState();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/surveys')
             .then(response => setSurveys(response.data))
    },[]);

    console.log(data)
    return(
        <section className="container_dasboard">
            <h1>Dashboard</h1>

            <p>Gestione aquí una lista de posibles clientes</p>

            <TableDashboard surveys={surveys} category={data.user_type}/>
        </section>
    )
}


// user_name: 'Lucía Incapie',
//     user_mail: 'lucia@gmail.com',
//     user_pass: 'user',
//     user_type: