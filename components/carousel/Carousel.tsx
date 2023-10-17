import React from 'react'
import Slider from 'react-slick'
interface CarouselProps {
  items?: any[]
  children: JSX.Element | JSX.Element[]
}
const Carousel = ({ children }: CarouselProps) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
  }
  return <Slider {...settings}>{children}</Slider>
}

export default Carousel
