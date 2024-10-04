import { Genre } from '../types/Genre'
import { useData } from './useData'

export const useGenres = () => useData<Genre>('/genres')
