import Carousel from '@/components/carousel/Carousel'
import { ItemType } from '@/const/toggleBar'
import { useHelper } from '@/hooks'
import BackEnd from '@/network'
import { BaseItem } from '@/types/interface'
import { MovieResponse } from '@/types/network/response'
import Image from 'next/image'
import React from 'react'
import { useQuery } from 'react-query'
interface MediaItemListProps {
  item: ItemType
}
const settings = {
  className: 'item-container',
  responsive: [
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        // infinite: true,
        // dots: true,
      },
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
        // initialSlide: 2,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
}

const MediaItemList = ({ item }: MediaItemListProps) => {
  const { isValidImage } = useHelper()
  const { data, isLoading } = useQuery<MovieResponse<BaseItem[]>>(
    [item.id, 1],
    () =>
      BackEnd.CommonAPI.getItems({
        url: item.value,
        page: 1,
      }),
    {
      staleTime: Infinity,
    }
  )

  if (isLoading) return <div>null</div>

  return (
    <div className="section-items">
      <Carousel setting={settings} slidesToShow={6}>
        {data!.results.map((item) => {
          return (
            <div className="imageWrapper" key={item.media_type + '_' + item.id}>
              <Image
                src={isValidImage(item.poster_path)}
                alt={item.title ?? item.name}
                width="0"
                height="0"
                sizes="100%"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default MediaItemList
