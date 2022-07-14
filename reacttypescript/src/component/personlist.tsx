import React from "react";

// import { personlistProps } from "./person.types";

import {Name} from "./person.types";

type personlistProps = {
    names:Name[]
}

const Personlist = (props:personlistProps) => {
    const {names} = props;
  return (
    <div>
        {names.map((name)=>{
            return <p key={name.first}>{name.first} {name.last}</p>
        })}
    </div>
  )
}

export default Personlist