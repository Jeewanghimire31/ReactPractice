import React from 'react';

type ContainerProps = {
    styles:React.CSSProperties
}

const Container = (props:ContainerProps) => {

    const {styles} = props;
  return (
    <div style={styles}>
        container

    </div>
  )
}

export default Container;