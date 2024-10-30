import './App.css'
import { Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import { GameGrid } from './components/GameGrid'
import { GenreList } from './components/GenreList'
import { useState } from 'react'
import { PlatformSelector } from './components/PlatformSelector'
import { ParentPlatform } from './types/ParentPlatform'

function App() {
  const [selectedGenre, setSelectedGenre] = useState<null | string>(null)
  const [selectedPlatform, setSelectedPlatform] =
    useState<null | ParentPlatform>(null)

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
          <GenreList
            onSelect={setSelectedGenre}
            selectedGenre={selectedGenre}
          />
        </GridItem>
      </Show>
      <GridItem as="main" area="main">
        <PlatformSelector
          onSelect={setSelectedPlatform}
          selectedPlatform={selectedPlatform}
        />
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        />
      </GridItem>
    </Grid>
  )
}

export default App
