import { useRecoilState } from 'recoil'
import { _auth } from '@/store/auth'

const useAuth = () => {
  const [auth, setAuth] = useRecoilState(_auth)

  return { auth, setAuth }
}

export default useAuth
