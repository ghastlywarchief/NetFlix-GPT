import React, { useState } from 'react'
import Body from './Body';

const Login = () => {

    const [formtype, setFormType] = useState(true);

    const handleClick = () =>{
        setFormType(!formtype);
    }

  return (
    <div>
        <Body/>
        <div className='bg-black bg-opacity-70 z-20 absolute w-1/4 top-[20%] left-[38%] m-auto'>
            <form className='p-20'>
                <h1 className='text-3xl text-white font-bold my-3'>{(formtype) ? "Sign In" : "Sign Up" }</h1>
                {(!formtype) && <input type='text' placeholder='User Name' className='w-full my-2 p-4 bg-transparent border border-gray-200 rounded text-gray-200'></input>}
                <input type='email' placeholder='Email Address' className='w-full my-2 p-4 bg-transparent border border-gray-200 rounded text-gray-200'></input>
                <input type='password' placeholder='Password' className='w-full my-2 p-4 bg-transparent border border-gray-200 rounded text-gray-200'></input>
                {(!formtype) && <input type='password' placeholder='Confirm Password' className='w-full my-2 p-4 bg-transparent border border-gray-200 rounded text-gray-200'></input>}
                <button className='bg-red-700 text-white w-full my-2 p-3 rounded font-bold'>{(formtype) ? "Sign In" : "Sign Up"}</button>
                <p className='text-white my-5' onClick={handleClick}>{(formtype) ? "New to Netflix? Sign up now" : "Already Registered! Sign In now"}</p>
            </form>
            
        </div>
    </div>
  )
}

export default Login;