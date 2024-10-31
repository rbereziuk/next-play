import { Genre } from './Genre'
import { ParentPlatform } from './ParentPlatform'

export interface GamesQuery {
  genre?: Genre
  platform?: ParentPlatform
}
