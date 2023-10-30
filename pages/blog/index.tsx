import PostCard from '@/components/card/PostCard'

import { datas } from '@/const/mock'
import { useBreakPoints } from '@/hooks'
import useModal from '@/hooks/useModal'
import Masonry from '@/layout/Masonry'
import RequiredAuth, { withAuth } from '@/layout/RequiredAuth'
import { axiosAuthInstance } from '@/network/axios'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  position: relative;
  max-width: 1250px;
  margin: 0 auto;
  width: 100%;
`
const BackGroundImage = styled.div<{ opacity: number }>`
  width: 100%;
  height: 50vh;
  position: relative;
  & > img {
    /* position: absolute; */
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    object-fit: cover;
    /* background-position-y: 200px; */
    /* animation: fade-in-out 0.5s ease-in-out; */
    opacity: ${(props) => props.opacity};
    transition: opacity 0.3s ease-in-out;
    @keyframes fade-in-out {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  }
`
const CardContainer = styled.div`
  position: absolute;
  /* display: flex;
  justify-content: flex-end; */
  left: 10%;
  /* bottom: 100%; */
  transform: translateY(-100%);
`
const CardWrapper = styled.div`
  position: relative;
  display: flex;
`
const ButtonWrapper = styled.div`
  position: absolute;
  right: 0;
  display: flex;
  transform: translateX(+50%);
`
const DirectionButton = styled.button<{ direction: 'left' | 'right' }>`
  background-color: ${(props) =>
    props.direction === 'left' ? props.theme.color.bg_black : props.theme.color.white};
  color: ${(props) =>
    props.direction === 'left' ? props.theme.color.white : props.theme.color.grey_bbb};
  width: 30px;
  height: 30px;
  border: transparent;
`

export const getStaticProps = async () => {
  try {
    const response = await axiosAuthInstance.get('/product', {
      withCredentials: true,
    })
    return {
      props: {
        data: response.data,
      },
    }
  } catch (e) {
    return {
      props: {},
    }
  }
}
export type IProduct = {
  _id: string
  productId: number
  label: string
  description: string
  imageUrl: string
  imageUrls?: string[]
  category: number
}
interface Props {
  data: {
    products: IProduct[]
  }
}
const MainPage = (props: Props) => {
  const router = useRouter()
  const [selectedIndex, setSelectedIndex] = useState<number>(6)
  const [opacity, setOpacity] = useState<number>(1)
  const { showModal } = useModal()
  const handleLeft = () => {
    const index = selectedIndex - 1 < 0 ? datas.length - 1 : selectedIndex - 1
    setOpacity(0)
    setTimeout(() => {
      setSelectedIndex(index)
      setOpacity(1)
    }, 300)
  }
  const handleRight = () => {
    const index = selectedIndex + 1 >= datas.length ? 0 : selectedIndex + 1
    setOpacity(0)
    setTimeout(() => {
      setSelectedIndex(index)
      setOpacity(1)
    }, 300)
  }
  const handleClick = (product: IProduct) => {
    // router.push(location.pathname + `?productId=${product.productId}`)
    showModal({
      type: 'side',
      props: {
        product,
      },
    })
  }
  console.log('re render blog')
  return (
    <MainContainer>
      <BackGroundImage opacity={opacity}>
        <Image fill src={datas[selectedIndex].imageUrl} alt={datas[selectedIndex].label} />
      </BackGroundImage>
      <CardContainer>
        <CardWrapper>
          <PostCard.Overview product={datas[selectedIndex]} />
          <ButtonWrapper>
            <DirectionButton onClick={handleLeft} direction="left">
              {'<'}
            </DirectionButton>
            <DirectionButton onClick={handleRight} direction="right">
              {'>'}
            </DirectionButton>
          </ButtonWrapper>
        </CardWrapper>
      </CardContainer>
      <Masonry>
        {props.data.products.map((data) => (
          <PostCard key={data.label + data._id} product={data}>
            <PostCard.Overview product={data} handleClick={handleClick} />
          </PostCard>
        ))}
      </Masonry>
    </MainContainer>
  )
}

export default withAuth<Props>(MainPage)
