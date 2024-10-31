import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'
import { SortByOption } from '../types/GamesQuery'

const SORT_OPTIONS = [
  {
    id: 1,
    value: 'name',
    label: 'Name',
  },
  {
    id: 2,
    value: 'released',
    label: 'Release date',
  },
  {
    id: 3,
    value: 'added',
    label: 'Added',
  },
  {
    id: 4,
    value: 'created',
    label: 'Created',
  },
  {
    id: 5,
    value: '-rating',
    label: 'Rating',
  },
  {
    id: 6,
    value: '-metacritic',
    label: 'Metacritic',
  },
]

interface Props {
  onSelect(sortByOption: SortByOption): void
  sortByOption?: SortByOption
}

export const SortSelector = ({ onSelect, sortByOption }: Props) => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {sortByOption?.label || 'Ralevance'}
      </MenuButton>
      <MenuList>
        {SORT_OPTIONS.map((sortOption) => (
          <MenuItem onClick={() => onSelect(sortOption)} key={sortOption.id}>
            {sortOption.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  )
}
