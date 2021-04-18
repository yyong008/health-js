import React from 'react'
import Icon from '../icon/index'

export type ITagProps = {
  size: string
  mark: boolean
  color: string
  plain: boolean
  round: boolean
  textColor: string
  type: string
  closeable: boolean
}

const Tag: React.FC<ITagProps> = (props) => {
  const { children, closeable } = props

  const computedStyle = () => {
    return {
      color: 'red',
    }
  }
  return (
    <div className="" style={computedStyle()}>
      {children}
      {closeable ? <Icon name="close" /> : null}
    </div>
  )
}

export default Tag
