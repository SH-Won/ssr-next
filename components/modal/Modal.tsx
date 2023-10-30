import { modal } from '@/store/modal'
import React from 'react'
import { useRecoilValue } from 'recoil'
import SideModal from './SideModal'

const Modal = () => {
  const modalState = useRecoilValue(modal)

  const renderModal = () => {
    return modalState.map((state, index) => {
      switch (state.type) {
        case 'side':
          return <SideModal {...state.props} key={state.type + index} />
        default:
          null
      }
    })
  }

  return <>{renderModal()}</>
}

export default Modal
