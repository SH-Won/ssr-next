import { ItemType } from '@/const/toggleBar'
import BackEnd from '@/network'
import { BaseItem, BaseItemDetail, IMedia, IMediaType } from '@/types/interface'
import { MovieResponse } from '@/types/network/response'
import { useQuery, UseQueryResult } from 'react-query'
type IGenericFunc<T extends IMediaType, U> = (mediaType: T, id: IMedia['id']) => UseQueryResult<U>
type IExcludeMediaType = Exclude<IMediaType, 'person'>
export const QUERY_KEY = {
  SEARCH: 'search',
  PROVIDER: 'provider',
  GENRE: 'genre',
  DETAIL: 'detail',
  CREDITS: 'credits',
  IMAGES: 'images',
  RECOMMENDS: 'recommends',
  KEYWORDS: 'keywords',
  VIDEO: 'video',
  SIMILAR: 'similar',
}
export const useCommonData = <T>(query: ItemType): UseQueryResult<T> => {
  return useQuery(
    [query.id, query.page],
    () =>
      BackEnd.common.getItems({
        url: query.value,
        page: query.page ?? 1,
      }),
    {
      staleTime: Infinity,
    }
  )
}
export const useDetailData: IGenericFunc<IMediaType, BaseItemDetail> = (mediaType, id) => {
  return useQuery([mediaType, id, QUERY_KEY.DETAIL], () => BackEnd.media.getDetail(mediaType, id), {
    staleTime: Infinity,
  })
}
export const useSimilarData: IGenericFunc<IMediaType, MovieResponse<BaseItem[]>> = (
  mediaType,
  id
) => {
  return useQuery(
    [mediaType, id, QUERY_KEY.SIMILAR],
    () => BackEnd.media.getSimilar(mediaType, id),
    {
      staleTime: Infinity,
    }
  )
}
