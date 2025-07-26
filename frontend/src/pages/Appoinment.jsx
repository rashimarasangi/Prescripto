import React, { useState } from 'react'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { useEffect } from 'react'
import { assets } from '../assets/assets'

const Appoinment = () => {

  const {docId} = useParams()
  const {doctors} = useContext(AppContext)

  const [docInfo,setDocInfo] = useState(null)

  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc.id === docId)
    setDocInfo(docInfo)
    console.log(docInfo)

  }

  useEffect(()=>{
fetchDocInfo()
  },[doctors,docId])
  return docInfo && (
    <div>
      {/*-------doctor details-----*/}
      <div>
        <div>
          <img src={docInfo.image} alt="" />
        </div>

        <div>
         {/*---doc info----*/}
         <p>{docInfo.name} <img src={assets.verified_icon} alt="" /> </p>

         <div>
          <p>{docInfo.degree} - {docInfo.speciality}</p>
          <button>{docInfo.experience}</button>
         </div>

         {/*---- doc about----*/}
         <div>
          <p>About <img src={assets.info_icon} alt="" /> </p>
          <p>{docInfo.about}</p>
         </div>


        </div>
      </div>
    </div>
  )
}

export default Appoinment
