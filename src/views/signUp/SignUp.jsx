import React, { useState, useRef } from "react";
import { Link } from 'react-router-dom'
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import validator from 'validator';


const crypto = require('crypto');

const required = (value) => {
    if(!value.toString().trim().length) {
        return (
            <div className="alert alert-danger" role="alert">
                Required Field
            </div>
        );
    }
};

const validEmail = (value) => {
    if  (!validator.isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
               Invalid Email
            </div>
        );
    }
};

const vusername = (value) => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Please, completed your Username
            </div>
        );
    }
};

const vpassword = (value) => {
    if ((value.length < 6 || value.length > 10) ) {
        return (
            <div className="alert alert-danger" role="alert">
                Entre 6 y 10 caracteres. Debe contener al menos un número, mayúscula, minúscula y carácter especial
            </div>
        );
    }
};

const Register = () => {
    const form = useRef();
    const checkBtn = useRef();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [successful, setSuccessful] = useState(false);
    const [message, setMessage] = useState("");

    const onChangeUsername = (e) => {
        const name = e.target.value;
        setUsername(name);
    };


    const onChangeEmail = (e) => {
        const email = e.target.value;
        setEmail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const handleRegister = (e) => {
        e.preventDefault();

        setMessage("");
        setSuccessful(false);

        form.current.validateAll();

        if (checkBtn.current.context._errors.length === 0) {
            if (localStorage.getItem("email") === email) {
                setMessage('Usuario ya registrado')
                setSuccessful(false)
            } else {
                localStorage.setItem("username", `${username}`)
                localStorage.setItem("email", `${email}`)
                localStorage.setItem("password", crypto.createHash('sha256').update(password).digest('base64'))

                setMessage('Usuario creado correctamente')
                setSuccessful(true)
            }
        }
    };

    return (
        <div className="container">
            <main className="formdiv-signup">

                <Form onSubmit={handleRegister} ref={form}>
                    {!successful && (
                        <div>
                            <div className="formdiv">
                                <label htmlFor="username">Username</label>
                                <Input
                                    type="text"
                                    className="formdiv-input"
                                    id="username"
                                    value={username}
                                    onChange={onChangeUsername}
                                    validations={[required, vusername]}
                                    aria-describedby="username" 
                                    title="username" />
                            </div>

                            <div className="formdiv">
                                <label htmlFor="email">Email</label>
                                <Input
                                    type="text"
                                    className="formdiv-input"
                                    id="email"
                                    value={email}
                                    onChange={onChangeEmail}
                                    validations={[required, validEmail]}
                                    aria-describedby="email"
                                    title="email" />
                            </div>

                            <div className="formdiv ">
                                <label className="label" htmlFor="password">Password</label>
                                <Input
                                    type="password"
                                    className="formdiv-input"
                                    id="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    validations={[required, vpassword]}
                                    aria-describedby="password"
                                    title="password"/>   
                            </div>

                            <div className="formbtn">
                                <button className="formbtn-btn"><span>Regístrate</span></button>
                            </div>
                        </div>
                    )}
                    {message && (
                        <div className="error">
                            <div 
                                className={successful ? "alert alert-success" : "alert alert-danger"}
                                role="alert"
                            >
                                {message}
                            </div>
                        </div>
                    )}
                    <CheckButton style={{ display: "none" }} ref={checkBtn} />
                </Form>
                <div>
                    <p className="form-p">¿Ya tienes cuenta? <Link to='./'  >Inicia sesión</Link></p>

                </div>

            </main>

        </div>
    );
};

export default Register;