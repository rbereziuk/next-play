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

  useEffect(() => {
    const controller = new AbortController()

    apiClient
      .get<FetchGames>('/games', { signal: controller.signal })
      .then((res) => setGames(res.data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return
        return setError(err.message)
      })
    return () => controller.abort()
  }, [])

  return { games, error }
}
