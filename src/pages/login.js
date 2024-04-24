import React, { useState } from 'react'
import axios from 'axios'

export default function (props) {
    const [FormData, setFormData] = useState({ username: '', password: '' })
    const inputChange = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value });
    }
    const submitForm = (e) => {
        e.preventDefault()
        axios.post(`https://mallucoder.xyz/projects/demo/Gdk/backend/api/login.php`,FormData)
        .then((res)=>{
            console.log(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
    return (
        <>
            <form onSubmit={submitForm}>
                <center>                
                    <input required name='username' placeholder='Enter username here' style={{margin:'20px'}} type="text" onChange={inputChange}  value={FormData.username}/>
                    <br />
                    <input required name='password' placeholder='Password' style={{ margin: '20px' }} type="password" onChange={inputChange}  value={FormData.password}/>
                    <br />
                    <button type="submit">Login</button></center>
            </form>
        </>
    )
}