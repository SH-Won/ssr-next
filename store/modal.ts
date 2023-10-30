import { atom, selector } from 'recoil'

export interface IModalState<T> {
  type: 'basic' | 'side' | 'error'
  props: T
}

export const modal = atom<IModalState<any>[]>({
  key: '_modal',
  default: [],
})
