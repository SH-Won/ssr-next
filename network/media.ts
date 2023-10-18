import { BaseItem } from '@/types/interface'
import { MovieResponse } from '@/types/network/response'
import AxiosInstance from './axios'

export const getDetail = async <T>(mediaType: T, id: number) => {
  const response = await AxiosInstance({
    url: `/${mediaType}/${id}`,
    params: {
      language: 'ko-KR',
    },
  })
  return response.data
}
export const getSimilar = async <T>(mediaType: T, id: number) => {
  const response = await AxiosInstance({
    url: `/${mediaType}/${id}/similar`,
    params: {
      language: 'ko-KR',
    },
  })
  return response.data
}

const MediaAPI = {
  getDetail,
  getSimilar,
}
export default MediaAPI
