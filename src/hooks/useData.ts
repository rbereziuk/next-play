import { useEffect, useState } from 'react'
import { apiClient } from '../services/api-client'
import { CanceledError } from 'axios'

interface Response<T> {
  conunt: number
  results: T[]
}

export const useData = <T>(endpoint: string) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const controller = new AbortController()

    setIsLoading(true)
    apiClient
      .get<Response<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setIsLoading(false)
        return setData(res.data.results)
      })
      .catch((err) => {
        setIsLoading(false)
        if (err instanceof CanceledError) return
        return setError(err.message)
      })
    return () => controller.abort()
  }, [endpoint])

  return { data, error, isLoading }
}
