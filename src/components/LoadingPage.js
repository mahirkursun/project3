import React, { useEffect } from 'react'
import loading from '../loading/loading.gif'
import { useNavigate } from 'react-router-dom'

const LoadingPage = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    setTimeout(()=>{
      navigate("bilgeadam/main")
    },3000)
  })
  return (
    <>
      <img src={loading} alt='loading'/>
    </>
  )
}

export default LoadingPage