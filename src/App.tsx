import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'

function App() {

  return (
    <Grid templateAreas={{
      base: `"nav" "main"`,
      lg: `"nav nav" "aside main"`
    }}>
      <GridItem as="nav" area="nav" bg="lightskyblue">Nav</GridItem>
      <Show above="lg">
        <GridItem as="aside" area="aside" bg="lightgreen">Aside</GridItem>
      </Show>
      <GridItem as="main" area="main" bg="lightcoral">Main</GridItem>
    </Grid>
  )
}

export default App
