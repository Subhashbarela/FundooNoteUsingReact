import React from 'react'
import './SignIn.css'
import { useNavigate } from 'react-router-dom';
import { TextField } from '@mui/material';

export default function SignIn() {  
    let navigate = useNavigate();   
    const navigateToSignUp = () =>{
        navigate("/signup");
    } 
    return (
        <div className="loginPage">
            <div className="mainContent">
                <div className="loginContent">
                    <div className="GoogleTitle">
                    <span className="letterG"><h2>G</h2></span> 
                     <span className="letterO"><h2>O</h2></span>
                     <span className="letterOO"><h2>O</h2></span>
                     <span className="letterG"><h2>G</h2></span>
                     <span className="letterL"><h2>L</h2></span>
                     <span className="letterE"><h2>E</h2></span>
                    </div>
                    <div className="signInText">
                        Sign In
                    </div>
                    <div className="GoogleText">
                        Use Your Google Account
                    </div>
                    <form className='formBlock'>
                        <div className="emailBlock">
                            <TextField label="First name"  variant="outlined" size="small" required />
                        </div>
                        <div className="passwordBlock">
                            <TextField label="Password" variant="outlined"  size="small" required type="password" />
                            <a href="#" className='linkText'>Forget Password?</a>
                        </div>
                    </form>
                    <div className="buttonBlock">
                        <div className="createAccBtn">
                            <a href="#" onClick={navigateToSignUp}>Create account</a>

                        </div>
                        <div>
                            <button className="nextBtn" variant="contained" >Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
