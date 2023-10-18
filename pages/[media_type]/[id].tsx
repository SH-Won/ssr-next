import Intro from '@/components/detail/Intro'
import { QUERY_KEY, useDetailData } from '@/hooks'
import BackEnd from '@/network'
import { IMediaType } from '@/types/interface'
import { GetServerSideProps } from 'next'
import { useParams } from 'next/navigation'
import React from 'react'
import { dehydrate, QueryClient } from 'react-query'
import styled from 'styled-components'

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const queryClient = new QueryClient()
  const { media_type, id } = ctx.params as { media_type: IMediaType; id: string }
  try {
    const array = [
      {
        key: [media_type, id, QUERY_KEY.DETAIL],
        func: () => BackEnd.media.getDetail(media_type, parseInt(id)),
      },
      {
        key: [media_type, id, QUERY_KEY.SIMILAR],
        func: () => BackEnd.media.getSimilar(media_type, parseInt(id)),
      },
    ]
    await Promise.all(
      array.map((item) =>
        queryClient.fetchQuery(item.key, item.func, {
          staleTime: Infinity,
        })
      )
    )
    return {
      props: {
        dehydratedState: JSON.parse(JSON.stringify(dehydrate(queryClient))),
      },
    }
  } catch (e) {
    return {
      notFound: true,
    }
  } finally {
  }
}
const PageContainer = styled.div`
  min-height: 100vh;
`
const DetailPage = () => {
  const { media_type, id } = useParams() as { media_type: IMediaType; id: string }
  const { data, isLoading } = useDetailData(media_type, parseInt(id))
  if (isLoading) return null
  return (
    <PageContainer>
      <Intro item={data!} />
    </PageContainer>
  )
}
export default DetailPage
