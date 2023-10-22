import ArrowButton from '@/components/carousel/ArrowButton'
import Carousel from '@/components/carousel/Carousel'
import { mediaListSetting } from '@/components/carousel/setting'
import SkeletonItemList from '@/components/SkeletonItemList'
import { ItemType } from '@/const/toggleBar'
import { useHelper } from '@/hooks'
import BackEnd from '@/network'
import { BaseItem } from '@/types/interface'
import { MovieResponse } from '@/types/network/response'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface MediaItemListProps {
  items: MovieResponse<BaseItem[]>
  loading: boolean
}
const MediaItemList = ({ items, loading }: MediaItemListProps) => {
  const { isValidImage, getDetailPageUrl } = useHelper()
  return (
    <section className="section-items">
      <Carousel setting={mediaListSetting} slidesToShow={5}>
        {loading
          ? Array(10)
              .fill(0)
              .map((value, index) => (
                <div key={value + index}>
                  <div key={value + index} className="imageWrapper">
                    <div className={'skeletonImg'}></div>
                  </div>
                </div>
              ))
          : items &&
            items!.results.map((item) => {
              return (
                <div style={{ padding: '0 16px' }} key={item.media_type + '_' + item.id}>
                  <Link
                    href={`/${item.media_type}/${item.id}`}
                    as={`/${item.media_type}/${item.id}`}
                  >
                    <div className="imageWrapper" key={item.media_type + '_' + item.id}>
                      <Image
                        src={isValidImage(item.poster_path)}
                        alt={item.title ?? item.name}
                        width="300"
                        height="300"
                        sizes="fill"
                        // layout="responsive"
                      />
                      {/* <img src={isValidImage(item.poster_path)} alt={item.title ?? item.name} /> */}
                    </div>
                  </Link>
                </div>
              )
            })}
      </Carousel>
    </section>
  )
}

export default MediaItemList
