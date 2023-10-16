import React, {useState} from "react";

import CloseIcon from '@mui/icons-material/Close';
export default function FormManager({close}){

    const productoLuz = ["TARIFA PLANA", "TARIFA POR USO"];
    const productoGas = ["PLANA", "TOTAL"];

    const dniValidator = new RegExp();

    const [clientData, setClientData] = useState({
        dni: "",
        product: "",
        by_product: "",
        by_product_two: "",
        maintenance: "",
        maintenance_two: "",
        state: "",
        create_survey: "",
        last_change: "",
    });

    const [viewMaintenance, setViewMaintenance] = useState(false);

    function handlechange(e){

        setClientData({
            ...clientData,
            [e.target.name]: e.target.value
        });
    }

    function onSubmit(){
        event.preventDefault();
        clientData.create_survey = new Date().toLocaleDateString();
        clientData.last_change = new Date().toLocaleDateString();

        if(clientData.state.length == 0 || clientData.product.length == 0){
            console.log("puebe otra vez")
            return
        }

        if(clientData.maintenance.length == 0 && viewMaintenance){
            console.log("debe seleccionar un matenimiento");
        }

        // se envia el formulario
        console.log(clientData.state.length)
    }

    function selectedGas(){
        return(
            <div className="formManager_element">
                <label htmlFor="">Sub Producto Gaz</label>
                <select 
                    name="by_product"
                    onChange={(e) => handlechange(e)}
                    required
                >
                    {productoGas.map(element =>(
                        <option value={element}>{element}</option>
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
                    required
                >
                    {productoLuz.map(element =>(
                        <option value={element}>{element}</option>
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
                        required={true}
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
                        required={true}
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
                            selectedDual()
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

                <div>
                    <input 
                        type="submit" 
                        value="Agragar Cliente"
                        className="btn_log"
                    />
                </div>
            </form>

            <CloseIcon className="icon_close" onClick={()=> close(false)}/>

        </div>
    )
}
