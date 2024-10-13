import React, { useContext } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import { Context } from "../contexts/AuthContext";

const Paths = () => {

    const {logado} = useContext(Context);

    return ( 
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    {
                        logado && (
                            <>
                                <Route path="/home" element={<Home/>}/>
                            </>
                        )
                    }
                    <Route path="/dashboard" element={<Dashboard />} />
                </Routes>
            </BrowserRouter>
        </>
     );
}
 
export default Paths;