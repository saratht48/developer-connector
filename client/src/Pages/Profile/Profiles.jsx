import Button from "../../Components/Common/Button"

const Profiles=({profile})=>{
    return(
        <div className="profiles">

        <div className="image-wrapper">
            <img src={profile.image}/>
        </div>
        <div className="profile-details">
           <div className="details">
           <h2>{profile.name}</h2>
            <p>{profile.profile}</p>
            <p>{profile?.qualification}</p>
            <Button value="View Profile" className="blue-btn"/>
           </div>
           <div className="skills">
            {
                profile?.skills?.map((skill,index)=>
                    <p>{skill}</p>
                )
            }
           </div>
        </div>
        </div>
    )
}

export default Profiles