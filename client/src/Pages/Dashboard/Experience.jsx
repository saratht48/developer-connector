import Button from "../../Components/Common/Button"
import { expheading } from "../../Constants/Experienceheading"
const Experience=()=>{
    return(
        <div className="table-wrapper">
            <table>
                <thead>
                    <tr>
                       {
                        expheading.map((item)=>
                            <th>{item}</th>
                        )
                       }
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Vijaya</td>
                        <td>test</td>
                        <td>1/2/2021 - 3/4/2024</td>
                        <td><Button value="Delete" className="red"/></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
export default Experience