import React, { useState  } from 'react'; 
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css'; 
import axios from 'axios';
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
const EmployeeForm = () => { 
  const navigate = useNavigate();
  const [disable,setDisable]=useState(false);
  const [isexist,setIsexist]=useState(false);
    const [user,Setuser]=useState({
    fname:'',
    lname:'',
    dept:'',
    position:'',
    mobile_no_1:'',
    mobile_no_2:'',
    email:'',
    website:''
    });
    const { handleSubmit, register, formState: { errors } } = useForm();
    const handleChange = (e) =>
    {
     Setuser({...user,[e.target.name]:e.target.value});
    }
    const checkEmailexist = async(e) =>
    {
      
      var email=e.target.value;
    
      const response = await axios.get("https://service.fuyucorp.com:4010/checkexist?email="+email);
      console.log(response.data.is_exist);
      const is_exist = response.data.is_exist;
      if(is_exist)
      {
        setIsexist(true);
      }
      else
      {
        setIsexist(false);
      }
      console.log(response);
      console.log(response);
    }
    const onSubmit = async(values) => {
      setDisable(true);
        const response = await axios.post("https://service.fuyucorp.com:4010/addEmp",user);
      
        console.log(response.data.id);
        navigate(`/card/${response.data.id}`);
    };

return ( 

	<div style={{ display: 'block', 
				width: 700, 
				padding: 30 }}> 
	<h4>Create Virtual Card</h4> 
	<Form onSubmit={handleSubmit(onSubmit)}> 
	<Form.Group> 
		<Form.Label>First Name</Form.Label> 
		<Form.Control type="text" name="fname" {...register("fname", {
             required: "* Firstname is required"
           })}   value={user.fname} onChange={handleChange} autoComplete='off'/> 
              <span className='text-danger'>{errors.fname && errors.fname.message}</span>
		</Form.Group> 
		<Form.Group> 
		<Form.Label>Last Name</Form.Label> 
		<Form.Control type="text" name="lname" {...register("lname", {
             required: "* Lastname is required"
           })} value={user.lname} onChange={handleChange} autoComplete='off'/> 
           <span className='text-danger'> {errors.lname && errors.lname.message}</span>
		</Form.Group> 
        <Form.Group> 
		<Form.Label>Department</Form.Label> 
		<Form.Control type="text" name="dept"  {...register("dept", {
             required: "* Department is required"
           })} value={user.dept} onChange={handleChange} autoComplete='off'/> 
               <span className='text-danger'>{errors.dept && errors.dept.message}</span>
		</Form.Group>
		<Form.Group> 
		<Form.Label>Designation</Form.Label> 
		<Form.Control type="text" name="position" {...register("position", {
             required: "* Designation is required"
           })} value={user.position} onChange={handleChange} autoComplete='off'/>
            <span className='text-danger'>  {errors.position && errors.position.message} </span>
		</Form.Group> 
        <Form.Group> 
		<Form.Label>Singapore Mobile Number</Form.Label> 
		<Form.Control type="number" name="mobile_no_1" {...register("mobile_no_1", {
             required:"* Singapore Mobile Number is required"
           })} value={user.mobile_no_1} onChange={handleChange} autoComplete='off'/>
              <span className='text-danger'>{errors.mobile_no_1 && errors.mobile_no_1.message}</span>
		</Form.Group> 
        <Form.Group> 
		<Form.Label>Malayasia Mobile Number</Form.Label> 
		<Form.Control type="number" name="mobile_no_2" {...register("mobile_no_2", {
            required:"* Malaysia Mobile Number is required"
           })} value={user.mobile_no_2} onChange={handleChange} autoComplete='off'/>
           <span className='text-danger'>{errors.mobile_no_2 && errors.mobile_no_2.message}</span>
		</Form.Group> 
        <Form.Group> 
		<Form.Label>Email</Form.Label> 
		<Form.Control type="email" name="email"   {...register("email", {
             required: "* Email is required",
             pattern: {
               value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
               message: "invalid email address"
             }
           })} value={user.email} onChange={handleChange}  onBlur={checkEmailexist}autoComplete='off'/>
           <span className='text-dangers'>{errors.email && errors.email.message}</span>
		</Form.Group>
        <Form.Group> 
		<Form.Label>Website</Form.Label> 
		<Form.Control type="text" name="website"  {...register("website", {
             required: "* Website is required"
           })} value={user.website} onChange={handleChange} autoComplete='off'/>
        <span className='text-danger'>{errors.website && errors.website.message}</span>
		</Form.Group>  
        <br/>
     <button type="submit" disabled={disable} 
     className={disable ? "btn btn-danger btn-lg disable" : "btn btn-danger btn-lg allowed" }>Submit</button>
	</Form> 
	</div> 

); 
}

export default EmployeeForm;