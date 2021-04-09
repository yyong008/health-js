import React from 'react';

type IImageProps = {
    src: string;
}

const Image: React.FC<IImageProps> = (props) => {
    const { src } = props
    return <img src={src} />
}

export default Image;
