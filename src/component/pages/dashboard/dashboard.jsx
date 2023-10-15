import React, {useEffect, useState} from "react";
import axios from "axios";

import TableDashboard from "./tableDashboard/tableDashboard";

export default function Dashboard(){

    const [surveys, setSurveys] = useState();

    useEffect(()=>{
        axios.get('http://localhost:8000/api/surveys')
             .then(response => setSurveys(response.data))
    },[]);

    return(
        <section className="container_dasboard">
            <h1>Dashboard</h1>

            <p>Gestione aquí una lista de posibles clientes</p>

            <TableDashboard surveys={surveys}/>
        </section>
    )
}

// id: 4,
// dni: '25798641D',
// product: 'Gas',
// by_product: 'Tarifa Total',
// maintenance: 'No',
// state: 'Vendido',
// create_survey: '2023-10-13',
// last_change: