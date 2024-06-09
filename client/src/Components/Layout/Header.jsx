import Menu from "../../Constants/Menu"
import { Link } from "react-router-dom";
import './Index.css'
const Header=()=>{
    return(
        <div className="header-wrapper">
            <div className="logo">
                {'</>'} DevConnector
            </div>
                <ul>
                    {
                        Menu.map((item,index)=>
                            <Link to={item.link} key={index}>
                            <li>{item.name}</li>
                            </Link>
                            
                        )
                    }
                </ul>
        </div>
    )
}
export default Header