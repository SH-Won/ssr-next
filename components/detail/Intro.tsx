import { useHelper } from '@/hooks'
import { BaseItemDetail } from '@/types/interface'
import React from 'react'
import styled from 'styled-components'
import BackGroundImage from '../common/BackGroundImage'
import MediaItem from '../media/MediaItem'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`
const ItemWrapper = styled.div`
  padding: 0 60px;
  height: 100%;
`
interface IntroProps {
  item: BaseItemDetail
}
const Intro = ({ item }: IntroProps) => {
  const { isValidOriginalImage } = useHelper()
  return (
    <Container>
      <BackGroundImage.Detail
        src={isValidOriginalImage(item.backdrop_path)}
        alt={item.title ?? item.name}
        ratio={1}
      />
      <ItemWrapper>
        <MediaItem item={item}>
          <MediaItem.PosterImage />
          <MediaItem.InforMationWrapper>
            <MediaItem.Title fontSize={16} />
            <MediaItem.Details />
            <MediaItem.HR />
            <MediaItem.Overview />
            <MediaItem.Language />
          </MediaItem.InforMationWrapper>
        </MediaItem>
      </ItemWrapper>
    </Container>
  )
}

export default Intro
