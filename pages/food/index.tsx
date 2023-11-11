import { axiosOpenApiInstance } from '@/network/axios'
import React, { useEffect } from 'react'

const FoodPage = () => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axiosOpenApiInstance.get('', {
          params: {
            // KEY: process.env.NEXT_PUBLIC_OPEN_API_KEY,
            // TYPE: 'json',
            // SERVICE: 'GdAdminMesureFood',
            // START_INDEX: 1,
            // END_INDEX: 1000,
            UPSO_NM: encodeURIComponent('숯불'),
          },
        })
        console.log(response)
      } catch (e) {
        console.log(e)
      }
    }
    fetchData()
  }, [])
  return <div>index</div>
}

export default FoodPage
