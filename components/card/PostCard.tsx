import { Data } from '@/const/mock'
import { IProduct } from '@/pages/blog'
import { Button, Colors, RatioCardImage } from 'my-react-component'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { ReactNode, useRef, useState } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* justify-content: flex-start; */
  /* padding: 16px; */
  /* background-color: ${({ theme }) => theme.color.white}; */
  background-color: transparent;
  border-radius: 8px 8px 0 0;
  gap: 4px;
  & > h3 {
    color: ${({ theme }) => theme.color.white};
    margin: 0;
  }
  & > p {
    margin: 0;
    font-size: 12px;
    color: ${({ theme }) => theme.color.grey_bbb};
  }
`
interface PostOverviewProps {
  product: IProduct
  handleClick?: (product: IProduct) => void
  children?: ReactNode
}
const PostOverview = ({ product, handleClick }: PostOverviewProps) => {
  const router = useRouter()
  return (
    <Container>
      <h3>{product.label}</h3>
      <p>{product.description}</p>
      <Link href={location.pathname + `#productId=${product.productId}`}>
        <Button color={Colors.bg_black} click={() => handleClick?.(product)}>
          detail
        </Button>
      </Link>
    </Container>
  )
}
const PostCardContainer = styled.div`
  /* background-color: ${({ theme }) => theme.color.white}; */
  background-color: transparent;
  display: flex;
  /* justify-content: center; */
  /* gap: 6px; */
  /* padding: 16px; */
  & > div {
    & img {
      /* width: 100%;
      height: auto; */
    }
  }
  flex-direction: column;
`
const PostCard = ({ product, children }: PostOverviewProps) => {
  const [load, setLoad] = useState('')
  return (
    <PostCardContainer>
      <div>
        <RatioCardImage imageUrl={product.imageUrl} ratio={1 + Math.random() * 0.5} />
      </div>
      {children}
    </PostCardContainer>
  )
}
PostCard.Overview = PostOverview
export default PostCard
