import { axiosAuthInstance } from './axios'

const login = async (userInfo: any) => {
  const response = await axiosAuthInstance.post('/login', userInfo)
  return response.data
}
