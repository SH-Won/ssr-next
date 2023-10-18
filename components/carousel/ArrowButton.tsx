import React from 'react'
interface ArrowButtonProps {
  isLeft?: boolean
  className?: string
  style?: any
  onClick?: () => void
}
const ArrowButton = (props: ArrowButtonProps) => {
  return (
    <div
      className={`arrow-button ${props.isLeft ? 'left' : 'right'} ${props.className}`}
      // style={{ ...props.style }}
      onClick={props.onClick}
    ></div>
  )
}

export default ArrowButton
