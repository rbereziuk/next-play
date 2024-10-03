import { Card, CardHeader, Heading, Image } from '@chakra-ui/react'
import { Game } from '../types/Games'
import { PlatformsIcon } from './PlatformsIcon'

interface Props {
  game: Game
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card as="li" borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardHeader>
        <Heading size="md">{game.name}</Heading>
        <PlatformsIcon
          platforms={game.parent_platforms.map((p) => p.platform)}
        />
      </CardHeader>
    </Card>
  )
}
