/** @format */

import { useState } from 'react'

const useApi = (api) => {
  const [data, setData] = useState(null)
  const [Error, setError] = useState(null)
  const [Loading, setLoading] = useState(false)

  const request = async (...args) => {
    setLoading(true)
    setError(null)
    try {
      const res = await api(...args)
      setData(res.data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }
  return {
    data,
    Error,
    Loading,
    request,
  }
}

export default useApi
