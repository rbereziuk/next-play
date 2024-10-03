import { Card, CardHeader, Heading, HStack, Image } from '@chakra-ui/react'
import { Game } from '../types/Games'
import { PlatformsIcon } from './PlatformsIcon'
import { CriticStore } from './CriticStore'

interface Props {
  game: Game
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card as="li" borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardHeader>
        <Heading size="md">{game.name}</Heading>
        <HStack justify="space-between">
          <PlatformsIcon
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticStore score={game.metacritic} />
        </HStack>
      </CardHeader>
    </Card>
  )
}
