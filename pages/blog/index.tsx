import PostCard from '@/components/card/PostCard'

import { datas } from '@/const/mock'
import Image from 'next/image'
import React, { useState } from 'react'
import styled from 'styled-components'

const MainContainer = styled.div`
  position: relative;
  max-width: 1100px;
  width: 100%;
`
const BackGroundImage = styled.div<{ opacity: number }>`
  width: 100%;
  height: 42vh;
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
const PostCardWrapper = styled.div`
  /* &:nth-child(2n + 1) {
    flex-direction: row-reverse;
  } */
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`
const MainPage = () => {
  const [selectedIndex, setSelectedIndex] = useState<number>(6)
  const [opacity, setOpacity] = useState<number>(1)
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
  return (
    <MainContainer>
      <BackGroundImage opacity={opacity}>
        <Image
          width={600}
          height={1000}
          src={datas[selectedIndex].url}
          alt={datas[selectedIndex].title}
        />
      </BackGroundImage>
      <CardContainer>
        <CardWrapper>
          <PostCard.Overview post={datas[selectedIndex]} />
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

      <PostCardWrapper>
        {datas.map((data) => (
          <PostCard key={data.title} post={data} />
        ))}
      </PostCardWrapper>
    </MainContainer>
  )
}

export default MainPage