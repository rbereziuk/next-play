import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from '@chakra-ui/react'
import { useGenres } from '../hooks/useGenres'
import { croppedImageUrl } from '../services/cropped-image-url'
import { Genre } from '../types/Genre'

interface Props {
  onSelect(genre: Genre): void
  selectedGenre?: Genre
}

export const GenreList = ({ onSelect, selectedGenre }: Props) => {
  const { data: genres, isLoading, error } = useGenres()

  if (isLoading) return <Spinner />
  if (error) return

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id}>
          <Button
            onClick={() => onSelect(genre)}
            variant="link"
            whiteSpace="normal"
            textAlign="left"
            fontWeight={selectedGenre?.slug === genre.slug ? 'bold' : 'normal'}
          >
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={croppedImageUrl(genre.image_background)}
                fit="cover"
              />
              <Text fontSize="lg">{genre.name}</Text>
            </HStack>
          </Button>
        </ListItem>
      ))}
    </List>
  )
}
