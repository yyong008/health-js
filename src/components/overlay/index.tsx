import React from 'react'
import Transition from '../transition/index'

export type IOverlayProps = {
  show: boolean
  customStyle: React.CSSProperties
  duration?: number
  zIndex: number
  clickFn: Function
}

const Overlay: React.FC<IOverlayProps> = (props) => {
  const { clickFn, show, customStyle, children, duration = 300 } = props
  const noop = () => {}
  const onOverlayClick = () => {
    clickFn()
  }
  return (
    <Transition
      show={show}
      customStyle={customStyle}
      customClass="van-overlay"
      duration={duration}
      onClick={onOverlayClick}
      onTouchmove={noop}
    >
      {children}
    </Transition>
  )
}

export default Overlay
