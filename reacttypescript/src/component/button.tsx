import React from 'react'

type ButtonProps = {
    handleClick:(event:React.MouseEvent<HTMLButtonElement>, id:number)=>void
}

const Button = (props:ButtonProps) => {
    let {handleClick} = props;
  return (
    <button onClick={(event)=>handleClick(event, 1)}>Click</button>
  )
}

export default Button