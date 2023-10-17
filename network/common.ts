import AxiosInstance from './axios'

export const getItems = async <T>(params: any): Promise<T> => {
  const response = await AxiosInstance({
    url: params.url,
    params: {
      language: 'ko-KR',
      page: params.page,
    },
  })
  return response.data
}

const CommonAPI = {
  getItems,
}

export default CommonAPI
