import React, { createContext, useState } from 'react'

export const appContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [url, setUrl] = useState([])

    if (user?.nombre) {
        localStorage.setItem("user", JSON.stringify(user) || "")
    }

    if (!user?.nombre) {

        let user = localStorage.getItem("user");
        user = JSON.parse(user)

        if (user != null) setUser(user)
    }

    return (
        <appContext.Provider value={{ user, setUser, url, setUrl }}>
            {children}
        </appContext.Provider>
    )
}

export default UserProvider
