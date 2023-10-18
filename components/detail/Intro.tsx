import { useHelper } from '@/hooks'
import { BaseItem, BaseItemDetail } from '@/types/interface'
import { Button, CircularProgressBar, Colors, Element } from 'my-react-component'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'
import Tag from '../common/Tag'

const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`
const ImageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  /* z-index: 0; */
  color: transparent;
  & > img {
    width: 100vw;
    height: 100vh;
    object-fit: cover;
    filter: brightness(0.3);
  }
`
const OverviewWrapper = styled.div`
  display: flex;
  .desktop & {
    justify-content: flex-start;
    align-items: center;
    gap: 24px;
    max-width: 1000px;
  }
  padding: 0 50px;
  align-items: center;
  height: 100%;
`
const PosterImageWrapper = styled.div`
  display: none;
  .desktop & {
    display: block;
  }
  width: 300px;
  height: 450px;
  position: relative;
  & > img {
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 8px;
    width: 100%;
    height: 100%;
  }
`
const InformationWrapper = styled.div`
  position: relative;
  color: ${({ theme }) => theme.color.white};
  /* height: 100%; */
  flex: 1 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* gap: 16px; */
  /* align-items: center; */
  & > p {
    font-size: 14px;
  }
`
const LanguageBox = styled.ul`
  display: flex;
  list-style-type: none;
  align-content: center;
  justify-content: space-between;
  color: ${({ theme }) => theme.color.white};
`
const MediaDetailBox = styled(LanguageBox)`
  /* width: 100%; */
  background: rgba(74, 71, 71, 0.4509803922);
  padding: 6px 10px;
  border-radius: 7px;
  border: 1px solid ${({ theme }) => theme.color.grey_333};
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);

  & > li {
    display: flex;
    justify-content: center;
    flex-direction: row;
    gap: 6px;
    align-items: center;
    .mobile & {
      flex-direction: column;
      align-items: flex-start;
    }
  }
  &::after {
    content: '';
    width: 100%;
    height: 1px;
    background-image: linear-gradient(90deg, #383838, hsla(0, 0%, 100%, 0));
    position: absolute;
    bottom: -11px;
    left: 0;
  }
`
interface IntroProps {
  item: BaseItemDetail
}
const Intro = ({ item }: IntroProps) => {
  const { isValidOriginalImage } = useHelper()
  return (
    <Container>
      <ImageWrapper>
        <Image
          src={isValidOriginalImage(item.backdrop_path)}
          alt={item.title ?? item.name}
          width="0"
          height="0"
          sizes="100%"
          style={{ width: '100%', height: '100%' }}
        />
        {/* <img src={isValidOriginalImage(item.backdrop_path)} /> */}
      </ImageWrapper>
      <OverviewWrapper>
        <PosterImageWrapper>
          <Image
            src={isValidOriginalImage(item.poster_path)}
            alt={item.title ?? item.name}
            width="0"
            height="0"
            sizes="100vw"
            style={{ width: '100%', height: '100%' }}
          />
        </PosterImageWrapper>
        <InformationWrapper>
          <h1>{item.original_title ?? item.original_name}</h1>
          <MediaDetailBox>
            <li>
              <span>tmdb</span>
              <CircularProgressBar size={32} percent={Math.floor(item.vote_average * 10)} />
            </li>
            <li>
              {item.genres!.map((gen) => (
                <Tag key={gen.id} text={gen.name} />
              ))}
            </li>
            <li>
              <Button color="transparent" fontColor={Colors.white} border={Colors.grey_ccc}>
                <Element name="Login" size="small" color={Colors.white} />
              </Button>
            </li>
          </MediaDetailBox>
          <p>{item.overview}</p>
          <LanguageBox>
            {item.spoken_languages!.map((lang) => (
              <li key={lang.iso_639_1}>
                <Tag text={lang.name} />
              </li>
            ))}
          </LanguageBox>
        </InformationWrapper>
      </OverviewWrapper>
    </Container>
  )
}

export default Intro
