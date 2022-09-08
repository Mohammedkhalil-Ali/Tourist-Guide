
import React, { Fragment } from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Users from '../data/user.json'
import { useDispatch } from 'react-redux';
import {login} from '../app/Slice/login'
import { useFormik } from 'formik';
import * as Yup from 'yup';


export default function Signin() {
    const dispatch=useDispatch()
    const navigate=useNavigate()

    // function checkUser(){
    //     for(let index=0;index<User.length;index++){
    //         if(User[index].email==form.email&&User[index].password==form.password){
    //             setError('')
    //             dispatch(login(User[index]))
    //             navigate('/');
    //         }else{
    //             setError('Error')
    //         } 
    //     }
    // }

    // function loginData(event){
    //     let value=event.target.value;
    //     let name=event.target.name;
    //     setForm((values)=>({...values,[name]:value}))
    // }
    const formik = useFormik({
        initialValues: {
            email: '',
            username: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(20, 'Must be under 20 charecter')
                .required('Write your username'),

            email: Yup.string()
                .email('Wrong Email')
                .required('Write an email'),
            password: Yup.string()
                .required('Write Password')
                .min(6, 'At least 6 charecter')
                .max(20, 'Must be under 20 charecter'),
            confirmPassword: Yup.string()
                .required('Write the Repeat Password')
                .oneOf([Yup.ref('password'), null], 'Passwords are diffrent'),
        }),

        onSubmit: (values) => {
            
            const newuser = {
                "id": Users.length + 1,
                "userName": `${values.username}`,
                "email": `${values.email.toLowerCase()}`,
                "password": `${values.password}`,
                "UserImage": `https://i1.sndcdn.com/avatars-000255771415-dx5rag-t500x500.jpg`
            }
            Users.push(newuser)
            dispatch(login(newuser));
            navigate('/');

        },
    });
  return (
    <Fragment>
        <div className='w-full h-screen flex justify-center items-center bg-slate-50'>
            <form className="bg-green-200 w-80 px-2 py-4 rounded-md" onSubmit={formik.handleSubmit}>
                <input 
                    type="text" 
                    className='w-full h-9 px-3 bg-white rounded-md my-1 outline-none border-none' placeholder='Username'  
                    name="username"
                    required
                    {...formik.getFieldProps('username')}
                />
                {formik.errors.username ? (
                            <p className="text-red-800 p-1 drop-shadow-lg"> {formik.errors.username}</p>
                        ) : null}
                <input 
                    type="email"
                    className='w-full h-9 px-3 bg-white rounded-md my-1 outline-none border-none' placeholder='Email'  
                    name="email"
                    {...formik.getFieldProps('email')}
                 />
                 {formik.touched.email && formik.errors.email ? (
                            <p className="text-red-800 p-1 drop-shadow-lg"> {formik.errors.email}</p>
                        ) : null}
                <input 
                    type="text"
                    className='w-full h-9 px-3 bg-white rounded-md my-1 outline-none border-none' placeholder='Password'  
                    name="password"
                    {...formik.getFieldProps('password')}
                 />
                 {formik.touched.password && formik.errors.password ? (
                            <p className="text-red-800 p-1 drop-shadow-lg"> {formik.errors.password}</p>
                        ) : null}
                <input 
                    type="text" 
                    className='w-full h-9 px-3 bg-white rounded-md my-1 outline-none border-none' placeholder='Repeat Password'  
                    name="repassword"
                    {...formik.getFieldProps('confirmPassword')}
                />
                {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                            <p className="text-red-800 p-1 drop-shadow-lg"> {formik.errors.confirmPassword}</p>
                        ) : null}
                <button type='submit' className="butn w-full cursor-pointer bg-green-500 hover:bg-green-600 transition-all duration-300 flex items-center justify-center py-2 mt-2 text-white text-center h-10 rounded-md" >Sign In</button>
            <Link to='/signin'><p className='text-center mt-2 text-blue-700' >Sign In</p></Link>
            </form>
        </div>
    </Fragment>
  )
}

