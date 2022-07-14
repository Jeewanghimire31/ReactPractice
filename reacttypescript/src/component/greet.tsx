import React from 'react'

type GreetProps = {
    name:string
    contact:number
    // isLoggedIn:boolean

}

const Greet = (props: GreetProps) => {
    const {name, contact} = props;
  return (
    <div>
        
        <h1>About</h1>
        <p>I am {name} living in Ktm Nepal and Dealing with my computer to make Future good. My Number is {contact} </p> 
    </div>
  )
}

export default Greet;