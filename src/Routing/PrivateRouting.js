import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import NavBarComponent from '../Component/NavBarComponent'
function PrivateRouting() {
    let auth = {'token': true}
    
    return(
        auth.token ?
            <Outlet/> : 
         <>
            <Navigate to="/login"/>
         </>
         
    )
}

export default PrivateRouting