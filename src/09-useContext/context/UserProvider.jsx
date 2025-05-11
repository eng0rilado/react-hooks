import React, { useState } from 'react'
import { UserContext } from './UserContext'

// const user = {
//     id:12,
//     name:"Gory"
// }

//childrens del componente (ejemplo el children del router). Opcional.
export const UserProvider = ({children}) => {

    const [user, setUser] = useState({});

  return (
    <UserContext.Provider value={{user, setUser}}> 
        {children}
    </UserContext.Provider>
  )
}
