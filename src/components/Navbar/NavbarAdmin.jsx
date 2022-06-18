// import { Link } from 'react-router-dom'
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@chakra-ui/react';
import user_types from '../../redux/reducers/user/types';
import { useRouter } from 'next/router'


function NavbarAdmin() {
const userSelector = useSelector((state) => state.auth)
const dispatch = useDispatch();
const router = useRouter()

function btnlogout() {
  localStorage.removeItem("user_data")

  dispatch ({
    type: user_types.USER_LOGOUT
  })

  router.push("/")
}

  return (
    <nav>
      <div className="link-wrapper">
       <Link href="/BandPage">Home</Link> 
       <Link href="/CounterPage">Counter Page</Link>        
      </div>
    
      <div className="link-wrapper"> 
        {userSelector.id
        ? 
        <Link href="/BandPage" className="mx-3">
          <a>Hello {userSelector.username} </a>
        </Link>
        : null}
      {userSelector.id ? (
        <Button className='mx-3'  color='danger' onClick={btnlogout}>
          Logout
        </Button>
      ) 
      : (
        <Link href="/LoginPage" style={{ textDecoration: "none" }}>
          Login
        </Link>
      )}
      </div>
     
    </nav>
    
  )
}

export default NavbarAdmin;