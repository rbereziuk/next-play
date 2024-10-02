import { Card, CardHeader, Heading, Image } from '@chakra-ui/react'
import { Game } from '../types/Games'

interface Props {
  game: Game
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card as="li" borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardHeader>
        <Heading size="md">{game.name}</Heading>
      </CardHeader>
    </Card>
  )
}
