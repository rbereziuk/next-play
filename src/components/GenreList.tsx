import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react'
import { useGenres } from '../hooks/useGenres'
import { croppedImageUrl } from '../services/cropped-image-url'

export const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres()

  if (isLoading) return <Spinner />
  if (error) return

  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} my={3}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={croppedImageUrl(genre.image_background)}
              fit="cover"
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  )
}
