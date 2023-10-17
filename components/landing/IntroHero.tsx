import { useHelper } from '@/hooks'
import Image from 'next/image'
import React from 'react'
import Carousel from '../carousel/Carousel'
interface IntroHeroProps {
  items: any[]
}
const IntroHero = ({ items }: IntroHeroProps) => {
  const { isValidImage } = useHelper()
  return (
    <div className="introHero">
      <Carousel>
        {items.map((item) => (
          <div className="imageWrapper" key={item.id}>
            <Image
              src={isValidImage(item.backdrop_path)}
              alt={item.title ?? item.name}
              // key={item.id}
              width="0"
              height="0"
              // height="100%"
              // fill={true}
              // fill
              // layout="responsive"
              // objectFit="contain"
              sizes="100vw"
              // style={{ height: '100%', width: '100vw' }}
              style={{ width: '100%', height: 'auto' }} // optional
            />
          </div>
        ))}
      </Carousel>
    </div>
  )
}

export default IntroHero
