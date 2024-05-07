import { useState } from "react";

export default function Form (){
    // let [ fulName,setFulName ] = useState("");
    // let [ userName,setUserName ] = useState("");

    let [ formData,setFormData ] = useState({
        fulName:"",
        userName:"",
        password:""
    })

    // let handleNameChange = (event) => {
    //     setFulName(event.target.value);
    // }
    // let handleUserName = (event) => {
    //     setUserName(event.target.value);
    // }

    let handleInputChange =(event) => {
        
        //console.log(fieldName);
        

        setFormData((currData) => {
            currData[fieldName] = newValue;
            return{...currData, [event.target.name]: event.target.value};
        });

        
    };

    let handleSubmit = (event) =>{
        event.preventDefault();
        console.log(formData);
        setFormData({
            fulName:"",
            userName:"",
            password:""
        });

    }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="fulName">Full Name</label>
            <input type="text" placeholder="enter your name" value={formData.fulName}  id="fulName" name="fulName" onChange={handleInputChange}/>
            {/* name always set as State name */}
        <br /><br />
            <label htmlFor="userName">User Name</label>
            <input type="text" placeholder="enter your name" value={formData.userName}  id="userName" name="userName" onChange={handleInputChange}/>
            <button>submit</button>
        <br /><br />
            <label htmlFor="password">Password</label>
            <input type="text" placeholder="enter your password" value={formData.userName}  id="password" name="password" onChange={handleInputChange}/>
            <button>submit</button>
        </form>
    )
}