import Image from 'next/image'
import { ReactElement, useRef, useState } from 'react'
import styled from 'styled-components'

interface ImageContainerProps {
  ratio: number
  $load?: boolean
}
export const DetailImageContainer = styled.div<Omit<ImageContainerProps, 'ratio'>>`
  position: absolute;
  height: 100%;

  & > img {
    /* position: absolute; */
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    object-fit: cover;
    /* opacity: 0; */
    transition: opacity 0.5s ease-in;
    filter: brightness(0.3);
    -webkit-filter: brightness(0.3);
  }
  @keyframes fade-in {
    0% {
      opacity: 0.3;
    }
    100% {
      opacity: 1;
    }
  }
`
const ImageContainer = styled(DetailImageContainer)<ImageContainerProps>`
  position: relative;
  padding-top: ${(props) => `${props.ratio * 100}%`};
  background-color: #222;
  & > img {
    position: absolute;
    height: 100%;
  }
  .mobile &,
  .tablet & {
    padding-top: 55vh;
  }
`
interface BackGroundImageProps {
  src: string
  alt: string
  ratio?: number
  children?: ReactElement
}

const BackGroundImage = ({ children, src, alt }: BackGroundImageProps) => {
  const [style, setStyle] = useState({
    opacity: 0,
  })
  return (
    <img
      style={style}
      src={src}
      alt={alt}
      onLoad={() => setStyle({ opacity: 1 })}
      // width={1024}
      // height={(1024 * 9) / 16}
      // width="1200"
      // height={(1200 * 9) / 16}
      // sizes="fill"
      // priority
      // placeholder="blur"
      // blurDataURL="/next.svg"
    />
  )
}

const MainBackGroundImage = (props: BackGroundImageProps) => {
  return (
    <ImageContainer ratio={props.ratio || 0}>
      <BackGroundImage {...props} />
    </ImageContainer>
  )
}

const DetailBackGroundImage = (props: BackGroundImageProps) => {
  return (
    <DetailImageContainer>
      <BackGroundImage {...props} />
    </DetailImageContainer>
  )
}

export default {
  Main: MainBackGroundImage,
  Detail: DetailBackGroundImage,
}
