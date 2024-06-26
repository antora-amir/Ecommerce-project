import {Outlet, Navigate} from 'react-router-dom';
const ProtectedRoutesComponent= ({admin}) =>{
    const auth = false;
    if(admin){
        let adminAuth = true;
        if(adminAuth) auth = true;
    } else {
        let userAuth = true;
        if(userAuth) auth = true;

    }
    return auth ? <Outlet/> : < Navigate to ="/login" />;
};

export default ProtectedRoutesComponent