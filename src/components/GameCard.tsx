import {
  Card,
  CardBody,
  CardHeader,
  Heading,
  HStack,
  Image,
  Skeleton,
  SkeletonText,
} from '@chakra-ui/react'
import { Game } from '../types/Games'
import { PlatformsIcon } from './PlatformsIcon'
import { CriticStore } from './CriticStore'
import { croppedImageUrl } from '../services/cropped-image-url'

interface Props {
  game: Game
}
export const GameCard = ({ game }: Props) => {
  return (
    <Card as="li" borderRadius={10} overflow="hidden">
      <Image src={croppedImageUrl(game.background_image)} />
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

export const GameCardSkeleton = () => {
  return (
    <Card as="li" borderRadius={10} overflow="hidden">
      <Skeleton height="200px" />
      <CardBody>
        <SkeletonText />
      </CardBody>
    </Card>
  )
}
