import { useHelper } from '@/hooks'
import { BaseItem } from '@/types/interface'
import Image from 'next/image'
import React from 'react'
import Carousel from '../../carousel/Carousel'
import HeroContent from './HeroContent'
interface IntroHeroProps {
  items: BaseItem[]
}
const IntroHero = ({ items }: IntroHeroProps) => {
  const { isValidImage } = useHelper()
  return (
    <div className="introHero">
      <Carousel fade={true} slidesToShow={1}>
        {items.map((item) => (
          <HeroContent key={item.id} item={item} />
        ))}
      </Carousel>
    </div>
  )
}

export default IntroHero
