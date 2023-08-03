import React from 'react'

import {useFormik} from "formik";
import { SignUpSchema } from './schemas';
import { AiFillContacts } from "react-icons/ai";


const Registration = () => {


    const initialValues = {
        name:'',
        email:'',
        password:'',
        Confirm_password:''
        
    }

        const {values,errors,touched,handleBlur,handleChange,handleSubmit} = useFormik({

            initialValues : initialValues,
            validationSchema:SignUpSchema,
            onSubmit : (values,action)=>{
                console.log(values); 
                action.resetForm()
            },
            
        }); 
        console.log(errors)
    
  return (
    <form onSubmit={handleSubmit} >
    <div>
      <h2>SignUp Form</h2>

      <div className='inputdiv'>
         <label htmlFor='name'>Name</label><br></br>
            <input 
            name='name'
            id='name' 
            placeholder='Name'
            value={values.name}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{padding:"17px"}}
             />
            

            { errors.name && touched.name ?( <p className='' style={{color:"red"}}>
            {errors.name}</p>):null}
            
      </div>
     

      <div >
        <label htmlFor='email'> Email</label><br></br>
            <input name='email' id='name' type='email'
            placeholder='Email'
                 value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{padding:"17px"}} />

            { errors.email && touched.email ?( <p className='' style={{color:"red"}}>
            {errors.email}</p>):null}
      </div>

      <div>
        <label htmlFor='password'>password</label><br></br>
          <input name='password' id='name' type='password'
          placeholder='Password'
             value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
                style={{padding:"17px"}}
          />
          { errors.password && touched.password ?( <p className='' style={{color:"red"}}>
            {errors.password} </p>):null}
      </div>

      <div>
        <label htmlFor='Confirm_password'>Confirm password</label><br></br>
             <input name='Confirm_password' id='name' type='password'
             placeholder='Confirm Password'
            value={values.Confirm_password}
            onChange={handleChange}
            onBlur={handleBlur}
             style={{padding:"17px"}}/>
             { errors.Confirm_password && touched.Confirm_password ?( <p className='' style={{color:"red"}}>
            {errors.Confirm_password}</p>):null}
      </div>

      <center><button name='btn' type='submit' id='btn'>Submit</button></center>
    </div>
    </form>
  )
}

export default Registration
