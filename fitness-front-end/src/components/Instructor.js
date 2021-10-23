import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';

// import axiosWithAuth from './axiosWithAuth'

const Instructor = () => {

    const [buttonDisabled, setButtonDisabled] = useState(true)

    const [instructor, setInstructor] = useState({
        name: "",
        type: "",
        starttime: "",
        duration: "",
        intensity: "",
        location: "",
        attendees: "",
        maxsize: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        type: "",
        starttime: "",
        duration: "",
        intensity: "",
        location: "",
        attendees: "",
        maxsize: "",
    })

    const formSchema = yup.object().shape({

        name: yup.string().min(2, "Name must be at least 2 characters").required("Name is Required"),
        type: yup.string().oneOf(["1", "2", "3"], "Enter the type of class you plan to offer"),
        starttime: yup.date().required("Must enter date").min(Date()),
        duration: yup.string().required(" How long will the class last?"),
        intensity: yup.string().oneOf(["1", "2", "3", "4", "5"], "Please select intensity"),
        location: yup.string().min(2, "Name must be at least 2 characters").required("Location is Required"),
        attendees: yup.number().min(1),
        maxsize: yup.string().oneOf(["10", "20", "30", "40"], "Please select size of your class"),

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
        e.persist();
        setInstructor({ ...instructor, [e.target.name]: e.target.value });
        setFormErrors(e.target.name, e.target.value)
        console.log('instructor', instructor)
    };

    useEffect(() => {
        formSchema.isValid(instructor).then(valid => {
            setButtonDisabled(!valid);
        });
    }, [instructor]);

    const formSubmit = (e) => {

        e.preventDefault()
        console.log(instructor)

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

        // setInstructor({
        //     name: "", type: "", starttime:"", duration:"", intensity:"",location:"", attendees:"", maxsize:"" });
    }

    return (
        <ComponentContainer>
            <ModalContainer>

                <FormGroup onSubmit={formSubmit}  >

                    <Label> Name:
                        <Input
                            id="name"
                            type="text"
                            name="name"
                            value={instructor.name}
                            onChange={handleChange}
                        />
                        <div style={{ color: 'red' }}>{errors.name}</div>
                    </Label>

                    <Label> Type of Class: </Label>
                    <Select name='type'
                        value={instructor.type}
                        onChange={handleChange} >
                        <option value='' > -- Pick your type -- </option>
                        <option value='1' > Crossfit </option>
                        <option value='2' > Functional </option>
                        <option value='3' > Weight lifting </option>
                    </Select>
                    <div style={{ color: 'red' }}>{errors.type}</div>

                    <Label> Start Time:
                        <Input
                            type="date"
                            name="starttime"
                            value={instructor.starttime}
                            onChange={handleChange}
                        />
                        <div style={{ color: 'red' }}>{errors.starttime}</div>
                    </Label>

                    <Label> Duration:
                        <Select
                            id="duration" type="text" name="duration"
                            value={instructor.duration}
                            onChange={handleChange}
                        >
                            <option value="initial"> Pick Duration </option>
                            <option value="1">1 hrs </option>
                            <option value="2">1.5 hrs </option>
                            <option value="3">2 hrs </option>
                            <option value="4">2.5 hrs</option>
                            <option value="5"> 3 hrs </option>
                        </Select>
                        <div style={{ color: 'red' }}>{errors.duration}</div>

                    </Label>

                    <Label> Intensity:
                        <Select id="intensity" type="text" name="intensity"
                            value={instructor.intensity}
                            onChange={handleChange}
                        >
                            <option value="initial"> Pick Intensity </option>
                            <option value="1">Low</option>
                            <option value="2">Mid - Intense</option>
                            <option value="3">High Intense</option>
                            <option value="4">Weight lifting</option>
                        </Select>
                        <div style={{ color: 'red' }}>{errors.intensity}</div>
                    </Label>



                    <Label> Location:
                        <Input
                            id="location"
                            type="text"
                            name="location"
                            value={instructor.location}
                            onChange={handleChange}
                        />
                        <div style={{ color: 'red' }}>{errors.location}</div>
                    </Label>

                    <Label> Current number of attendees:
                        <Input
                            id="attendees"
                            type='number'
                            // type="text" 
                            // pattern="[1-9]*"
                            name="attendees"
                            value={instructor.attendees}
                            onChange={handleChange}
                        />
                        <div style={{ color: 'red' }}>{errors.attendees}</div>
                    </Label>

                    <Label> Max class size:
                        <Select id="maxsize" type="text" name="maxsize"
                            value={instructor.maxsize}
                            onChange={handleChange}
                        >
                            <option value="initial"> Pick size of you class </option>
                            <option value="10"> Up to 10 </option>
                            <option value="20"> Up to 20 </option>
                            <option value="30"> Up to 30 </option>
                            <option value="40"> Sports Event </option>
                        </Select>
                        <div style={{ color: 'red' }}>{errors.maxsize}</div>
                    </Label>


                    <Button type='submit' disabled={buttonDisabled} > SUBMIT </Button>

                </FormGroup>
            </ModalContainer>
        </ComponentContainer >
    );
}

export default Instructor;

// - `Name`
// - `Type`
// - `Start time`
// - `Duration`
// - `Intensity level`
// - `Location`
// - `Current number of registered attendees`
// - `Max class size`

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
