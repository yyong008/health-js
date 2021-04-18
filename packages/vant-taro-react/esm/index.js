import React, { useRef, useState, useEffect } from 'react';
import classnames from 'classnames';

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

const Badge = () => {
    return (React.createElement("div", null, "badge"));
};

const Cell = (props) => {
    return React.createElement(React.Fragment, null);
};

const Icon = (props) => {
    return (React.createElement("i", { className: `van-icon van-icon-${props.name}`, style: {
            // width: `${props.size}px`,
            // height: `${props.size}px`,
            fontSize: `${props.size}px`,
            color: `${props.color}`,
        } }));
};

const Image = (props) => {
    const { src } = props;
    return React.createElement("img", { src: src });
};

const Info = () => {
    return React.createElement("div", null);
};

const getClassNames = (name) => ({
    enter: `van-${name}-enter van-${name}-enter-active enter-class enter-active-class`,
    'enter-to': `van-${name}-enter-to van-${name}-enter-active enter-to-class enter-active-class`,
    leave: `van-${name}-leave van-${name}-leave-active leave-class leave-active-class`,
    'leave-to': `van-${name}-leave-to van-${name}-leave-active leave-to-class leave-active-class`,
});
const Transition = (props) => {
    const { show = true, name = 'fade', duration = 300, customStyle, children, } = props;
    const ref = useRef({
        status: '',
        transitionEnded: '',
    });
    const [classes, setClasses] = useState('');
    const [display, setDisplay] = useState(false);
    const [inited, setInited] = useState(false);
    const [currentDuration, setCurrentDuration] = useState(duration);
    const enter = () => {
        const { beforeEnterFn, enterFn } = props;
        const classNames = getClassNames(name);
        ref.current.status = 'enter';
        beforeEnterFn === null || beforeEnterFn === void 0 ? void 0 : beforeEnterFn();
        requestAnimationFrame(() => {
            if (ref.current.status !== 'enter')
                return;
            enterFn === null || enterFn === void 0 ? void 0 : enterFn();
            setInited(true);
            setDisplay(true);
            setClasses(classNames.enter);
            setCurrentDuration(duration);
            requestAnimationFrame(() => {
                if (ref.current.status !== 'enter')
                    return;
                ref.current.transitionEnd = false;
                setClasses(classNames['enter-to']);
            });
        });
    };
    const leave = () => {
        if (!display)
            return;
        const { beforeLeaveFn, leaveFn } = props;
        const classNames = getClassNames(name);
        ref.current.status = 'leave';
        beforeLeaveFn === null || beforeLeaveFn === void 0 ? void 0 : beforeLeaveFn();
        requestAnimationFrame(() => {
            if (ref.current.status !== 'leave')
                return;
            leaveFn === null || leaveFn === void 0 ? void 0 : leaveFn();
            setClasses(classNames.leave);
            setCurrentDuration(duration);
            requestAnimationFrame(() => {
                if (ref.current.status !== 'leave')
                    return;
                ref.current.transitionEnd = false;
                setTimeout(() => onTransitionEnd(), duration);
                setClasses(classNames['leave-to']);
            });
        });
    };
    const onTransitionEnd = () => {
        var _a, _b;
        if (ref.current.transitionEnded)
            return;
        ref.current.transitionEnded = true;
        if (ref.current.status === 'leave') {
            (_a = props.leaveFn) === null || _a === void 0 ? void 0 : _a.call(props);
        }
        else if (ref.current.status === 'enter') {
            (_b = props.enterFn) === null || _b === void 0 ? void 0 : _b.call(props);
        }
        if (!show && display) {
            setDisplay(false);
        }
    };
    const computedStyle = ({ currentDuration, display, customStyle }) => {
        let styles = {};
        if (display) {
            styles.display = 'none';
        }
        styles['WebkitTransitionDuration'] = currentDuration + 'ms';
        styles['transitionDuration'] = currentDuration + 'ms';
        return Object.assign(Object.assign({}, styles), customStyle);
    };
    useEffect(() => {
        show ? enter() : leave();
    }, [show]);
    return inited ? (React.createElement("div", { className: 'van-transition ' + 'custom-class ' + `${classes}`, style: computedStyle({ currentDuration, display, customStyle }), onTransitionEnd: onTransitionEnd }, children)) : null;
};

const Overlay = (props) => {
    const { clickFn, show, customStyle, children, duration = 300 } = props;
    const noop = () => { };
    const onOverlayClick = () => {
        clickFn();
    };
    return (React.createElement(Transition, { show: show, customStyle: customStyle, customClass: "van-overlay", duration: duration, onClick: onOverlayClick, onTouchmove: noop }, children));
};

const Popup = (props) => {
    const { overlay, customStyles, duration, zIndex, clickFn, children } = props;
    return overlay ? React.createElement(Overlay, { show: overlay, customStyle: customStyles, duration: duration, zIndex: zIndex, clickFn: clickFn },
        children,
        React.createElement(Icon, { name: "arrow-down" })) : null;
};

const Tag = (props) => {
    const { children, closeable } = props;
    const computedStyle = () => {
        return {
            color: 'red',
        };
    };
    return (React.createElement("div", { className: "", style: computedStyle() },
        children,
        closeable ? React.createElement(Icon, { name: "close" }) : null));
};

export { Badge, Button, Cell, Icon, Image, Info, Overlay, Popup, Tag, Transition };
