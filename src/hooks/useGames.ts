import { Game } from '../types/Games'
import { GamesQuery } from '../types/GamesQuery'
import { useData } from './useData'

export const useGames = (gamesQuery: GamesQuery) =>
  useData<Game>('/games', {
    params: {
      genres: gamesQuery.genre?.id,
      parent_platforms: gamesQuery.platform?.id,
      ordering: gamesQuery.ordering?.value,
      search: gamesQuery.search,
    },
  })
