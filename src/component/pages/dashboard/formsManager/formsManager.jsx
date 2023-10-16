import React, {useState, useEffect} from "react";
import axios from "axios";

import CloseIcon from '@mui/icons-material/Close';

export default function FormManager({close, surveyEdit ,setSurveyEdit}){

    const productoLuz = ["TARIFA PLANA", "TARIFA POR USO"];
    const productoGas = ["PLANA", "TOTAL"];
    const clientDataFix = {
        dni: "",
        product: "",
        by_product: null,
        by_product_two: null,
        maintenance: null,
        maintenance_two: null,
        state: "",
        create_survey: "",
        last_change: "",
    }

    const [clientData, setClientData] = useState(clientDataFix);
    const [viewMaintenance, setViewMaintenance] = useState(false);

    useEffect(() =>{
        setClientData(clientDataFix)
        
        if(surveyEdit) setClientData(surveyEdit)
    },[surveyEdit])

    function handlechange(e){

        setClientData({
            ...clientData,
            [e.target.name]: e.target.value
        });
    }

    function handleDate(){
        const fecha = new Date();
        const año = fecha.getFullYear();
        const mes = fecha.getMonth() + 1;
        const día = fecha.getDate();
        const fechaFormateada = `${año}-${mes < 10 ? '0' : ''}${mes}-${día < 10 ? '0' : ''}${día}`;
        return fechaFormateada;
    }

    function onSubmit(data){
        event.preventDefault();
        clientData.create_survey = handleDate();
        clientData.last_change = handleDate();

        if(clientData.state.length == 0 || clientData.product.length == 0){
            console.log("puebe otra vez")
            return
        }

        if(clientData.maintenance == null && viewMaintenance){
            console.log("debe seleccionar un matenimiento");
        }

        !surveyEdit ?
            axios.post("http://localhost:8000/api/survey", clientData)
                .then(response => {
                    console.log("agregado")
                    console.log(response)
                })
                .catch((err) =>{
                    console.log("ha aparecido un error")
                    console.log(err)

                })
                .finally(() =>{
                    setSurveyEdit()
                    close(false)
                })
            :
            axios.put(`http://localhost:8000/api/survey/${clientData.id}`, clientData)
                .then(response => {
                    console.log("agregado")
                    console.log(response)
                })
                .catch((err) =>{
                    console.log("ha aparecido un error")
                    console.log(err)

                })
                .finally(() =>{
                    setSurveyEdit()
                    close(false)
                })

    }

    function selectedGas(){
        return(
            <div className="formManager_element">
                <label htmlFor="">Sub Producto Gaz</label>
                <select 
                    name="by_product"
                    onChange={(e) => handlechange(e)}
                >
                    <option disabled selected>Seleccione producto</option>
                    {productoGas.map(element =>(
                        <option key={element} value={element}>{element}</option>
                    ))}
                    
                </select>
            </div>
        );
    }

    function selectedLuz(){
        return(
            <div className="formManager_element">
                <label htmlFor="">Sub Producto Luz</label>
                <select 
                    name="by_product"
                    onChange={(e) => handlechange(e)}
                >
                    <option disabled selected>Seleccione producto</option>
                    {productoLuz.map(element =>(
                        <option key={element} value={element}>{element}</option>
                    ))}
                    
                </select>
            </div> 
        );
    }

    function selectedDual(){

        return(
            <div>
                <div className="formManager_element">
                    <label htmlFor="">Sub Producto Luz</label>
                    <select 
                        name="by_product"
                        onChange={(e) => handlechange(e)}
                    >
                        {productoLuz.map(element =>(
                            <option key={element} value={element}>{element}</option>
                        ))}
                        
                    </select>
                </div> 

                <div className="formManager_element">
                    <label htmlFor="">Sub Producto Gas</label>
                    <select 
                        name="by_product_two"
                        onChange={(e) => handlechange(e)}
                    >
                        {productoGas.map(element =>(
                            <option key={element} value={element}>{element}</option>
                        ))}
                        
                    </select>
                </div>
            </div>
        )
    }

    function selectedMaintenance(){

        const simple = ["Si", "No"];
        const Dual = ["Mantenimiento Luz", "Mantenimiento Gas"];

        return(

            clientData.product != "Dual" ? 
                <div className="container_mantenimiento">
                    <label htmlFor="">Mantenimiento {clientData?.product}</label>
                    <select 
                        name="maintenance"
                        onChange={(e) => handlechange(e)}
                        required
                        >
                        <option selected disabled>Seleccionar {clientData?.product}</option>
                        <option value={simple[0]}>{simple[0]}</option>
                        <option value={simple[1]}>{simple[1]}</option>
                    </select>
                </div>
            :
            <div className="double_container">
                <div className="container_mantenimiento">
                    <label htmlFor="">{Dual[0]}</label>
                    <select 
                        name="maintenance"
                        onChange={(e) => handlechange(e)}
                        required
                        >
                        <option selected disabled>{Dual[0]}</option>
                        <option value={simple[0]}>{simple[0]}</option>
                        <option value={simple[1]}>{simple[1]}</option>
                    </select>
                </div>

                <div className="container_mantenimiento">
                    <label htmlFor="">{Dual[1]}</label>
                    <select 
                        name="maintenance_two"
                        onChange={(e) => handlechange(e)}
                        required
                        >
                        <option selected disabled>{Dual[1]}</option>
                        <option value={simple[0]}>{simple[0]}</option>
                        <option value={simple[1]}>{simple[1]}</option>
                    </select>
                </div>
            </div>
        )
    }

    function handleClose(){
        close()
        setSurveyEdit()
    }

    return(
        <div className="container_formManager">

            <form onSubmit={onSubmit} className="formManager">
                <div className="formManager_element">
                    <label htmlFor="number_dni">Introducir DNI</label>
                    <input 
                        type="text" 
                        name="dni" 
                        id="number_dni"
                        value={clientData.dni}
                        pattern="[0-9]{8}[a-zA-Z]{1}"
                        onChange={(e) => handlechange(e)}
                        required
                    />

                </div>

                <div className="formManager_element">
                    <label htmlFor=""> Seleccionar producto</label>
                    <select 
                        name="product"
                        onChange={(e) => handlechange(e)}
                        required
                    >
                        <option disabled selected >Selecciona producto</option>
                        <option value="Luz">Luz</option>
                        <option value="Gas">Gas</option>
                        <option value="Dual">Dual</option>
                    </select>
                </div>

                {/* La Dual mostrara dos sub productos  */}

                {clientData.product == "Gas" ? 
                        selectedGas()
                    :
                        clientData.product == "Luz" ?
                            selectedLuz()
                            :
                            clientData.product == "Dual" ?
                                selectedDual() :
                                "Seleccione un producto"
                }

                {/* inicialmente no se muestra */}
                <div className="formManager_element">

                    {
                        viewMaintenance != true ?
                            <p className="text_implement" onClick={()=>setViewMaintenance(true)}>
                                implementar Mantenimiento
                            </p> 
                            :
                            selectedMaintenance()
                    }
                    
                    
                </div>

                <div className="formManager_element">
                    <label htmlFor="">Seleccionar estado</label>
                    <select 
                        name="state"
                        onChange={(e) => handlechange(e)}
                        required={true}
                    >
                        <option disabled selected >Selecciona estado</option>
                        <option value="Vendido">Vendido</option>
                        <option value="En proceso">En proceso</option>
                        <option value="No vendido">No vendido</option>
                        <option value="No valido">No valido</option>
                        
                    </select>
                </div>

                {!surveyEdit ? 
                    <div>
                        <input 
                            type="submit" 
                            value="Agragar Cliente"
                            className="btn_log"
                        />
                    </div> :
                    <div>
                        <input 
                            type="submit" 
                            value="Editar Cliente"
                            className="btn_log"
                        />
                    </div>
                }
            </form>

            <CloseIcon className="icon_close" onClick={()=> handleClose()}/>

        </div>
    )
}
