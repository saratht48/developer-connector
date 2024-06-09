import { useState } from 'react'
import './Index.css'
import Profiles from './Profiles'
const Profile=()=>{

    const [data,setData]=useState([
        {
            name:'Brad Traversy',
            image:'/assets/profile1.jpg',
            profile:'Instructor at travery media',
            skills:['HTML','CSS','JS','PHP'],
            qualification:'Buston, MA'
        },
        {
            name:'John Doe',
            image:'/assets/profile2.jpg',
            profile:'Junior Developer at ABC tech',
            skills:['HTML','CSS','JS']
        }
    ])
    return(
        <div className='page-container'>
            <h1>Developers</h1>
            <p>Browse and Connect with developers</p>
            <div className='profile-wrapper'>

            {
                data.map((profile,index)=>
                    <Profiles key={index} profile={profile}/>
                )
            }

            </div>
        </div>
    )
}

export default Profile