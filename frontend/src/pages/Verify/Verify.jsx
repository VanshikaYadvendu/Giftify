import React from 'react'
import './verify.css'
import { useSearchParams } from 'react-router-dom'

const Verify = () => {

    const [searchParams,setSearchParams] = useSearchParams();
    const success = searchParams.get("success");
    const orderId = searchParams.get("orderId");
    

  return (
    <div>

    
    </div>
  )
}

export default Verify