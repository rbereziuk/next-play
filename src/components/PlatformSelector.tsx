import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { usePlatforms } from '../hooks/usePlatforms'
import { ParentPlatform } from '../types/ParentPlatform'

interface Props {
  onSelect(platform: ParentPlatform): void
  selectedPlatform?: ParentPlatform
}

export const PlatformSelector = ({ onSelect, selectedPlatform }: Props) => {
  const { data: platforms } = usePlatforms()
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms.map((platform) => (
          <MenuItem onClick={() => onSelect(platform)} key={platform.id}>
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
