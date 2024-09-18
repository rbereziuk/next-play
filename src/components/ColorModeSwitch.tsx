import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react'

export const ColorModeSwitch = (props: {}) => {
  const { toggleColorMode, colorMode } = useColorMode()
  return (
    <HStack>
      <Switch
        isChecked={colorMode === 'dark'}
        onChange={toggleColorMode}
        colorScheme="green"
      />
      <Text>Dark Mode</Text>
    </HStack>
  )
}
