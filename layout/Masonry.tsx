import { useBreakPoints } from '@/hooks'
import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'

type MasonryProps = {
  children: React.ReactNode
}
const MasonryContainer = styled.div`
  width: 100%;
  display: grid;
  padding: 16px;
  .desktop & {
    grid-template-columns: repeat(4, 1fr);
  }
  .tablet & {
    grid-template-columns: repeat(3, 1fr);
  }
  .mobile & {
    grid-template-columns: repeat(2, 1fr);
    @media screen and (max-width: 450px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  grid-gap: 10px;
`
const Masonry = ({ children }: MasonryProps) => {
  const container = useRef<HTMLDivElement>(null)
  // const {breakPointsClass} = useBreakPoints()
  useEffect(() => {
    if (container!.current) {
      console.log(container.current.children)
      const containerHeight = container!.current.getBoundingClientRect().height as number
      const containerChildren = container!.current.children ?? []

      Array.prototype.forEach.call(containerChildren, (element: HTMLElement) => {
        console.log(element.children[0].getBoundingClientRect().height)

        element.style.gridRowEnd = `span ${Math.ceil(
          element.children[0].getBoundingClientRect().height / 10 - 1
        )}`
      })
    }
  }, [container.current, children])
  return <MasonryContainer ref={container}>{children}</MasonryContainer>
}

export default Masonry
