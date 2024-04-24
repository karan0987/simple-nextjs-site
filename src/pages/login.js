import React, { useState } from 'react'
import axios from 'axios'
import { useRouter } from 'next/navigation'

export default function (props) {
    const router = useRouter()
    const [FormData, setFormData] = useState({ username: '', password: '' })
    const inputChange = (e) => {
        setFormData({ ...FormData, [e.target.name]: e.target.value });
    }
    const submitForm = (e) => {
        e.preventDefault()
        axios.post(`https://mallucoder.xyz/projects/demo/Gdk/backend/api/login.php`,FormData)
        .then((res)=>{
            let data = res.data
            switch (data.code) {
                case 200:
                    localStorage.setItem('username',data.data.username)
                    router.push('/dashboard')
                    break;
                default:
                    alert(data.message)
                    break;
            }
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