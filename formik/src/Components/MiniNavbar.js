import React, {useContext} from 'react'
import { userContext } from '../App2';

const MiniNavbar = () => {
    let test = useContext(userContext);
  return (
    <div>
        <button>{test.name}</button>
    </div>
  );
};

export default MiniNavbar;