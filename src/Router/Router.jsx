import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from '../Pages/SignUp/SignUp'
import SignIn from '../Pages/SignIn/SignIn'
import Dashboard from '../Component/Dashboard/Dashboard';
import { AuthRoute } from './AuthoRout';
import {ProtectedRout} from './ProtectedRout';
 

export const Router = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    {/* <Dashboard/> */}
                    <Route exact path={"/"} element={<AuthRoute><SignIn /></AuthRoute>}></Route>
                    <Route exact path={"/signup"} element={<AuthRoute><SignUp /></AuthRoute>}></Route>
                    <Route exact path= {"/dashboard"} element={<ProtectedRout><Dashboard/></ProtectedRout>}></Route>
                </Routes>
            </BrowserRouter>
        </div>        
    )
}