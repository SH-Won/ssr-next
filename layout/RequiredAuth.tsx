import useAuth from '@/hooks/useAuth'
import useAxiosAuth from '@/hooks/useAxiosAuth'
import useRefreshToken from '@/hooks/useRefreshToken'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/navigation'
import React, { ComponentType, FunctionComponent, useEffect, useState } from 'react'

interface RequiredAuthProps {
  children: React.ReactNode
}
const RequiredAuth = ({ children }: RequiredAuthProps) => {
  const { checkAuth } = useAuth()
  const [mountPage, setMountPage] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const axiosAuthClient = useAxiosAuth()

  // const checkAuth = async () => {
  //   try {
  //     const response = await axiosAuthClient.get('/auth', {
  //       headers: {
  //         Authorization: `Bearer ${auth?.accessToken}`,
  //       },
  //       withCredentials: true,
  //     })
  //     console.log('requiredAuth', response)
  //     if (response.data.success) {
  //       setMountPage(true)
  //     }
  //   } catch (e: unknown) {
  //     if (e instanceof AxiosError<any, any>) {
  //       if (e.response?.status === 403) {
  //         // const response = await refreshToken()
  //         // checkAuth()
  //       }
  //     }
  //   } finally {

  //     setLoading(false)
  //   }
  //   //
  // }

  useEffect(() => {
    checkAuth()
      .then((response) => {
        console.log(response)
        if (response.data.success) setMountPage(true)
      })
      .catch(() => router.replace('/login'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return null

  return <>{mountPage && children}</>
}

export function withAuth<P extends object>(Component: ComponentType<P>): React.FC<P> {
  function returnFunc(props: P) {
    return (
      <RequiredAuth>
        <Component {...props} />
      </RequiredAuth>
    )
  }
  returnFunc.displayName = 'returnFunc'
  return returnFunc
}

export default RequiredAuth
