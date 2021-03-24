import React from 'react';
import './index.scss';

type ButtonProps = {
    type: 'default' | 'primary' | 'info' | 'warning' | 'warning', // 按钮类型
    plain: boolean, // 朴素按钮
    hairline: boolean, // 细边框
    disabled: boolean, // 禁用状态
    loading: boolean, // 加载状态
    square: boolean, // 方形
    round: boolean, // 圆形
    icon: string, // 图形
    size: 'large' | 'normal' | 'small' | 'mini',
    block: boolean, // 块状
    color: string, // 颜色
}

const Button: React.FC<ButtonProps> = (props) => {
    const { type } = props

    return (
        <button className='button'>按钮</button>
    )
}

export default Button;
