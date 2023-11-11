import React, { useContext } from 'react'

interface AuthContextProps {
  auth: {
    name: string
    email: string
    accessToken: string
  }
  setAuth: React.SetStateAction<AuthContextProps['auth']>
}
// const authContext = useContext<AuthContextProps>({
// })

const authProvider = () => {
  return <div>authProvider</div>
}

export default authProvider
