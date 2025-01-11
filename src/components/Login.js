import React, {useState} from 'react'
import '../App.css';


function Login(){
    const [formData, setformData]=useState({
        username:'',
        email:'',
        password:''
    })

    const [message, setmessage]=useState();

    const handleChange=(event)=>{
        const {name, value}=event.target
        setformData({
            ...formData,
            [name]:value
        });
    };

    const handleSubmit=(event)=>{
        event.preventDefault()

        const storedUser=JSON.parse(localStorage.getItem('user'))

        if(
            storedUser &&
            storedUser.username === formData.username &&
            storedUser.email === formData.email &&
            storedUser.password === formData.password
        ){
            setmessage("Login Sucessfull")
        }else{
            setmessage("Invalid email, username or password")
        };

    };

    return(
        <div className='vertical-container'>

            {message && <p>{message}</p>}

            <form onSubmit={handleSubmit}>

                <input
                type="text"
                placeholder="Enter your username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                />

                 <input
                type="email"
                placeholder="Enter your email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                />

                <input
                type="password"
                placeholder="Enter your Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                />

                <button type="submit"> Login </button>

                


            </form>
        </div>
    )


}

export default Login;