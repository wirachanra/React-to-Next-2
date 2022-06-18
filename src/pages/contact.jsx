import { Box, Center, Input, Button, Textarea} from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";

export default function contact (){
 return (
  <>
  <Navbar />
  <Center>
   <Box>
    <h1>Contact</h1>
    Nama
    <Input></Input>
    email
    <Input></Input>
    Deskripsi
    <Textarea></Textarea>
    <Button>Send</Button>
   </Box>
  </Center>
  </>
 )
}

