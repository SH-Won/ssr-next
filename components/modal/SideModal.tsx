import useModal from '@/hooks/useModal'
import Masonry from '@/layout/Masonry'
import { axiosAuthInstance } from '@/network/axios'
import { IProduct } from '@/pages/blog'
import { PopupBasicHeader } from 'my-react-component'
import Image from 'next/image'

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PostCard from '../card/PostCard'
import BackGroundImage from '../common/BackGroundImage'

type SideModalProps = {
  product: IProduct
}
const SideModalContainer = styled.div<{ scrolltop: number }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: ${(props) => props.scrolltop}px;
  z-index: 1000;
  background-color: ${({ theme }) => theme.color.white};
  overflow-x: overlay;

  .desktop & {
    width: 40%;
    right: 0;
  }
`
const RatioImage = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  /* height: 100%; */
  /* justify-self: center; */
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f1f3f4;
  & > img {
    width: 80%;
  }
`

type ISubProduct = IProduct & { subProductId: number }

const SideModal = ({ product }: SideModalProps) => {
  const router = useRouter()
  const [data, setData] = useState<ISubProduct[]>([])
  const { removeModal } = useModal()
  // console.log(scrollTop)

  const back = () => {
    removeModal()
    router.back()
  }

  useEffect(() => {
    ;(async () => {
      try {
        const response = await axiosAuthInstance.get('/product/sub', {
          params: { productId: product.productId },
        })
        if (response.data) {
          setData(response.data.subProducts)
        }
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  return (
    <SideModalContainer scrolltop={0}>
      <PopupBasicHeader title="side" back={back} close={back} />
      <RatioImage>
        <img src={product.imageUrl} alt={product.label} />
      </RatioImage>
      {data.length && (
        <Masonry>
          {data!.map((el) => {
            return <PostCard key={el._id} product={el} />
          })}
        </Masonry>
      )}
    </SideModalContainer>
  )
}

export default SideModal
