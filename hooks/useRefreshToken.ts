import axios, { AxiosError } from 'axios'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import useAuth from './useAuth'
import { useSetRecoilState } from 'recoil'
import { _auth } from '@/store/auth'

const useRefreshToken = () => {
  const setAuth = useSetRecoilState(_auth)
  const router = useRouter()
  const timer = useRef<NodeJS.Timeout>()

  // useEffect(() => {

  //   return () => {
  //     console.log('clear', timer)
  //     clearTimeout(timer.current)
  //   }
  // },[])
  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:5000/refresh', {
        withCredentials: true,
      })
      console.log(response.data)
      setAuth((prev) => ({ ...prev, accessToken: response.data.accessToken }))
      // if(timer){
      //   clearTimeout(timer.current)
      // }
      // timer.current = setTimeout(() => {
      //   console.log('refresh timer')
      //   refreshToken()
      // },10000)

      return response.data.accessToken
    } catch (e) {
      console.log('refreshtoken is expired')
      // router.replace('/login')
      if (e instanceof AxiosError<any, any>) {
        console.log('refresh error')
        if (e.response?.status === 403) {
          // router.replace('/login')
        }
        //
      }
    }
  }
  return refreshToken
}

export default useRefreshToken
