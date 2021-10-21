import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
// import axiosWithAuth from './axiosWithAuth'


const InstructorAuth = () => {

    const [buttonDisabled, setButtonDisabled] = useState(true)

    const [instructorAuth, setInstructorAuth] = useState({
        name: "",
        surname: "",
        ssn: "",
        email: "",
        licensenumber: "",
        phonenumber: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        surname: "",
        ssn: "",
        email: "",
        licensenumber: "",
        phonenumber: "",
    });

    const formSchema = yup.object().shape({

        name: yup.string().min(2, "Name must be at least 2 characters").required("Name is Required"),
        surname: yup.string().min(2, "Surname must be at least 2 characters").required("Surname is Required"),
        ssn: yup.string().matches(9, "Enter a valid SSN"),
        email: yup.string().email("Enter validate email"),
        licensenumber: yup.string().matches(9, "Enter a valid license"),
        phonenumber: yup.string().matches(9, "Enter a valid phone number"),
    })

    const setFormErrors = (name, value) => {
        yup.reach(formSchema, name).validate(value)
            .then(valid => {
                setErrors({ ...errors, [name]: "" });
            })
            .catch(err => {
                console.log('errooorrsss', err.errors)
                setErrors({ ...errors, [name]: err.errors[0] });
            });

    }

    const handleChange = (e) => {

        setInstructorAuth({ ...instructorAuth, [e.target.name]: e.target.value });
        setFormErrors(e.target.name, e.target.value)
        console.log('instructor', instructorAuth)
    };

    useEffect(() => {
        formSchema.isValid(instructorAuth).then(valid => {
            setButtonDisabled(!valid);
        });
    }, [instructorAuth]);

    const formSubmit = (e) => {
        e.preventDefault()

        console.log(instructorAuth)


        // axiosWithAuth().post('/instructor',instructor)
        // .then(res=>{
        //     const tokenid = res.data.token
        //     localStorage.setItem('token',tokenid)
        //     props.settoken(tokenid)
        //     history.push('/')
        // })
        // .catch(err=> { 
        //     console.log('err',err.response.data.error)
        //     setError(err.response.data.error)
        // });
        // setInstructorAuth({ name: "", surname:"", ssn:"", email: "", licensenumber: "", phonenumber:""})
    }

    return (
        <ComponentContainer>
            <ModalContainer>

                <FormGroup onSubmit={formSubmit}  >

                    <Label> Name:
                        <Input
                            type="text"
                            name="name"
                            value={instructorAuth.name}
                            onChange={handleChange}
                        />
                        <div style={{ color: 'red' }}>{errors.name}</div>
                    </Label>

                    <Label> Surname:
                        <Input
                            type="text"
                            name="surname"
                            value={instructorAuth.surname}
                            onChange={handleChange}
                        />
                        <div style={{ color: 'red' }}>{errors.surname}</div>
                    </Label>

                    <Label> SSN :
                        <Input
                            type="text"
                            pattern="[1-9]*"
                            name="ssn"
                            value={instructorAuth.ssn}
                            onChange={handleChange}
                        />
                        <div style={{ color: 'red' }}>{errors.ssn}</div>
                    </Label>

                    <Label> Email:
                        <Input
                            type="email"
                            name="email"
                            value={instructorAuth.email}
                            onChange={handleChange}
                        />
                        <div style={{ color: 'red' }}>{errors.email}</div>
                    </Label>

                    <Label> License:
                        <Input
                            type="number"
                            name="licensenumber"
                            pattern="[1-9]*"
                            value={instructorAuth.licensenumber}
                            onChange={handleChange}
                        />
                        <div style={{ color: 'red' }}>{errors.licensenumber}</div>
                    </Label>

                    <Label> Phone Number:
                        <Input
                            type="number"
                            name="phonenumber"
                            pattern="[1-9]*"
                            value={instructorAuth.phonenumber}
                            onChange={handleChange}
                        />
                        <div style={{ color: 'red' }}>{errors.phonenumber}</div>
                    </Label>

                    <Button type='submit' disabled={buttonDisabled}  > Request Authorization </Button>

                </FormGroup>
            </ModalContainer>
        </ComponentContainer >
    );
}

export default InstructorAuth;



const Select = styled.select`
    font-size: 1rem;
    padding: 1rem 0;
    width: 100%;
`

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
    padding: 1rem;
    width: 100%;
`

const FormGroup = styled.form`
    padding: 1rem;
`

const ComponentContainer = styled.div`
    height: 70%;
    justify-content: center;
    align-items: center;
    display: flex;
`

const ModalContainer = styled.div`
    width: 500px;
    background: white;
    padding: 2rem;
    text-align: center;
`