import React from "react";

import HandleButtons from "./handleButtons/handleButtons";
export default function TableDashboard({ surveys, category }){

    return(
        <table className="contaient_table">
            <tr>
                <th>DNI Cliente</th>
                <th>Producto</th>
                <th>Sub Producto</th>
                <th>Mantenimiento</th>
                <th>Estado</th>
                <th>Creado</th>
                <th>Ultimo cambio</th>
                {category == "admin" ? <th>Gestionar cliente</th> : false}
            </tr>

            {surveys?.map((survey) =>(
                <tr key={survey.dni}>
                    <td>{survey.dni}</td>
                    <td>{survey.product}</td>
                    <td>{survey.by_product}</td>
                    <td>{survey.maintenance}</td>
                    <td>{survey.state}</td>
                    <td>{survey.create_survey}</td>
                    <td>{survey.last_change}</td>
                    {category == "admin" ? <td><HandleButtons elementData={survey}/> </td>: false}
                </tr>
            ))}

        </table>
    )
}