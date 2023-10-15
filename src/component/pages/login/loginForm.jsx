import axios from "axios";
import React, {useState} from "react";
import useStoreLogIn from "../../hooks/useStore/useStore";

export default function LoginForm({login}){

    // const uu = useStoreLogIn((state) => state.getState());

    const [loginDate, setLoginDate] = useState({
        user_mail: "maria@gmail.com",
        user_pass: "admin"
    });

    const [typePass, setTypePass] = useState("password");
    
    function handlechange(e){

        setLoginDate({
            ...loginDate,
            [e.target.name]: e.target.value
        });
    }

    function onSubmit(){
        event.preventDefault();

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

            <form onSubmit={onSubmit}>
                <div className="container_from_input">
                    <label htmlFor="user_mail">Enter your email</label>
                    <input
                        type="email"
                        name="user_mail"
                        placeholder="Enter your email"
                        value={loginDate.user_mail}
                        onChange={(e) => handlechange(e)}
                        required={true}
                    />
                </div>

                <div className="container_from_input">
                    <label htmlFor="user_pass">Enter your Password</label>
                    <input
                        type={typePass}
                        name="user_pass"
                        placeholder="Enter your email"
                        value={loginDate.user_pass}
                        onChange={(e) => handlechange(e)}
                        required={true}
                    />
                    {/* <button onClick={() => handelTypePass()}>change</button> */}
                </div>

                <button className="btn_log">Log In</button>
            </form>

            <p className="from_sub_slogan">
                si no dispones de usuario o tienes algun problema contacta con tu administrador
            </p>
        </div>   
    )
}