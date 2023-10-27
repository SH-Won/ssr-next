import useAuth from '@/hooks/useAuth'
import useAxiosAuth from '@/hooks/useAxiosAuth'
import useRefreshToken from '@/hooks/useRefreshToken'
import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import React, { ComponentType, FunctionComponent, useEffect, useState } from 'react'

interface RequiredAuthProps {
  children: React.ReactNode
}
const RequiredAuth = ({ children }: RequiredAuthProps) => {
  const { auth } = useAuth()
  const [mountPage, setMountPage] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const axiosAuthClient = useAxiosAuth()

  const checkAuth = async () => {
    try {
      const response = await axiosAuthClient.get('/auth', {
        headers: {
          Authorization: `Bearer ${auth?.accessToken}`,
        },
        withCredentials: true,
      })
      console.log('requiredAuth', response)
      if (response.data.success) {
        setMountPage(true)
      }
    } catch (e: unknown) {
      if (e instanceof AxiosError<any, any>) {
        if (e.response?.status === 403) {
          // const response = await refreshToken()
          // checkAuth()
        }
      }
    } finally {
      setLoading(false)
    }
    //
  }

  useEffect(() => {
    console.log(auth)
    checkAuth()
  }, [])

  if (loading) return null

  return <>{mountPage && children}</>
}

export const withAuth =
<P extends {}>(Component: ComponentType<P>) : React.FC<P> => 
  (props: P) => {
    return (
      <RequiredAuth>
        <Component {...props} />
      </RequiredAuth>
    )
  }
export default RequiredAuth
