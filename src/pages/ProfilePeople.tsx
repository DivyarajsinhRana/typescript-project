import React from 'react'
import { useParams } from 'react-router-dom';

const ProfilePeople:React.FC = () => {
    const {id} = useParams();
  return (
    <>
    <div>ProfilePeople</div>
    <div>id:{id}</div>
    </>
  )
}

export default ProfilePeople