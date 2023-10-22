import { useHelper } from '@/hooks'
import { BaseItem, BaseItemDetail } from '@/types/interface'
import { Button, CircularProgressBar, Colors, Element } from 'my-react-component'
import { createContext, ReactElement, ReactNode, useContext } from 'react'
import styled from 'styled-components'
import Tag from '../common/Tag'

// type IMediaItemChildren<T> = T extends BaseItem ? { typeof Title | }
interface MediaItemDetailProps {
  children: ReactNode
  item: BaseItem | BaseItemDetail
}
interface MediaContextProps {
  item: BaseItem | BaseItemDetail | null
  handleClick?: () => void
}
const Container = styled.div`
  display: flex;
  .desktop & {
    /* grid-template-columns: 1fr 3fr; */
  }
  gap: 16px;
  /* padding: 0 50px; */
  align-items: center;
  height: 100%;
`
const HR = styled.hr`
  border: 0;
  width: 100%;
  height: 1px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
  background-image: linear-gradient(270deg, #898989, hsla(0, 0%, 100%, 0));
  margin: 20px 0;
`
const ItemTitle = styled.h3<{ fontSize: number }>`
  font-size: ${(props) => props.fontSize}px;
`
const ItemOverview = styled.p`
  color: ${(props) => props.theme.color.grey_bbb};
  margin: 0;
`
const ItemTags = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 60px;
`
const ItemPosterImageWrapper = styled.div`
  display: none;
  .desktop & {
    display: flex;
    max-width: 250px;
  }
  position: relative;
  & > img {
    top: 0;
    left: 0;
    border-radius: 8px;
    width: 100%;
    height: 100%;
  }
`
const ItemLanguage = styled.ul`
  display: flex;
  list-style-type: none;
  align-content: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.white};
`
const ItemDetail = styled(ItemLanguage)<{ children: ReactElement<HTMLLIElement>[] }>`
  /* width: 100%; */
  background: rgba(74, 71, 71, 0.4509803922);
  padding: 6px 10px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.color.grey_333};
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);

  & > li {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 6px;
    align-items: center;
    .mobile & {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  /* &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-image: linear-gradient(90deg, #383838, hsla(0, 0%, 100%, 0));
    position: absolute;
    bottom: -11px;
    left: 0;
  } */
`

const ItemInforMationWrapper = styled.div`
  position: relative;
  color: ${({ theme }) => theme.color.white};
  justify-content: center;
  animation: fade-in 0.3s ease-in;
  -webkit-animation: fade-in 0.3s ease-in;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`
const MediaContext = createContext<MediaContextProps>({ item: null })

const Title = ({ fontSize }: { fontSize: number }) => {
  const { item } = useContext(MediaContext)
  return <ItemTitle fontSize={fontSize}>{item!.title ?? item!.name}</ItemTitle>
}
const Overview = () => {
  const { item } = useContext(MediaContext)
  return <ItemOverview>{item!.overview}</ItemOverview>
}
const Tags = () => {
  const { item } = useContext(MediaContext)
  return (
    <ItemTags>
      <Tag text={item!.media_type.toUpperCase()} color="red" />
      <Tag text={item!.original_language.toUpperCase()} color="orange" />
      <CircularProgressBar size={30} percent={Math.floor(Math.floor(item!.vote_average * 10))} />
    </ItemTags>
  )
}
const Details = () => {
  const { item } = useContext(MediaContext)
  return (
    <ItemDetail>
      <li>
        <span>tmdb</span>
        <CircularProgressBar size={32} percent={Math.floor(item!.vote_average * 10)} />
      </li>
      <li>
        {item!.genres!.map((gen) => (
          <Tag key={gen.id} text={gen.name} />
        ))}
      </li>
      <li>
        <Button color="transparent" fontColor={Colors.white} border={Colors.grey_ccc}>
          <Element name="Login" size="small" color={Colors.white} />
        </Button>
      </li>
    </ItemDetail>
  )
}
const Language = () => {
  const { item } = useContext(MediaContext) as { item: BaseItemDetail }
  return (
    <ItemLanguage>
      {item!.spoken_languages?.map((lang) => (
        <li key={lang.iso_639_1}>
          <Tag text={lang.name} />
        </li>
      ))}
    </ItemLanguage>
  )
}
const PosterImage = () => {
  const { item } = useContext(MediaContext)
  const { isValidOriginalImage } = useHelper()
  return (
    <ItemPosterImageWrapper>
      <img src={isValidOriginalImage(item!.poster_path)} alt={item!.title ?? item!.name} />
    </ItemPosterImageWrapper>
  )
}

const MediaItem = ({ item, children }: MediaItemDetailProps) => {
  return (
    <MediaContext.Provider value={{ item }}>
      <Container>{children}</Container>
    </MediaContext.Provider>
  )
}
MediaItem.HR = HR
MediaItem.PosterImage = PosterImage
MediaItem.Title = Title
MediaItem.Tags = Tags
MediaItem.Details = Details
MediaItem.Language = Language
MediaItem.Overview = Overview
MediaItem.InforMationWrapper = ItemInforMationWrapper

export default MediaItem
