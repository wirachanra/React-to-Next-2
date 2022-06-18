import { useRouter } from 'next/router';
import { useSelector } from "react-redux";
import { useEffect } from 'react'
// import { Navigate } from "react-router-dom";

function ProtectedPage({
    children , 
    needLogin = false,
    guestOnly = false,
    authRoles = []
}) {

    

    const userSelector = useSelector((state) => state.auth)
    // alert(needLogin)
    // alert(userSelector?.id)

    
    const router = useRouter()
    //wajib login
    useEffect(()=>{
    if(needLogin && !userSelector?.id)
    {
        router.replace("/LoginPage")
        // return <Navigate to="/login" />
    }

    //guest only, ga boleh login
    if(guestOnly && userSelector.id)
    {
        router.replace("/")
        // return <Navigate to="/" />
    }

    //hanya yang punya role ini
    if(authRoles.length && !authRoles.includes(userSelector.role))
    {   
        userSelector.role === "admin"? 
        router.replace("/BandPage") :  
        userSelector.role === "user" ? 
        router.replace("/HomeUser") : router.replace("/")
        
        // return <Navigate to="/" />
    }
    },[])
    return children
}

export default ProtectedPage;