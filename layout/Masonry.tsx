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
    /* grid-template-columns: repeat(5, 1fr); */
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  .tablet & {
    /* grid-template-columns: repeat(4, 1fr); */
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  .mobile & {
    /* grid-template-columns: repeat(2, 1fr); */
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    /* @media screen and (max-width: 450px) {
      grid-template-columns: repeat(1, 1fr);
    } */
  }
  grid-gap: 10px;
  grid-auto-rows: 0;
`
const Masonry = ({ children }: MasonryProps) => {
  const container = useRef<HTMLDivElement>(null)
  const { breakPointsClass } = useBreakPoints()
  useEffect(() => {
    const setMasonry = () => {
      console.log('load')
      if (container!.current) {
        const grid = container.current
        const rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'))
        const rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'))
        Array.prototype.forEach.call(grid.children, (element: HTMLElement) => {
          const height = Array.prototype.reduce.call(
            element.children,
            (acc, cur) => (acc += cur?.getBoundingClientRect().height),
            0
          ) as number
          element.style.gridRowEnd = `span ${Math.ceil((height + rowGap) / (rowHeight + rowGap))}`
        })
      }
    }
    setMasonry()
  }, [container.current, children, breakPointsClass])
  return <MasonryContainer ref={container}>{children}</MasonryContainer>
}

export default Masonry
