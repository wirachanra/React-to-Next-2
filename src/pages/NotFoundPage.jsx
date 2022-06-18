import { Alert,AlertIcon } from "@chakra-ui/react"

function NotFoundPage(){
return ( 
<>
<div>
 <Alert status='error' textAlign="center">
    <AlertIcon />
    Error 404 Pages Not Found
  </Alert>
</div>
</>

)
}

export default NotFoundPage