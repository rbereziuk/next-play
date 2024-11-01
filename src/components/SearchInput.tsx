import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FormEvent, useRef } from 'react'
import { BsSearch } from 'react-icons/bs'

interface Props {
  onSubmitSearch: (searchText: string) => void
}

export const SearchInput = ({ onSubmitSearch }: Props) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (inputRef.current) {
      onSubmitSearch(inputRef.current.value)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="search-games-form">
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          borderRadius={20}
          placeholder="Search games..."
          variant="filled"
          ref={inputRef}
        />
      </InputGroup>
    </form>
  )
}
