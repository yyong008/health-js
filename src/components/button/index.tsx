import React from 'react';
import './index.scss';
import classnames from 'classnames';

type ButtonProps = {
    type?: 'default' | 'primary' | 'info' | 'warning' | 'warning', // 按钮类型
    dashed?: boolean, // 虚线框
    plain?: boolean, // 朴素按钮
    hairline?: boolean, // 细边框
    disabled?: boolean, // 禁用状态
    loading?: boolean, // 加载状态
    square?: boolean, // 方形
    round?: boolean, // 圆形
    icon?: string, // 图形
    size?: 'large' | 'normal' | 'small' | 'mini',
    block?: boolean, // 块状
    color?: string, // 颜色
    children?: any
}

const Button: React.FC<ButtonProps> = (props) => {
    const { type, dashed } = props

    return (
        <button className={classnames({
            [`btn`]: true,
            [`btn-default`]: !type,
            [`btn-${type}`]: !!type,
            [`btn-dashed`]:!!dashed,
        })}>
            <span>{props.children}</span>
            <i className="van-icon van-icon-alipay"></i>
        </button>
    )
}

export default Button;
