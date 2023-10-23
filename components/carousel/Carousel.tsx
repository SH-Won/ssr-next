import React from 'react'
import Slider, { Settings } from 'react-slick'
interface CarouselProps {
  items?: any[]
  children: JSX.Element | JSX.Element[] | undefined
  fade?: boolean
  slidesToShow?: number
  swipe?: boolean
  setting?: Settings
}
const Carousel = ({ children, fade, slidesToShow, swipe, setting }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    fade: fade ?? false,
    // swipe: false,
    ...setting,
  }
  return <Slider {...settings}>{children}</Slider>
}

export default Carousel
