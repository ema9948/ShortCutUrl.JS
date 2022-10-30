import React, { createContext, useState } from 'react'
export const appContext = createContext()

const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [urls, setUrls] = useState([])

    if (user?.nombre) {
        localStorage.setItem("user", JSON.stringify(user) || "")
    }

    if (!user?.nombre) {

        let user = localStorage.getItem("user");
        user = JSON.parse(user)

        if (user != null) setUser(user)
    }

    return (
        <appContext.Provider value={{ user, setUser, urls, setUrls }}>
            {children}
        </appContext.Provider>
    )
}

export default UserProvider
