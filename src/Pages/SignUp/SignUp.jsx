import React from 'react'
import './SignUp.css'
import image from '../../Assets/logo.png'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material'

export default function SignUp() { 

    return (
        <div className="signup-page">
            <div className="main-content">
                <div className="signup-block">
                <div className="GoogleTitle">
                    <span className="letterG"><h2>G</h2></span> 
                     <span className="letterO"><h2>O</h2></span>
                     <span className="letterOO"><h2>O</h2></span>
                     <span className="letterG"><h2>G</h2></span>
                     <span className="letterL"><h2>L</h2></span>
                     <span className="letterE"><h2>E</h2></span>
                    </div>
                    <div className="head-label"><p>Create your Google Account</p></div>
                    <div className="fullname">
                        <TextField label="First name" variant="outlined" size="small" />
                        <TextField label="Last name" variant="outlined" size="small" />
                    </div>
                    <div className="username">
                        <TextField  label="Username" variant="outlined" fullWidth size="small" />
                        <small>You can use letters,numbers & periods</small>
                    </div>
                    <div className="current-email"><a href="#">Use my current email address instead</a></div>
                    <div className="password">
                        <TextField  label="Password" variant="outlined" size="small" type="password" />
                        <TextField  label="Confirm" variant="outlined" size="small" type='password'/>
                        <small className="pass-text">Use 8 or more characters with a mix of letters, numbers & symbols</small>
                    </div>
                    <div className="show-password">
                        <input type="checkbox" value="Show password" />
                        <small>Show password</small>

                    </div>
                    <div className="buttons">
                        <span className="sign-in-btn"><a href='#'>Sign in instead</a></span>
                        <Button className=".next-button" variant="contained" >Next</Button>
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