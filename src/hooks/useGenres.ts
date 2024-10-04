import { useEffect, useState } from 'react'
import { apiClient } from '../services/api-client'
import { CanceledError } from 'axios'

interface FetchGenres {
  conunt: number
  results: Genre[]
}

interface Genre {
  id: number
  name: string
}

export const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setIsLoading(true)
    apiClient
      .get<FetchGenres>('/genres', { signal: controller.signal })
      .then((res) => {
        setIsLoading(false)
        return setGenres(res.data.results)
      })
      .catch((err) => {
        setIsLoading(false)
        if (err instanceof CanceledError) return
        return setError(err.message)
      })
    return () => controller.abort()
  }, [])

  return { genres, error, isLoading }
}
