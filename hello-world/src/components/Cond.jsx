import React, { useState } from 'react'

const Cond = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(true)
    let msg;
    if(isLoggedIn) msg = <div>Hi Rifna</div>
    else msg =  <div>hi guest</div>
    return (
       <>{msg}
       {isLoggedIn ? <div>Hi Rifna</div>: <div>Hi </div>}
       </> 
    )
}

export default Cond