import React from 'react';
import Icon from '../icon/index';
import Overlay from '../overlay/index';

export type IPopupProps = {
    overlay: boolean
    customStyles: React.CSSProperties;
    duration: number;
    zIndex:number;
    clickFn: Function
}

const Popup: React.FC<IPopupProps> = (props) =>{
    const { overlay, customStyles, duration,zIndex, clickFn,children} = props;
    return overlay ? <Overlay
        show={overlay}
        customStyle={customStyles}
        duration={duration}
        zIndex={zIndex}
        clickFn={clickFn}
    >
        {children}
        <Icon
            name="arrow-down" 
        ></Icon>
    </Overlay> : null
}

export default Popup;
