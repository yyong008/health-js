import React from 'react'

type IIconProps = {
  name: string
  size: string
  color?: string
}

const Icon: React.FC<IIconProps> = (props) => {
  return (
    <i
      className={`van-icon van-icon-${props.name}`}
      style={{
        // width: `${props.size}px`,
        // height: `${props.size}px`,
        fontSize: `${props.size}px`,
        color: `${props.color}`,
      }}
    ></i>
  )
}

export default Icon
