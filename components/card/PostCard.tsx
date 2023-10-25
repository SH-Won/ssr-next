import { Data } from '@/const/mock'
import { Button, Colors, RatioCardImage } from 'my-react-component'
import Image from 'next/image'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 16px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 8px 8px 0 0;
  & > h3 {
    color: ${({ theme }) => theme.color.bg_black};
  }
  & > p {
    font-size: 12px;
    color: ${({ theme }) => theme.color.grey_bbb};
  }
`
interface PostOverviewProps {
  post: Data
}
const PostOverview = ({ post }: PostOverviewProps) => {
  return (
    <Container>
      <h3>{post.title}</h3>
      <p>{post.desc}</p>
      <Button color={Colors.bg_black}>detail</Button>
    </Container>
  )
}
const PostCardContainer = styled.div`
  /* position: relative;
  padding-left: 30%;
  & > img {
    position : 10
    object-fit: cover;
    
  } */
  background-color: ${({ theme }) => theme.color.white};
  display: grid;
  gap: 6px;

  grid-template-columns: 0.4fr 0.6fr;
  /* grid-template-rows: 300px; */
`
const PostCard = ({ post }: PostOverviewProps) => {
  return (
    <PostCardContainer>
      <Image src={post.url} width={500} height={500} alt={post.title} layout="responsive" />
      {/* <RatioCardImage imageUrl={post.url} ratio={0.5} /> */}
      <PostOverview post={post} />
    </PostCardContainer>
  )
}
PostCard.Overview = PostOverview
export default PostCard
