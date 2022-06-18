// import { useSelector } from "react-redux"
import BandSection from "../components/BandSection/BandSection"
import NavbarAdmin from "../components/Navbar/NavbarAdmin"
import ProtectedPage from "./ProtectedPage"

function BandPage() {

    // const userSelector = useSelector((state) => state.auth)

    // if(userSelector?.role !== "admin")
    // {
    // return <Navigate to="/" />
    // }

    return (
        <ProtectedPage needLogin={true} authRoles="admin">
        <NavbarAdmin/>
        <BandSection/>
        </ProtectedPage>
    )
}

export default BandPage