import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useState } from 'react'
import { useEffect } from 'react'



const Appoinment = () => {

  const {docId} = useParams()
  const {doctors} = useContext(AppContext)

  const  [docInfo, setDocInfo] = useState(null)

  const fetchDocInfo = async ()=> {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo)
    console.log(docInfo) // This logs the value before setDocInfo updates state
  }

  useEffect(()=>{
    fetchDocInfo()
  },[doctors,docId])
  
  return (
    <div>
      
    </div>
  )
}

export default Appoinment
