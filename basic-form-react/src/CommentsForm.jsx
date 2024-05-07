// import { useState } from "react"

// export default function CommentsForm ({addNewComment}) {

//     let [ formData,setFormData ] = useState({
//         username:"",
//         remarks:"",
//         rating:5,
//     });

//     let handleInputChange =(event) => {
        

//         setFormData((currData) => {

//             return{...currData, [event.target.name]: event.target.value};
//         });
//     };

//     let handleSubmit = (event) =>{
//         if(!formData.username) {
//             console.log("username is null");
//             event.preventDefault();
//             return;
//         }
//         console.log(formData);
//         addNewComment(formData);
//         setFormData({
//             username:"",
//             remarks:"",
//             rating:5
//         });

//     }


//     return(
//         <div>
//         <h4>Give a comment!</h4>
//         <form onSubmit={handleSubmit}>
//             <label htmlFor="username" >username</label>
//             <input type="text" placeholder="username" id="username" name="username" value={formData.username} onChange={handleInputChange} />
//             <br /><br />

//         <label htmlFor="remarks" >Remarks</label>
//             <textarea value={formData.remarks } placeholder="remarks" onChange={handleInputChange} id="remarks" name="remarks">Remarks</textarea>
//             <br /><br />

//         <label htmlFor="rating" >Rating</label>
//             <input type="number" placeholder="rating" min={1} max={5} value={formData.rating} onChange={handleInputChange} id="rating" name="rating"/>
//             <br /><br />

//             <button>Add Comment</button>
//         </form>
//         </div>
//     )
// }


import { useState } from "react";
import { useFormik } from "formik";

const validate = values => {
    const errors = {};
    if (!values.username) {
      errors.username = 'Username can not be empty!';
    }
return errors;
};


export default function CommentsForm({addNewComment}){
    // let [formData, setFormData] = useState({
    //     username: "",
    //     remarks: "",
    //     rating: 5
    // });

    const formik = useFormik({
        initialValues: {
            username: '',
            remarks: '',
            rating: 5,
        },
        validate,
        onSubmit: values => {
        alert(JSON.stringify(values, null, 2));
        },
    });



    // let handleInputChange = (event) => {
    //     setFormData((currData) =>{
    //         return {...currData, [event.target.name]: event.target.value};
    //      });
    //  };

    
    // let handleSubmit = (event) => {
    //     console.log(formData);
    //     addNewComment(formData);
    //     event.preventDefault();
    //     setFormData ({
    //         username: "",
    //         remarks: "",
    //         rating: 5,
    //     });
    // };

    return(
        <div>
            <h4>Give a comment</h4>
            <form onSubmit= {formik.handleSubmit}>
                <label htmlFor="username">Username</label>
                <input 
                    placeholder="username" 
                    type="text" 
                    value={formik.values.username} 
                    onChange={formik.handleChange}
                    id="username"
                    name="username"
                />
                {formik.errors.username ? <p style={{color : "red"}}>{formik.errors.username}</p> : null}
                <br></br>
                <br></br>
                
                <label htmlFor="remarks">Remarks</label>
                <textarea 
                    placeholder="add few remarks"
                    value={formik.values.remarks} 
                    onChange={formik.handleChange}
                    id="remarks"
                    name= "remarks"
                ></textarea>
                <br></br>
                <br></br>

                
                <label htmlFor="rating">Rating</label>
                <input 
                    placeholder="rating" 
                    type="number" 
                    min={1} 
                    max={5}
                    value={formik.values.rating} 
                    onChange={formik.handleChange}
                    id="rating"
                    name="rating"
                />
                <br></br>
                <br></br>

                <button type="submit">Add Comment</button>
            </form>
        </div>
    )
}