import React, { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom';
function Github() {
    const details = useLoaderData()
    // const [details,setDetails] = useState({});

    // useEffect(()=>{
    //     fetch("https://api.github.com/users/prashareet")
    //     .then((data)=>{
    //         return data.json()
    //     })
    //     .then((data)=>{
    //         setDetails(data)
    //     })
    // }, [])
  return (
    <div className=' bg-gray-800 text-white flex'>
        <div className=''>
            <h1 className=' m-2'>Github username: {details.name}</h1>
            <h1 className='m-2'>Bio : {details.bio}</h1>
        </div>
        <img src={details.avatar_url} className=' h-96 w-96'/>
    </div>
  )
}

export default Github

export  const githubInfoloader = async()=>{
    const response = await fetch ("https://api.github.com/users/prashareet")
    return response.json()
}