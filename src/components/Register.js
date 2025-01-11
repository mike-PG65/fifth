import React, {useState} from 'react'
import '../App.css';

import { useNavigate } from 'react-router-dom';

function Register(){

    const [formData, setformData]=useState({
        firstName:'',
        lastName:'',
        username:'',
        email:'',
        password:'',
        confirmpassword:''
    });
    const navigate = useNavigate();

    const handleChange=(event)=>{
        const {name, value}=event.target
        setformData({
            ...formData,
            [name]:value
        });
    };

    const handleSubmit=(event)=>{
        event.preventDefault();


        let errors=[];
        let isValid=true;

        if(!formData.firstName){
            errors.push("First name is required")
            isValid=false
        }

        if(!formData.lastName){
            errors.push("Last name is required")
            isValid=false
        }
        if(!formData.username){
            errors.push("Username is required")
            isValid=false
        }
        if(!formData.password){
            errors.push("Password is required")
            isValid=false
        }
        if(formData.password !== formData.confirmpassword){
            errors.push("Passwords do not match")
        }

        if (!isValid){
            alert(errors.join('\n'))
        }else{

            localStorage.setItem('user', JSON.stringify(formData))
            navigate('\login')

            setTimeout(()=>{
                alert(`Welcome, ${formData.username}`)
            }, 500);
        };
    };


    return(
        <div className="vertical-container">
            <form onSubmit={handleSubmit}>
            <input
        type="text"
        placeholder="Enter your firstName"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        />

        <input
        type="text"
        placeholder="Enter your last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        />

        <input
        type="email"
        placeholder="Enter your Email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        />

        <input
        type="text"
        placeholder="Enter your username"
        name="username"
        value={formData.username}
        onChange={handleChange}
        />

        <input
        type="password"
        placeholder="Enter your password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        />

        <input
        type="password"
        placeholder="confirm your password"
        name="confirmpassword"
        value={formData.confirmpassword}
        onChange={handleChange}
        />

        <button type="submit"> Submit </button>

            </form>
        </div>
       
    );
};

export default Register;