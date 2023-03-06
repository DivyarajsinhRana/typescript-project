import React from 'react'
import {Outlet} from 'react-router-dom'

const Profile:React.FC = () => {
  return (
    <>
    <div>Profile</div>
    <Outlet />
    </>
  )
}

export default Profile