import ArrowButton from '@/components/carousel/ArrowButton'
import Carousel from '@/components/carousel/Carousel'
import { ItemType } from '@/const/toggleBar'
import { useHelper } from '@/hooks'
import BackEnd from '@/network'
import { BaseItem } from '@/types/interface'
import { MovieResponse } from '@/types/network/response'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useQuery } from 'react-query'
interface MediaItemListProps {
  item: ItemType
}
const settings = {
  className: 'item-container',
  nextArrow: <ArrowButton />,
  prevArrow: <ArrowButton isLeft={true} />,
  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
        // infinite: true,
        // dots: true,
      },
    },
    {
      breakpoint: 1100,
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
      <Carousel setting={settings} slidesToShow={5}>
        {data!.results.map((item) => {
          return (
            <div style={{ padding: '0 16px' }} key={item.media_type + '_' + item.id}>
              <div className="imageWrapper" key={item.media_type + '_' + item.id}>
                <Link href={''}>
                  <Image
                    src={isValidImage(item.poster_path)}
                    alt={item.title ?? item.name}
                    width="0"
                    height="0"
                    sizes="100%"
                    style={{ width: '100%', height: '100%' }}
                  />
                </Link>
              </div>
            </div>
          )
        })}
      </Carousel>
    </div>
  )
}

export default MediaItemList
