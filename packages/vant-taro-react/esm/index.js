import React from 'react';
import classnames from 'classnames';
import 'vant-icons';

const Button = (props) => {
    const { type, dashed } = props;
    return (React.createElement("button", { className: classnames({
            [`btn`]: true,
            [`btn-default`]: !type,
            [`btn-${type}`]: !!type,
            [`btn-dashed`]: !!dashed,
        }) },
        React.createElement("span", null, props.children),
        React.createElement("i", { className: "van-icon van-icon-alipay" })));
};

var index = {
    Button: Button
};

export default index;
