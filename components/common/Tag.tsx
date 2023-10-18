import React from 'react'
// import './styles/Tag.scss'
interface TagProps {
  text: string
  color?: string
}
const Tag = ({ text, color }: TagProps) => {
  return <span className={`tag ${color!}`}>{text}</span>
}

export default Tag
