import axios from "axios";
import React, {useState} from "react";
import { useForm } from "react-hook-form";
import useStoreLogIn from "../../hooks/useStore/useStore";

export default function LoginForm({login}){

    // const uu = useStoreLogIn((state) => state.getState());
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            user_mail: "maria@gmail.com",
            user_pass: "admin"
        }
    });

    const [typePass, setTypePass] = useState("password");

    function onSubmit(loginDate){

        axios.post("http://localhost:8000/api/user/login", loginDate)
             .then(response => {
                console.log(response.data.length)
                response.data.length ?
                    login(response.data[0]) :
                    console.log('No hay');
             });
    }

    function handelTypePass(){
        typePass == "password" ? setTypePass("text") : setTypePass("password");
    }

    return(

        <div className="container_form">

            <h2>Login</h2>

            <p className="from_slogan">
                Welcome to client manager
            </p>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="container_from_input">
                    <label htmlFor="user_mail">Enter your email</label>
                    <input
                        type="email"
                        {...register("user_mail", {required: true})}
                    />
                    {errors.user_mail?.type === 'required' && <p className="text_error" role="alert">Introducir email</p>}
                </div>

                <div className="container_from_input">
                    <label htmlFor="user_pass">Enter your Password</label>
                    <input
                        type={typePass}
                        {...register("user_pass", {required: true})}
                    />
                    {errors.user_pass?.type === 'required' && <p className="text_error" role="alert">Introducir contraseña</p>}
                </div>

                <button className="btn_log">Log In</button>
            </form>

            <p className="from_sub_slogan">
                si no dispones de usuario o tienes algun problema contacta con tu administrador
            </p>
        </div>   
    )
}
