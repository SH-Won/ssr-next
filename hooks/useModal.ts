import { IModalState, modal } from '@/store/modal'
import { useSetRecoilState } from 'recoil'

const useModal = () => {
  const setModal = useSetRecoilState(modal)
  const showModal = <T>(modalConfig: IModalState<T>) => {
    console.log(modalConfig)
    setModal((prev) => {
      return [...prev, modalConfig]
    })
  }
  const removeModal = () => {
    setModal((prev) => {
      return [...prev.slice(1)]
    })
  }
  return {
    showModal,
    removeModal,
  }
}

export default useModal
