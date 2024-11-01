import { HStack, Image } from '@chakra-ui/react'
import logo from '../assets/nexp-play-logo.png'
import { ColorModeSwitch } from './ColorModeSwitch'
import { SearchInput } from './SearchInput'

interface Props {
  onSubmitSearch: (searchText: string) => void
}

function NavBar({ onSubmitSearch }: Props) {
  return (
    <HStack justifyContent="space-between" padding={5}>
      <Image src={logo} boxSize="60px" />
      <SearchInput onSubmitSearch={onSubmitSearch} />
      <ColorModeSwitch />
    </HStack>
  )
}

export default NavBar
