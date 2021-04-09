import React from 'react'
import classnames from 'classnames'

const TransitionManage: React.FC<any> = (props) => {
  const { children } = props

  return (
    <div
      className={classnames({
        transition: true,
      })}
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        className={classnames({
          'transition-wrapper': true,
        })}
      >
        {children}
      </div>
    </div>
  )
}

export default TransitionManage
