import { BaseCast, BaseItem, BaseItemDetail } from '@/types/interface'
// import { useNavigate } from 'react-router-dom'
import { useRouter } from 'next/router'

const useHelper = () => {
  const navigate = useRouter()

  const goDetailPage = (item: BaseItem | BaseItemDetail) => {
    let url = item.release_date ? '/movie/' : '/tv/'
    url += item.id
    navigate.push(url)
  }
  const getDetailPageUrl = (item: BaseItem | BaseItemDetail) => {
    let url = item.release_date ? '/movie/' : '/tv/'
    url += item.id
    return url
  }
  const goSearchPage = (searchText: string) => {
    navigate.push(`/search?query=${searchText}`)
  }
  const goActorPage = (id: BaseCast['id']) => {
    navigate.push(`/person/${id}`)
  }
  const isValidImage = (imagePath: string, isBackDropImage = false) => {
    if (!imagePath) return '/noImage.svg'
    return !isBackDropImage
      ? process.env.NEXT_PUBLIC_BASE_IMAGE_URL + imagePath
      : process.env.NEXT_PUBLIC_BASE_BACK_DROP_IMAGE_URL + imagePath
  }
  const getConvertedDate = (date: string | undefined) => {
    if (!date || date === '') return ''
    const [year, month, day] = date.split('-')
    return `${month}월 ${day}, ${year}`
  }
  const isValidOriginalImage = (imagePath: string) => {
    if (!imagePath) return '/noImage.svg'
    return process.env.NEXT_PUBLIC_BASE_BACK_DROP_ORIGINAL_IMAGE_URL + imagePath
  }

  return {
    goDetailPage,
    goSearchPage,
    goActorPage,
    isValidImage,
    getDetailPageUrl,
    getConvertedDate,
    isValidOriginalImage,
  }
}
export { useHelper }
