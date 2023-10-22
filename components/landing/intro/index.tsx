import { useCommonData } from '@/hooks'
import { BaseItem } from '@/types/interface'
import React from 'react'
import Carousel from '../../carousel/Carousel'
import HeroContent from './HeroContent'
import { introHeroSetting } from '@/components/carousel/setting'
import { TOGGLE_TRENDING_ITEMS } from '@/const/toggleBar'
import { MovieResponse } from '@/types/network/response'
import BackGroundImage from '../../common/BackGroundImage'

const IntroHero = () => {
  const { data, isLoading, isFetching } = useCommonData<MovieResponse<BaseItem[]>>(
    TOGGLE_TRENDING_ITEMS[0]
  )
  console.log(data, 'intro')
  if (isLoading || isFetching)
    return <BackGroundImage.Main src="/next.svg" alt="loading" ratio={0.5}></BackGroundImage.Main>
  return (
    <div className="introHero">
      <Carousel fade={true} slidesToShow={1} setting={introHeroSetting}>
        {data && data!.results.slice(0, 5).map((item) => <HeroContent key={item.id} item={item} />)}
      </Carousel>
    </div>
  )
}

export default IntroHero
