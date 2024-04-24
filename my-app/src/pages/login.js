import React, { useState } from 'react'
import axios from 'axios'

export default function (props) {
    const [FormData, setFormData] = useState({ email: '', password: '' })
    const inputChange = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value });
    }
    const submitForm = (e) => {
        e.preventDefault()
        axios.post(`${process.env.NEXT_PUBLIC_API}/login`,FormData)
        .then((res)=>{
            console.log(res.data)
        })
    }
    return (
        <>
            <form onSubmit={submitForm}>
                <center>                
                    <input placeholder='Email' style={{margin:'20px'}} type="mail" onChange={inputChange} value={FormData.email} />
                    <br />
                    <input placeholder='Password' style={{ margin: '20px' }} type="password" onChange={inputChange} value={FormData.password} />
                    <br />
                    <button type="submit">Login</button></center>
            </form>
        </>
    )
}