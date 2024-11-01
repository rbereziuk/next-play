import { Heading } from '@chakra-ui/react'
import { GamesQuery } from '../types/GamesQuery'

interface Props {
  gamesQuery: GamesQuery
}

export const MainHeading = ({ gamesQuery }: Props) => {
  return (
    <Heading>{`${gamesQuery.platform?.name || ''} ${gamesQuery.genre?.name || ''} Games`}</Heading>
  )
}
