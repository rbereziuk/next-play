import './App.css'
import { Grid, GridItem, HStack, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar'
import { GameGrid } from './components/GameGrid'
import { GenreList } from './components/GenreList'
import { useState } from 'react'
import { PlatformSelector } from './components/PlatformSelector'
import { GamesQuery } from './types/GamesQuery'
import { SortSelector } from './components/SortSelector'

function App() {
  const [gamesQuery, setGamesQuery] = useState<GamesQuery>({})

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
            onSelect={(genre) => setGamesQuery({ ...gamesQuery, genre })}
            selectedGenre={gamesQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem as="main" area="main">
        <HStack gap={5}>
          <PlatformSelector
            onSelect={(platform) => setGamesQuery({ ...gamesQuery, platform })}
            selectedPlatform={gamesQuery.platform}
          />
          <SortSelector
            onSelect={(sortByOption) =>
              setGamesQuery({ ...gamesQuery, ordering: sortByOption })
            }
            sortByOption={gamesQuery.ordering}
          />
        </HStack>
        <GameGrid gamesQuery={gamesQuery} />
      </GridItem>
    </Grid>
  )
}

export default App
