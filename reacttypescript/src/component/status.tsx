import React from 'react';

type statusProps={
    status:"loading" | "success" | "error"
}

const Status = (props:statusProps) => {
    let {status} = props;

    let message;
    if (status === "loading"){
        message= "Loading...";
    }else if(status==="success"){
        message= "Data fetched successfully";
    }else if(status="error"){
        message= "Error fetching data";
    }
  return (
    <div>
        <p>{status} - {message}</p>
    </div>
  )
}

export default Status;