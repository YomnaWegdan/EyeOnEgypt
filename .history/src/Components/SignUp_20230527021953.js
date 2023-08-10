import React from 'react'
import { useState ,useEffect , useRef } from 'react';
import logo2 from '../images/EyeOnEgypt2.png'
import logo from '../images/Group 33091.png';import './ImagesBackGround.css'
import {   Button , Form , Row , Col} from 'react-bootstrap';
import { FcGoogle } from 'react-icons/fc';
import { MdOutlineMail } from 'react-icons/md';
import { BsLock } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const SignUp = () => {
    const [mail , setMail] = useState('');
    const [password , setPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');

    

  return (
    <div style={{overflowX:'hidden'}}>
    <Row  style={{Overflow:'hidden'}} >
    <Col sm={8}>
    <div
    className="background-sign" >
    <p style={{ fontWeight: '650px', textAlign:'center', marginTop:'30%',width:'400px',color:'#644F0A',
    fontSize: '36px' , lineHeight: '150%'}}><span style={{color: '#3C2F06' , fontWeight:'bold'}}>Discover</span>  a new adventure in Egypt with Us</p>
</div>
    </Col>
    <Col sm={4} className = 'pt-3' >
    
    
    <Form   className='loginForm  ' style={{ marginLeft:'60px' , marginRight:'60px' , marginTop:'100px'  }}>
        <img src={logo2}  className=' w-50 h-50  mb-4 me-3' style={{marginLeft:'24%'}} alt='logo'/>
        <img src={logo}  className=' w-50 h-50  mb-4 me-3' style={{marginLeft:'24%'}} alt='logo'/>

    <div className='text-center mb-5 fw-bold'style={{ color: '#644F0A', }}>Create an Account</div>

    <Form.Group className="mb-3" controlId="formBasicEmail">
    <MdOutlineMail style={{position:'absolute' , marginTop:'11px' , marginLeft:'6px' , color:'#644F0A'}}/>
    <Form.Control type="email" className='px-4' placeholder="Email" onChange={(e)=> setMail(e.target.value)} value={mail}/>
    </Form.Group>
    <Form.Group className="mb-4" controlId="formBasicPassword">
    <BsLock style={{position:'absolute' , marginTop:'11px' , marginLeft:'6px', color:'#644F0A'}}/>

        <Form.Control type="password" placeholder="Password" className='px-4' onChange={(e)=> setPassword(e.target.value)} value={password}/>
    </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicPassword">
                <BsLock style={{position:'absolute' , marginTop:'11px' , marginLeft:'6px', color:'#644F0A'}}/>

                    <Form.Control type="password" placeholder="Confirm Password"  className='px-4' onChange={(e)=> setConfirmPassword(e.target.value)} value={confirmPassword}/>
                </Form.Group>
                
                <Button type="submit" className='btn w-100 mb-5' style={{ background: 'orange',color:'#644F0A' , border: 'none'}}> <NavLink to="/" style={{ color: '#644F0A', textDecoration:'none'}}  >Sign Up</NavLink></Button>

                <div style={{borderColor:'black' , color:'#644F0A'}} className='mb-4 text-center  '>Already have an account ? <NavLink  className="nav-link d-inline-block" to="/login"> Login</NavLink> </div>


             {/*   <Button className='btn  w-100 mb-3 text-black-50 bg-white'  style={{border : '1px solid orange'}}> 
                <div className='' style={{marginRight:'28%'}}>
                    <FcGoogle size={20} className='me-5' />
                    <span className='text-center fw-bold text-black-20' style={{ color:'#644F0A'}}>Google</span>  </div> 
                </Button>
                <Button className='w-100 text-black-50 bg-white' style={{border : '1px solid orange'}} > 
                <div className='' style={{marginRight:'25%'}}>
                <GrFacebookOption color='#2525e6' size={20} className='me-5'/>
                <span className='text-center fw-bold ' style={{ color:'#644F0A'}}>Facebook</span>
                </div>
  </Button> */}
                </Form>
            </Col>
        </Row></div>
)
}

export default SignUp


//            <img src={sign} alt='' height='673px'  width='100%' />
