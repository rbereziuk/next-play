import { useEffect, useState } from 'react'
import { apiClient } from '../services/api-client'
import { CanceledError } from 'axios'
import { Game } from '../types/Games'

interface FetchGames {
  conunt: number
  results: Game[]
}

export const useGames = () => {
  const [games, setGames] = useState<Game[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setIsLoading(true)
    apiClient
      .get<FetchGames>('/games', { signal: controller.signal })
      .then((res) => {
        setIsLoading(false)
        return setGames(res.data.results)
      })
      .catch((err) => {
        setIsLoading(false)
        if (err instanceof CanceledError) return
        return setError(err.message)
      })
    return () => controller.abort()
  }, [])

  return { games, error, isLoading }
}
