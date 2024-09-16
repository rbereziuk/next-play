import { HStack, Image, Text } from "@chakra-ui/react";
import logo from '../assets/nexp-play-logo.png'

function NavBar() {
  return (
    <HStack>
      <Image src={logo} boxSize='100px' />
      <Text>NavBar</Text>
    </HStack>
  )
}

export default NavBar
