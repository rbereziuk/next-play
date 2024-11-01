import { Genre } from './Genre'
import { ParentPlatform } from './ParentPlatform'

export interface SortByOption {
  id: number
  value: string
  label: string
}

export interface GamesQuery {
  genre?: Genre
  platform?: ParentPlatform
  ordering?: SortByOption
  search?: string
}
