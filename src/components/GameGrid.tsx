import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { useGames } from '../hooks/useGames'
import { GameCard, GameCardSkeleton } from './GameCard'

const SKELETON_ITEMS = [1, 2, 3, 4, 5, 6]

export const GameGrid = () => {
  const { games, error, isLoading } = useGames()

  return (
    <Box as="section" p={5}>
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
