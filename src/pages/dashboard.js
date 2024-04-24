import React from 'react'

export default function dashboard() {
  return (
    <div>
      Hello {localStorage && localStorage.getItem('username')} , You are at dashboard 
    </div>
  )
}
