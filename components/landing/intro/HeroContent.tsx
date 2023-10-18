import Tag from '@/components/common/Tag'
import { useHelper } from '@/hooks'
import { BaseItem } from '@/types/interface'
import { Button, CircularProgressBar, Colors } from 'my-react-component'
import Image from 'next/image'
import React from 'react'

interface HeroContentProps {
  item: BaseItem
}

const HeroContent = ({ item }: HeroContentProps) => {
  const { isValidImage } = useHelper()
  return (
    <div className="hero_content">
      <div className="imageWrapper" key={item.id}>
        <Image
          src={isValidImage(item.backdrop_path, true)}
          alt={item.title ?? item.name}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: '100%', height: '100%' }}
        />
      </div>
      <div className="content">
        <div className="content-info-tags">
          <Tag text={item.media_type.toUpperCase()} color="red" />
          <Tag text={item.original_language.toUpperCase()} color="orange" />
          <CircularProgressBar size={30} percent={Math.floor(Math.floor(item.vote_average * 10))} />
        </div>
        <h3 className="title">{item.title ?? item.name}</h3>
        <hr></hr>
        <p className="overview">{item.overview}</p>
        <div className="buttons">
          <Button size="medium" color={Colors.red} fontColor={Colors.white}>
            Trailer
          </Button>
        </div>
      </div>
    </div>
  )
}

export default HeroContent
