import { ParentPlatform } from '../types/ParentPlatform'
import { useData } from './useData'

export const usePlatforms = () =>
  useData<ParentPlatform>('/platforms/lists/parents')
