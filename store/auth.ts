import { atom } from 'recoil'

interface IAuth {
  name: string
  email: string
  accessToken: string
}
const initialState = {
  name: '',
  email: '',
  accessToken: '',
}
export const _auth = atom<IAuth>({
  key: 'auth',
  default: initialState,
})
