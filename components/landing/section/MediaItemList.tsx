import ArrowButton from '@/components/carousel/ArrowButton'
import Carousel from '@/components/carousel/Carousel'
import { mediaListSetting } from '@/components/carousel/setting'
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
  items: MovieResponse<BaseItem[]>
  loading: boolean
}
const MediaItemList = ({ items, loading }: MediaItemListProps) => {
  const { isValidImage, getDetailPageUrl } = useHelper()

  if (loading) return <div>null</div>

  return (
    <section className="section-items">
      <Carousel setting={mediaListSetting} slidesToShow={5}>
        {items!.results.map((item) => {
          return (
            <div style={{ padding: '0 16px' }} key={item.media_type + '_' + item.id}>
              <div className="imageWrapper" key={item.media_type + '_' + item.id}>
                <Link href={getDetailPageUrl(item)}>
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
    </section>
  )
}

export default MediaItemList
