import axios from 'axios'

const BASE_URL = 'http://localhost:5000'
const AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_MOVIE_BASE_URL,
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_ACCESS_TOKEN}`,
    'Content-Type': 'application/json;charset=utf-8',
  },
  // timeout: 2000,
  // withCredentials: true,
})
export const axiosAuthInstance = axios.create({
  baseURL: BASE_URL,
})

export const axiosOpenApiInstance = axios.create({
  baseURL: `http://openAPI.gd.go.kr:8088/${process.env.NEXT_PUBLIC_OPEN_API_KEY}/json/GdAdminMesureFood/1/1000/`,
  // baseURL: `http://openAPI.gd.go.kr:8088/${process.env.NEXT_PUBLIC_OPEN_API_KEY}`,
})

export default AxiosInstance
