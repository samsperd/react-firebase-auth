import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'

const Signin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signIn } = UserAuth()

  const navigate = useNavigate()


  const handleLogin = async () => {
    try {
      await signIn(email, password)
      navigate('/account')
      console.log('You are signed in');
    } catch (error) {
     console.log(error.message); 
    }
  }

  return (
    <div className='max-w-[700px] mx-auto my-16 p-4'>
      <div>
        <h1 className="text-2xl font-bold py-2">
          Sign in to your account
        </h1>
        <p className="py-2">
          Don't have an account yet? <Link to={'/signup'} className="underline"> Sign up </Link>
        </p>
      </div>
      <form onSubmit={handleLogin}>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>
            Email Address
          </label>
            <input onChange={(e) => setEmail(e.target.value)} value={email}  className='border p-3' type="email" />
        </div>
        <div className='flex flex-col py-2'>
          <label className='py-2 font-medium'>
            Password
          </label>
            <input onChange={(e) => setPassword(e.target.value)} value={password} className='border p-3' type="password" />
        </div>
        <button className='border border-blue-500 bg-blue-600 hover:bg-blue-500 w-full p-4 my-2 text-white'> Sign in</button>
      </form>
    </div>  )
}

export default Signin