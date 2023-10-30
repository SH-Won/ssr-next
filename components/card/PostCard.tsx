import { Data } from '@/const/mock'
import { IPost } from '@/pages/blog'
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
  post: IPost
}
const PostOverview = ({ post }: PostOverviewProps) => {
  return (
    <Container>
      <h3>{post.label}</h3>
      <p>{post.description}</p>
      <Button color={Colors.bg_black}>detail</Button>
    </Container>
  )
}
const PostCardContainer = styled.div`
  background-color: ${({ theme }) => theme.color.white};
  display: flex;
  gap: 6px;
  padding: 16px;
  & > div {
    & img {
      border-radius: none;
    }
  }
  flex-direction: column;
`
const PostCard = ({ post }: PostOverviewProps) => {
  return (
    <PostCardContainer>
      {/* <div>
      <Image src={post.imageUrl}  alt={post.label} width={400} height={400}/>
      </div> */}
      <RatioCardImage imageUrl={post.imageUrl} ratio={1} />
      {/* <RatioCardImage imageUrl={post.url} ratio={0.5} /> */}
      <PostOverview post={post} />
    </PostCardContainer>
  )
}
PostCard.Overview = PostOverview
export default PostCard
