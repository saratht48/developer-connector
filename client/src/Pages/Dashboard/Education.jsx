import Button from "../../Components/Common/Button"
import { Eduheading } from "../../Constants/Educationheading"
const Education=()=>{
    return(
        <div className="table-wrapper">
        <table>
            <thead>
                <tr>
                   {
                    Eduheading.map((item)=>
                        <th>{item}</th>
                    )
                   }
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Cusat</td>
                    <td>MCA</td>
                    <td>1/2/2021 - 3/4/2024</td>
                    <td><Button value="Delete" className="red"/></td>
                </tr>
            </tbody>
        </table>
    </div>
    )
}

export default Education