import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import { GameGrid } from './components/GameGrid'
import { GenreList } from './components/GenreList'

function App() {
  console.log(import.meta.env)

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr',
      }}
    >
      <GridItem as="nav" area="nav">
        <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem as="aside" area="aside" px={5}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem as="main" area="main">
        <GameGrid />
      </GridItem>
    </Grid>
  )
}

export default App
