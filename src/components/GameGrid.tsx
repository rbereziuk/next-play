import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import { useGames } from '../hooks/useGames'
import { GameCard } from './GameCard'

export const GameGrid = () => {
  const { games, error } = useGames()

  return (
    <Box as="section" p={5}>
      {error && <Text>{error}</Text>}
      <SimpleGrid as="ul" columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </Box>
  )
}
