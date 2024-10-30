import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { useGames } from '../hooks/useGames'
import { GameCard, GameCardSkeleton } from './GameCard'
import { ParentPlatform } from '../types/ParentPlatform'

interface Props {
  selectedGenre: string | null
  selectedPlatform: null | ParentPlatform
}

const SKELETON_ITEMS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

export const GameGrid = ({ selectedGenre, selectedPlatform }: Props) => {
  const {
    data: games,
    error,
    isLoading,
  } = useGames(selectedGenre, selectedPlatform)

  return (
    <Box as="section" p={5} pl={0}>
      {error && <Text>{error}</Text>}
      <SimpleGrid as="ul" columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {isLoading &&
          SKELETON_ITEMS.map((skeleton) => <GameCardSkeleton key={skeleton} />)}

        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
