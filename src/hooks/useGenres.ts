//import { Genre } from '../types/Genre'
//import { useData } from './useData'
import genres from '../data/genres'

//export const useGenres = () => useData<Genre>('/genres')
export const useGenres = () => ({ data: genres, isLoading: false, error: null })
