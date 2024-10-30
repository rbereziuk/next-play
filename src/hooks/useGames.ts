import { Game } from '../types/Games'
import { ParentPlatform } from '../types/ParentPlatform'
import { useData } from './useData'

export const useGames = (
  selectedGenre: null | string,
  selectedPlatform: null | ParentPlatform,
) =>
  useData<Game>('/games', {
    params: { genres: selectedGenre, parent_platforms: selectedPlatform?.id },
  })
