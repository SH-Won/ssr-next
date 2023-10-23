import BackGroundImage from '@/components/common/BackGroundImage'
import Tag from '@/components/common/Tag'
import MediaItem from '@/components/media/MediaItem'
import { useHelper } from '@/hooks'
import { BaseItem } from '@/types/interface'
import React from 'react'
import styled from 'styled-components'

interface HeroContentProps {
  item: BaseItem
}
const ContentWrapper = styled.div`
  max-width: 900px;
  position: absolute;
  width: calc(100% - 200px);
  padding: 24px;
  box-sizing: border-box;
  top: 43%;
  left: 50%;
  transform: translate(-50%, calc(-50% + 50px));
  display: flex;
  flex-direction: column;
  // background-color: rgba(33,33,33,.7);
  background: linear-gradient(90deg, rgba(17, 17, 17, 0.7019607843) 40%, transparent);

  justify-content: center;
  height: 100%;
  min-height: 320px;
  max-height: 400px;
  .mobile & {
    width: 100%;
  }
  .tablet & {
    padding: 24px 100px;
    width: 100%;
  }
`

const HeroContent = ({ item }: HeroContentProps) => {
  const { isValidImage } = useHelper()
  return (
    <div className="hero_content">
      <BackGroundImage.Main
        ratio={0.5}
        src={isValidImage(item.backdrop_path, true)}
        alt={item.title ?? item.name}
      />
      <ContentWrapper>
        <MediaItem item={item}>
          <MediaItem.PosterImage />
          <MediaItem.InforMationWrapper>
            <MediaItem.Tags />
            <MediaItem.Title fontSize={24} />
            <MediaItem.HR />
            <MediaItem.Overview />
          </MediaItem.InforMationWrapper>
        </MediaItem>
      </ContentWrapper>
    </div>
  )
}

export default HeroContent
