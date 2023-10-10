import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import Navdrawer from '../NavDrawer/Navdrawer'
import SignIn from '../../Pages/SignIn/SignIn';
import SignUp from '../../Pages/SignUp/SignUp';


export default function Dashboard(){
    return(
        <Box style={{ display: 'flex', width: '100%' }}>
        <Router>
            <Navdrawer />         
    
            <Routes>        
                    {/* <Route exact path={"/"} element={<SignIn/>}></Route>
                    <Route exact path={"/signup"} element={ <SignUp/>}></Route>
                    <Route exact path= {"/dashboard"} element={<Dashboard/>}></Route> */}
            </Routes>
        </Router>
    </Box>
    )
}