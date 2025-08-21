import React from 'react'
import { useParams } from 'react-router-dom'
const PagesPage = () => {
    const params = useParams()
    console.log( params);
    
  return (
    <div>
      <h1>admin page {params.profileId}</h1>
    </div>
  )
}

export default PagesPage
