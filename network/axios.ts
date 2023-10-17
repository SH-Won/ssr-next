import axios from 'axios'

const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MOVIE_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
  timeout: 2000,
})

export default AxiosInstance
