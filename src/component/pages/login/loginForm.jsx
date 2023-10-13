import React, {useState} from "react";

export default function LoginForm(){

    const [loginDate, setLoginDate] = useState({
        user_mail: "",
        user_pass: ""
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
        console.log(loginDate);
    }

    function handelTypePass(){
        typePass == "password" ? setTypePass("text") : setTypePass("password");
    }

    return(
       <form onSubmit={onSubmit}>
            <div>
                <label htmlFor="user_mail">Enter your email</label>
                <input
                    type="email"
                    name="user_mail"
                    placeholder="Enter your email"
                    value={loginDate.user_mail}
                    onChange={(e) => handlechange(e)}
                />
            </div>

            <div>
                <label htmlFor="user_pass">Enter your Password</label>
                <input
                    type={typePass}
                    name="user_pass"
                    placeholder="Enter your email"
                    value={loginDate.user_pass}
                    onChange={(e) => handlechange(e)}
                />
                <button onClick={() => handelTypePass()}>change</button>
            </div>

            <button>Log In</button>
       </form>
    )
}