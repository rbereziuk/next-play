import { useEffect, useState } from 'react'
import { apiClient } from '../services/api-client'
import { AxiosRequestConfig, CanceledError } from 'axios'

interface Response<T> {
  conunt: number
  results: T[]
}

export const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
) => {
  const [data, setData] = useState<T[]>([])
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const depsConfig = JSON.stringify(requestConfig)

  useEffect(() => {
    const controller = new AbortController()

    setIsLoading(true)
    apiClient
      .get<Response<T>>(endpoint, {
        signal: controller.signal,
        ...requestConfig,
      })
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint, depsConfig])

  return { data, error, isLoading }
}
