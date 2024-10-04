import { Game } from '../types/Games'
import { useData } from './useData'

export const useGames = () => useData<Game>('/games')
