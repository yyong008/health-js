import React, { useState, useEffect, useRef } from 'react'
import './index.scss';

type ITransition = {
  show: boolean
  customStyle?: React.CSSProperties
  customClass?: string
  duration?: number | string
  name?: string
  beforeEnterFn?: Function
  enterFn?: Function
  beforeLeaveFn?: Function
  leaveFn?: Function
  onClick?: Function
  onTouchmove?: Function
}

const getClassNames = (name: string) => ({
  enter: `van-${name}-enter van-${name}-enter-active enter-class enter-active-class`,
  'enter-to': `van-${name}-enter-to van-${name}-enter-active enter-to-class enter-active-class`,
  leave: `van-${name}-leave van-${name}-leave-active leave-class leave-active-class`,
  'leave-to': `van-${name}-leave-to van-${name}-leave-active leave-to-class leave-active-class`,
})

const Transition: React.FC<ITransition> = (props) => {
  const {
    show = true,
    name = 'fade',
    duration = 300,
    customStyle,
    children,
  } = props
  const ref = useRef<any>({
    status: '',
    transitionEnded: '',
  })
  const [classes, setClasses] = useState<string>('')
  const [display, setDisplay] = useState<boolean>(false)
  const [inited, setInited] = useState<boolean>(false)
  const [currentDuration, setCurrentDuration] = useState<number | string>(
    duration,
  )

  const enter = () => {
    const { beforeEnterFn, enterFn } = props
    const classNames = getClassNames(name)

    ref.current.status = 'enter'
    beforeEnterFn()

    requestAnimationFrame(() => {
      if (ref.current.status !== 'enter') return

      enterFn()
      setInited(true)
      setDisplay(true)
      setClasses(classNames.enter)
      setCurrentDuration(duration)

      requestAnimationFrame(() => {
        if (ref.current.status !== 'enter') return

        ref.current.transitionEnd = false
        setClasses(classNames['enter-to'])
      })
    })
  }

  const leave = () => {
    if (!display) return

    const { beforeLeaveFn, leaveFn } = props
    const classNames = getClassNames(name)

    ref.current.status = 'leave'
    beforeLeaveFn()

    requestAnimationFrame(() => {
      if (ref.current.status !== 'leave') return

      leaveFn()
      setClasses(classNames.leave)
      setCurrentDuration(duration)

      requestAnimationFrame(() => {
        if (ref.current.status !== 'leave') return

        ref.current.transitionEnd = false

        setTimeout(() => onTransitionEnd(), duration as number)

        setClasses(classNames['leave-to'])
      })
    })
  }

  const onTransitionEnd = () => {
    if (ref.current.transitionEnded) return

    ref.current.transitionEnded = true

    if (ref.current.status === 'leave') {
      props.leaveFn()
    } else if (ref.current.status === 'enter') {
      props.enterFn()
    }

    if (!show && display) {
      setDisplay(false)
    }
  }

  const computedStyle = ({ currentDuration, display, customStyle }: any) => {
    let styles: React.CSSProperties = {}

    if (display) {
      styles.display = 'none'
    }
    styles['WebkitTransitionDuration'] = currentDuration + 'ms'
    styles['transitionDuration'] = currentDuration + 'ms'
    return {
      ...styles,
      ...customStyle,
    }
  }

  useEffect(() => {
    show ? enter() : leave()
  }, [show])

  return inited ? (
    <div
      className={'van-transition ' + 'custom-class ' + `${classes}`}
      style={computedStyle({ currentDuration, display, customStyle })}
      onTransitionEnd={onTransitionEnd}
    >
      {children}
    </div>
  ) : null
}
export default Transition
