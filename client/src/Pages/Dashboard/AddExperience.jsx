import { useState } from "react"
import Input from "../../Components/Common/Input"
import Label from "../../Components/Common/Label"
import Button from "../../Components/Common/Button"
import './Index.css'

const AddExperience=()=>{
    const [formData,setFormData]=useState(
       [ {
        title:'',
        company:'',
        location:'',
        fromdate:'',
        currentjob:'',
        todate:'',
        jobdescription:''
    }
    ]
    )
    const handleInputChange=(e,index)=>{
        const {name,value}=e.target
        const newForms = [...formData];
        newForms[index][name] = value;
        setFormData(newForms)
    }
    const handleAddForm = () => {
        setFormData([...formData, {
            title:'',
            company:'',
            location:'',
            fromdate:'',
            currentjob:'',
            todate:'',
            jobdescription:''
        }]);
      };
    return(
        <div className="container">
            <h1 className="teal">Add An Experience</h1>
            
            {
                formData.map((form,Index)=>
                <form key={Index} className="mb-4"> 
                <Input name="title" value={form.title} onChange={(e)=>handleInputChange(e,Index)} type="text"/>
                <Input name="company" value={form.company} onChange={(e)=>handleInputChange(e,Index)} type="text"/>
                <Input name="location" value={form.location} onChange={(e)=>handleInputChange(e,Index)} type="text"/>
                <Input name="fromdate" value={form.fromdate} onChange={(e)=>handleInputChange(e,Index)} type="date"/>
                <div>
                <Input name="currentjob" value={form.currentjob} onChange={(e)=>handleInputChange(e,Index)} type="radio"/>
                <Label value="Current Job"/>
                </div>
                <Input name="todate" value={form.todate} onChange={(e)=>handleInputChange(e,Index)} type="date"/>
                <textarea value={form.jobdescription} name="jobdescription" onChange={(e)=>handleInputChange(e,Index)}/>
            </form>

                )
            }
            <Button value="Add More Experience" onClick={handleAddForm}/>
            <Button value="Submit"/>
        </div>
    )
}

export default AddExperience