import { Game } from '../types/Games'
import { useData } from './useData'

export const useGames = (selectedGenre?: string | null) =>
  useData<Game>('/games', { params: { genres: selectedGenre } })
