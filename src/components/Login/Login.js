import React, {  useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Navigate, useNavigate} from 'react-router-dom'
import  {Apilogin}  from '../../services/apilogin/apilogin'

import {ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';


function Login() {
  const [email, setEmail]=useState('admin@gmail.com')
  const [password, setPassword]=useState('1234567')
  const [emailCheck, setEmailCheck]=useState(false)
  const [passwordCheck, setPasswordCheck]=useState(false)
  const [passwordError, setPasswordError]=useState(false)

  const [userDetails, setUserDetails]=useState('')


  const navigate = useNavigate()




  const blurHandlerEmail=()=>{
    if (email==='')return setEmailCheck(true)
    setEmailCheck(false)
  }

  const blurHandlerPassword=()=>{
    if(password==='')return (setPasswordCheck(true), setPasswordError(false))
    setPasswordCheck(false)
    if (password.length<6)return (setPasswordError(true), setPasswordCheck(false))
    setPasswordError(false)
    
  }
 
  const onSubmit=()=>{
    if (!emailCheck && !passwordCheck){
    const user={
      email,
      password
    }
    Apilogin(user)
    .then(res=>{
      console.log(res)
      setUserDetails(res.data.user)
      localStorage.setItem("token", res.data.token)
      toast.success(res.data.message)
      navigate('/admin-dashboard')
    })
    .catch(err=>{
      console.log(err)
      toast.error(err.response.data.message)
    })


  }
}
 
const token=localStorage.getItem('token')
const checkToken=token===null

 
 useEffect(()=>{
  if (!checkToken){
  return navigate('/admin-dashboard')
} 
})
 
  



  return (
    <MDBContainer className="my-5">
      <ToastContainer />

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src='https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg' alt="login form" className='rounded-start w-100'/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>

              <div className='d-flex flex-row mt-2'>
                <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }}/>
                <span className="h1 fw-bold mb-0">Logo</span>
              </div>

              <h5 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}>Login into admin account</h5>

              { emailCheck&& <p style={{color:'red', textAlign:'left', margin:'0px'}}>*Required </p> }

                <MDBInput wrapperClass='mb-4' placeholder='Email address' id='usernam' type='email' size="lg" onBlur={blurHandlerEmail} value={email} onChange={(e)=>(setEmail(e.target.value))}/>
                { passwordCheck&& <p style={{color:'red', textAlign:'left', margin:'0px'}}>*Required </p> }
                { passwordError&& <p style={{color:'red', textAlign:'left', margin:'0px'}}>*password must be seven characters </p> }
                <MDBInput wrapperClass='mb-4' placeholder='Password' id='password' type='password' size="lg" style={{marginBottom:'0px'}} onBlur={blurHandlerPassword} value={password}  onChange={(e)=>(setPassword(e.target.value))}/>
               

              <MDBBtn className="mb-3 px-5" style={{height: '50px'}} color='dark' size='lg' onClick={onSubmit}>Login</MDBBtn>

              <div className='d-flex flex-row justify-content-start'>
                <a href="#!" className="small text-muted me-1">Terms of use.</a>
                <a href="#!" className="small text-muted">Privacy policy</a>
              </div>

            </MDBCardBody>
          </MDBCol>

        </MDBRow>
      </MDBCard>

    </MDBContainer>
  );
}



Login.propTypes = {};

Login.defaultProps = {};

export default Login;
