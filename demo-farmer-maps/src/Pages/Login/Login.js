import { useEffect, useState } from 'react';
import styles from './Login.module.css';
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/logo2.png";
import validate from './validate';
import { useFormik } from 'formik';

function Copyright(props) {
    return (
      <p className='text-center mt-4'>
        Copyright © 
        <a color="inherit" href="https://bharatrohan.in/">
          BharatRohan
        </a>  {new Date().getFullYear()}.
      </p>
    );
  }

function Login(){
    const navigate = useNavigate();
    const [formErrors, setFormErrors] = useState({});
    const [isDisabled, setIsDisabled] = useState(false);
    const [show , setShow] = useState(false);
    const formik = useFormik({
        initialValues : {
            email : '',
            password : ''
        },
    
        validate : (values) => {
            setFormErrors(validate(values));
        },
        onSubmit : async(values) => {
            if(values.email === 'admin@bharatrohan.in' && values.password === 'admin2016'){
                if(Object.keys(formErrors).length === 0){
                    navigate('/farmers');
                    NotificationManager.success("Login Completed", "Success", 2000);
                    console.log("Login done");
                }else{
                    NotificationManager.error("Incomplete Credentials", "Error", 2000);
                }   
            }
        },
        onReset : (values)=>{
            // console.log(values);
        }
    });
    
    useEffect(()=>{
        
    },[]);
    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper full-page-wrapper" style={{backgroundColor : 'rgb(25 60 52)'}}>
                <div className="content-wrapper d-flex align-items-center auth px-0">
                    <div className="row w-100 mx-0">
                        <div className="com-sm-6 col-md-6 col-lg-4 mx-auto">
                            <div className={`auth-form-light text-left py-5 px-4 px-sm-5 ${styles.loginContainer}`}>
                                <div className='text-center mb-3'>
                                    <img src={logo} height={150} width={200}/>
                                </div>
                              
                                    <form className="pt-3" onSubmit={formik.handleSubmit}>
                                        <div className="form-group">
                                            <input 
                                            type="email" 
                                            className={`form-control form-control-lg ${ formik.touched.email === true && formErrors.email ? styles.formInputError : ""}`}
                                            id="email" 
                                            placeholder="Email" 
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.email}
                                            />
                                             {formik.touched.email === true && formErrors.email ? <div className={styles.error}>{formErrors.email}</div> : ""}
                                        </div>
                                        <div className="form-group">
                                            <div className='input-group'>
                                                <input 
                                                    style={{textTransform : 'initial'}}
                                                    type={show === true ? 'text' : 'password'} 
                                                    className={`form-control form-control-lg ${ formik.touched.password === true && formErrors.password ? styles.formInputError : ""}`}
                                                    id="password" 
                                                    placeholder="Password"
                                                    onChange={formik.handleChange}
                                                    onBlur={formik.handleBlur}
                                                    value={formik.values.password} />

                                                <div className="input-group-append">
                                                    <button className={`btn btn-sm ${styles.showPasswordBtn}`} type="button" style={{color : show === true ? 'black' : 'grey' }}
                                                    onClick={() => setShow(!show)}
                                                    ><i className="typcn typcn-eye"></i></button>
                                                </div>
                                            </div>   
                                         
                                            {formik.touched.password === true && formik.touched.password && formErrors.password ? <div className={styles.error}>{formErrors.password}</div> : ""}
                                        </div>
                                        <div className="mt-3">
                                            <button className={`btn btn-block btn-lg font-weight-medium ${styles.btnLogin}`} type='submit' disabled={isDisabled}>SIGN IN</button>
                                        </div>
                                    </form>
                                    <Copyright/>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <NotificationContainer/>
        </div>
    );
}

export default Login;