import { RiAccountBoxFill } from "react-icons/ri"
import './Index.css'
import Button from "../../Components/Common/Button"
import Experience from "./Experience"
import Education from "./Education"

const Dashboard=()=>{
    return(
        <div className="container">
            <h1 className="teal">Dashboard</h1>
            <h3 className="title"><RiAccountBoxFill/>Welcom Brad Traversy</h3>
            <div className="btn-wrapper">
                <button><RiAccountBoxFill/>Edit Profile</button>
                <button><RiAccountBoxFill/>Add Experience</button>
                <button><RiAccountBoxFill/>Add Education</button>      
            </div>
            <h3 className="title px-3">Experience Credentials</h3>
            <Experience/>
            <h3 className="title px-3">Educatiional Credentials</h3>
            <Education/>
            <Button value="Delete My Account" className="red"/>
        </div>
    )
}

export default Dashboard