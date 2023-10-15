import React, {useState} from "react";

import CloseIcon from '@mui/icons-material/Close';
export default function FormManager({close}){

    const [clientData, setClientData] = useState({
        dni: "",
        product: "",
        by_product: "",
        by_product_two: "",
        maintenance: "",
        state: "",
        create_survey: "",
        last_change: "",
    });

    const dniValidator = new RegExp()

    const productoLuz = ["TARIFA PLANA", "TARIFA POR USO"];
    const productoGas = ["PLANA", "TOTAL"];
    // const productoDual = ["TARIFA PLANA", "TARIFA TOTAL"];
    // la dual mostrara dos subcampos

    function handlechange(e){

        setClientData({
            ...clientData,
            [e.target.name]: e.target.value
        });
    }

    function onSubmit(){
        event.preventDefault();
        clientData.create_survey = new Date();
        clientData.last_change = new Date();

        console.log(clientData)
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
                        required
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
                        required
                    >
                        {productoGas.map(element =>(
                            <option value={element}>{element}</option>
                        ))}
                        
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

                {/* <div className="formManager_element">
                    <label htmlFor="">Sub Producto</label>
                    <select 
                        name="by_product"
                        onChange={(e) => handlechange(e)}
                        required
                    >
                        {/* <option value="Vendido">Vendido</option>
                        <option value="En proceso" selected>En proceso</option>
                        <option value="No vendido">No vendido</option>
                        <option value="No valido">No valido</option> *
                        
                    </select>
                </div> */}

                {/* inicialmente no se muestra */}
                <div className="formManager_element">
                    <label htmlFor="">Maintenance</label>
                    <select 
                        name="maintenance"
                        onChange={(e) => handlechange(e)}
                        required
                    >
                        <option value="Vendido">Vendido</option>
                        <option value="En proceso" selected>En proceso</option>
                        <option value="No vendido">No vendido</option>
                        <option value="No valido">No valido</option>
                        
                    </select>
                </div>

                <div className="formManager_element">
                    <label htmlFor="">Seleccionar estado</label>
                    <select 
                        name="state"
                        onChange={(e) => handlechange(e)}
                        required
                    >
                        <option >Selecciona estado</option>
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

// "dni": "98745632T",
// "product": "Luz",
// "by_product": "Tarifa plana",
// "maintenance": "Si",
// "state": "Vendido",
// "create_survey": "2023-10-13",
// "last_change": "2