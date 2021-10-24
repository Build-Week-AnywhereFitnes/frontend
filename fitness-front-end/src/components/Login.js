import React, { useState } from 'react';
import styled from 'styled-components';
import { axiosWithAuth } from './axiosWithAuth';


// credentials:
// NAME: aaron
// PW: aaronpassword


// The url on your end needs to be localhost:3000/api/auth/login


const Login = (props) => {

    const [login, setLogin] = useState({
        username: "",
        password: "",
    });


    const handleChange = (e) => {
        setLogin({
            ...login,
            [e.target.name]: e.target.value,
        });
    };


    const handleLogin = (e) => {
        e.preventDefault();
        axiosWithAuth()
            .post("/login", login)
            .then((res) => {
                console.log('RES =', res)
                localStorage.setItem("token", res.data.token);
                props.history.push('/clientPage');
            })
            .catch((err) => {
                console.log(err);
                // setError(err.response.data.error)
            });
    };


    return (
        <ComponentContainer>
            <ModalContainer>

                <FormGroup onSubmit={handleLogin}>
                    {/* <FormGroup> */}

                    <Label> Username </Label>
                    <Input
                        id="username"
                        type="text"
                        name="username"
                        value={login.username}
                        onChange={handleChange}
                    />

                    <Label> Password </Label>
                    <Input
                        id="password"
                        type="text"
                        name="password"
                        value={login.password}
                        onChange={handleChange}
                    />

                    <Button> SUBMIT </Button>

                </FormGroup>
            </ModalContainer>
        </ComponentContainer >
    );
}

export default Login;


const Input = styled.input`
    font-size: 1rem;
    padding: 1rem 0;
    width: 100%;
`

const Label = styled.label`
    display: block;
    text-align: left;
    font-size: 1.5rem;
`

const Button = styled.button`
    padding:1rem;
    width: 100%;
`

const FormGroup = styled.form`
    padding:1rem;
`

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display:flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`