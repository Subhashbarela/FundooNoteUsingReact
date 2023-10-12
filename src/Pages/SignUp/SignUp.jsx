import React, { useState } from 'react'
import './SignUp.css'
import image from '../../Assets/logo.png'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'
import { signup } from '../../Service/UserService';
import { useNavigate } from 'react-router-dom'
const validFirstName =new RegExp('^[A-Z]{1,}[A-Za-z]{3,}$');
const validLastName=new RegExp('^[A-Za-z]{1,}$');
const validEmail=new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
const validPassword=new RegExp('^(?=.*?[A-Za-z])(?=.*?[0-9]).{8,}$');

 function SignUp() {
    const[data,setData]=useState({FirstName:" ",LastName:" ",
    EmailId:" ", Password:" "});
    const[regexObj,setvalidationObj]=useState({firstNameBorder:false,firstNameHelper:'',lastNameBorder:false,lastNameHelper:'',emailBorder: false, emailHelper: '', passBorder: false, passHelper:'',confirmPassBorder:false,confirmPassHelpers:''})

    const handleFirstName=(firstName)=>{
        setData(prevState => (
            {
                ...prevState,
                FirstName:firstName.target.value
            }
        ))
    }
    const handleLastName=(lastName)=>{
        setData(prevState =>(
            {
                ...prevState,
                LastName:lastName.target.value
            }
        ))
    }
    const handleEmail=(email)=>{
        setData(prevState=>(
            {
                ...prevState,
                EmailId:email.target.value
            }
        ))
    }
    const handlePassword=(password)=>{
        setData(prevState=>(
            {
                ...prevState,
                Password:password.target.value
            }
        ))
    }   

    const verifySignUpData=async()=>{
        let checkFirstName=validFirstName.test(data.FirstName)
        let checkLastName=validLastName.test(data.LastName)
        let checkEmail=validEmail.test(data.EmailId)
        let checkPass=validPassword.test(data.Password)
        if(checkFirstName === false){
            setvalidationObj(prevState=>(
                {
                    ...prevState,
                    firstNameBorder:true,
                    firstNameHelper:'FirstName Should start with captial letter'
                }
            ))
        }
        else if (checkFirstName === true) {
            setvalidationObj(prevState => ({
                ...prevState,
                firstNameBorder: false,
                firstNameHelper: ''
            }))
        }

        if(checkLastName===false){
            setvalidationObj(prevState=>(
                {
                    ...prevState,
                    lastNameBorder:true,
                    lastNameHelper:'LastName should contain one character atleast'
                }
            ))
        }
      else  if(checkLastName===true){
            setvalidationObj(prevState=>(
                {
                    ...prevState,
                    lastNameBorder:false,
                    lastNameHelper:''
                }
            ))
        }

        if(checkEmail===false){
            setvalidationObj(prevState=>(
                {
                    ...prevState,
                    emailBorder:true,
                    emailHelper:'Enter a valid email'
                }
            ))
        }
        else if(checkEmail===true){
            setvalidationObj(prevState=>(
                {
                    ...prevState,
                    emailBorder:false,
                    emailHelper:''
                }
            ))
        }

        if(checkPass===false){
            setvalidationObj(prevState=>(
                {
                    ...prevState,
                    passBorder:true,
                    passHelper:'Password Should be atleast 8 characters'
                }
            ))
        }
       else if(checkPass===true){
            setvalidationObj(prevState=>(
                {
                    ...prevState,
                    passBorder:false,
                    passHelper:''
                }
            ))
        }        
      
        console.log(data);        

        if(checkFirstName === true && checkLastName === true && checkEmail === true && checkPass === true){
         signup(data).then((response) =>{
            navigateToSignIn();
            console.log(response)
         }).catch((error) =>{
            console.log(error)
         })        
        }
    } 

    let navigate = useNavigate();
    const navigateToSignIn = () =>{
            navigate("/")
    }
    return (
        <div className="signup-page">
            <div className="main-content">
                <div className="signup-block">
                    <div className="logo-head">
                        <span className="letterF">
                            <h2>F</h2>
                        </span> <span className="letterU">
                            <h2>u</h2>
                        </span><span className="letterN">
                            <h2>n</h2>
                        </span><span className="letterD">
                            <h2>d</h2>
                        </span><span className="letterO">
                            <h2>o</h2>
                        </span><span className="letterOO">
                            <h2>o</h2>
                        </span>
                    </div>
                    <div className="head-label"><p>Create your Fundoo Account</p></div>
                    <div className="fullname">
                        <TextField onChange={handleFirstName} label="First name" error={regexObj.firstNameBorder} helperText={regexObj.firstNameHelper} variant="outlined" size="small" />
                        <TextField onChange={handleLastName} label="Last name" error={regexObj.lastNameBorder} helperText={regexObj.firstNameHelper} variant="outlined" size="small" />
                    </div>
                    <div className="username">
                        <TextField onChange={handleEmail} label="Username" error={regexObj.emailBorder} helperText={regexObj.emailHelper} variant="outlined" fullWidth size="small" />
                        <small>You can use letters,numbers & periods</small>
                    </div>
                    <div className="current-email"><a href=" ">Use my current email address instead</a></div>
                    <div className="password">
                        <TextField onChange={handlePassword} label="Password" error={regexObj.passBorder} helperText={regexObj.passHelper} variant="outlined" size="small" />
                        <TextField onChange={handlePassword} label="Confirm" error={regexObj.confirmPassBorder} helperText={regexObj.confirmPassHelpers} variant="outlined" size="small" />
                        <small className="pass-text">Use 8 or more characters with a mix of letters, numbers & symbols</small>
                    </div>
                    <div className="show-password">
                        <input type={"checkbox"} value="Show password" />
                        <small>Show password</small>

                    </div>
                    <div className="buttons">
                        <span className="sign-in-btn"><a href=' ' className="link-text" onClick={navigateToSignIn}>Sign in instead</a></span>
                        <Button onClick={verifySignUpData} className=".next-button" variant="contained" >Next</Button>
                    </div>

                </div>
                <div className="side-logo">
                    <img src={image} alt="google account" className="side-logo-img" />
                    <p className="side-logo-text">One Account. All of Google working for you.</p>
                </div>
            </div>
        </div>
    )
}

export default SignUp