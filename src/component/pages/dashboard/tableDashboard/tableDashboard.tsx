import React from "react";

export default function TableDashboard({surveys}){

    return(
        <table>
            <tr>
                <td>DNI Cliente</td>
                <td>Produsto</td>
                <td>Sub Producto</td>
                <td>Mantenimiento</td>
                <td>Estado</td>
                <td>Creodo</td>
                <td>Ultimo cambio</td>
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
                </tr>
            ))}

        </table>
    )
}