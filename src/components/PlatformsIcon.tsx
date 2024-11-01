import { HStack, Icon } from '@chakra-ui/react'
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from 'react-icons/fa'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { Platform } from '../types/Games'
import { IconType } from 'react-icons'

interface Props {
  platforms: Platform[]
}

const iconMap: { [key: string]: IconType } = {
  pc: FaWindows,
  playstation: FaPlaystation,
  xbox: FaXbox,
  nintendo: SiNintendo,
  mac: FaApple,
  linux: FaLinux,
  android: FaAndroid,
  ios: MdPhoneIphone,
  web: BsGlobe,
}

export const PlatformsIcon = ({ platforms }: Props) => {
  return (
    <HStack mt={1}>
      {platforms.map((platform) => (
        <Icon
          as={iconMap[platform.slug]}
          color="gray.500"
          key={platform.slug}
        />
      ))}
    </HStack>
  )
}
