import useModal from '@/hooks/useModal'
import Masonry from '@/layout/Masonry'
import { axiosAuthInstance } from '@/network/axios'
import { IProduct } from '@/pages/blog'

import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PostCard from '../card/PostCard'

type SideModalProps = {
  product: IProduct
}
const SideModalContainer = styled.div<{ scrollTop: number }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: ${(props) => props.scrollTop}px;
  z-index: 1000;
  background-color: ${({ theme }) => theme.color.white};
  overflow-x: overlay;

  .desktop & {
    width: 60%;
    right: 0;
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
    <SideModalContainer scrollTop={0}>
      <button onClick={back}>close</button>
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
