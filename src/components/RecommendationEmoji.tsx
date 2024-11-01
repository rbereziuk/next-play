import { Text } from '@chakra-ui/react'

const emojiMap: { [key: number]: string } = {
  1: '💩',
  2: '💩',
  3: '🫤',
  4: '👍',
  5: '🤩',
}

export const RecommendationEmoji = ({ rating }: { rating: number }) => {
  return (
    <Text fontSize="x-large" mt={2}>
      {emojiMap[rating]}
    </Text>
  )
}
