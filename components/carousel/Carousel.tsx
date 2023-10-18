import React from 'react'
import Slider, { Settings } from 'react-slick'
interface CarouselProps {
  items?: any[]
  children: JSX.Element | JSX.Element[]
  fade?: boolean
  slidesToShow?: number
  swipe?: boolean
  setting?: Settings
}
const Carousel = ({ children, fade, slidesToShow, swipe, setting }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: slidesToShow,
    fade: fade ?? false,
    ...setting,
  }
  return <Slider {...settings}>{children}</Slider>
}

export default Carousel
