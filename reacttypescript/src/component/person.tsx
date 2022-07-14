import React from 'react'
type personProps={
    name:{
        first:string
        last:string
    }
}

const Person = (props:personProps) => {
    const {name } = props;

  return (
    <div>
        {name.first + name.last}
    </div>
  )
}

export default Person;