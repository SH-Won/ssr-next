import { Settings } from 'react-slick'
import ArrowButton from '../ArrowButton'

export const introHeroSetting = {
  nextArrow: <ArrowButton />,
  prevArrow: <ArrowButton isLeft={true} />,
}
export const mediaListSetting: Settings = {
  className: 'item-container',
  nextArrow: <ArrowButton />,
  prevArrow: <ArrowButton isLeft={true} />,

  responsive: [
    {
      breakpoint: 2000,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 5,
      },
    },
    {
      breakpoint: 1100,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
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
