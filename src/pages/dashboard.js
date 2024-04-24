import React, { useEffect, useState } from 'react'

export default function dashboard() {
  let [username,setUsername] =  useState('')
  useEffect(()=>{
    if(localStorage) setUsername(localStorage.getItem('username'))
  },[localStorage])
  return (
    <div>
      Hello {username}, You are at dashboard 
    </div>
  )
}
