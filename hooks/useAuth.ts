import { useRecoilState } from 'recoil'
import { _auth } from '@/store/auth'
import { axiosAuthInstance } from '@/network/axios'
import useAxiosAuth from './useAxiosAuth'
import { AxiosError, AxiosResponse } from 'axios'

interface ILoginUserInfo {
  email: string
  password: string
}
const useAuth = () => {
  const [auth, setAuth] = useRecoilState(_auth)
  const axiosAuthClient = useAxiosAuth()

  const login = async (userInfo: ILoginUserInfo) => {
    try {
      const response = await axiosAuthInstance.post('/login', userInfo, {
        withCredentials: true,
      })
      if (response.data) {
        const accessToken = response.data.accessToken
        setAuth((prev) => ({
          ...prev,
          email: userInfo.email,
          accessToken,
        }))
      }
    } catch (e) {
      // error handling
    }
  }
  const checkAuth = async (): Promise<AxiosResponse<{ success: boolean }>> => {
    // throw Error 없으면 catch 로 잡을 수가 없음
    // try catch 사용시 주의 할 점
    return axiosAuthClient.get('/auth', {
      withCredentials: true,
    })
  }

  return { auth, setAuth, login, checkAuth }
}

export default useAuth
