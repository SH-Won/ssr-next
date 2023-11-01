import { axiosAuthInstance } from '@/network/axios'
import { useEffect } from 'react'
import useAuth from './useAuth'
import useRefreshToken from './useRefreshToken'
import { useRecoilValue } from 'recoil'
import { _auth } from '@/store/auth'

const useAxiosAuth = () => {
  const refreshToken = useRefreshToken()
  const auth = useRecoilValue(_auth)

  useEffect(() => {
    const requestIntercept = axiosAuthInstance.interceptors.request.use(
      (config) => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.accessToken}`
        }
        return config
      },
      (error) => {
        console.log('not login user')
        return Promise.reject(error)
      }
    )

    const responseIntercept = axiosAuthInstance.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true
          const newAccessToken = await refreshToken()
          console.log(newAccessToken)
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
          if (newAccessToken) return axiosAuthInstance(prevRequest)
        }
        console.log(error)
        return Promise.reject(error)
      }
    )

    return () => {
      axiosAuthInstance.interceptors.request.eject(requestIntercept)
      axiosAuthInstance.interceptors.response.eject(responseIntercept)
    }
  }, [])

  return axiosAuthInstance
}

export default useAxiosAuth
