import { Badge } from '@chakra-ui/react'

interface Props {
  score: number
}

export const CriticStore = ({ score }: Props) => {
  return (
    <Badge
      size="xl"
      px={2}
      pt={1}
      borderRadius={3}
      colorScheme={score > 75 ? 'green' : 'yellow'}
    >
      {score}
    </Badge>
  )
}
