import Intro from '@/components/detail/Intro'
import MediaItemList from '@/components/landing/section/MediaItemList'
import { QUERY_KEY, useDetailData, useSimilarData } from '@/hooks'
import BackEnd from '@/network'
import { IMediaType } from '@/types/interface'
import { GetServerSideProps } from 'next'
import { useParams } from 'next/navigation'
import React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import BackGroundImage, { DetailImageContainer } from '@/components/common/BackGroundImage'

// export const getServerSideProps: GetServerSideProps = async (ctx) => {
//   const queryClient = new QueryClient()
//   const { media_type, id } = ctx.params as { media_type: IMediaType; id: string }
//   try {
//     const array = [
//       {
//         key: [media_type, id, QUERY_KEY.DETAIL],
//         func: () => BackEnd.media.getDetail(media_type, parseInt(id)),
//       },
//       {
//         key: [media_type, id, QUERY_KEY.SIMILAR],
//         func: () => BackEnd.media.getSimilar(media_type, parseInt(id)),
//       },
//     ]
//     await Promise.all(array.map((item) => queryClient.fetchQuery(item.key, item.func)))
//     return {
//       props: {
//         dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
//       },
//     }
//   } catch (e) {
//     return {
//       notFound: true,
//     }
//   } finally {
//   }
// }
const PageContainer = styled.div`
  min-height: 100vh;
`
const DetailPage = () => {
  const { media_type, id } = useRouter().query as { media_type: IMediaType; id: string }
  const { data, isLoading } = useDetailData(media_type, parseInt(id))
  const { data: similarItems, isLoading: similarItemLoading } = useSimilarData(
    media_type,
    parseInt(id)
  )
  if (isLoading) return <DetailImageContainer />
  return (
    <PageContainer>
      <Intro item={data!} />
      <MediaItemList items={similarItems!} loading={similarItemLoading} />
    </PageContainer>
  )
}
export default DetailPage
