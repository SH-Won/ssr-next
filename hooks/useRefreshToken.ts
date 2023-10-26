import axios from 'axios'
import { useRouter } from 'next/router'
import useAuth from './useAuth'

const useRefreshToken = () => {
  const { setAuth } = useAuth()
  const router = useRouter()

  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/refresh', {
        withCredentials: true,
      })
      console.log(response.data)
      setAuth((prev) => ({ ...prev, accessToken: response.data.accessToken }))
      return response.data.accessToken
    } catch (e) {
      router.replace('/login')
      if (e.response.status === 403) {
        router.replace('/login')
      }
      //
    }
  }
  return refreshToken
}

export default useRefreshToken
