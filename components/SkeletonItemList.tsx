interface SkeletonItemListProps {
  category?: string
  ratio: number
}
const SkeletonItemList = (props: SkeletonItemListProps) => {
  return (
    <>
      {Array(10)
        .fill(0)
        .map((value, index) => (
          <div
            key={value + index}
            style={{ paddingTop: `${props.ratio * 100}%`, position: 'relative' }}
          >
            <div className={'skeletonImg'}></div>
          </div>
        ))}
    </>
  )
}

export default SkeletonItemList
