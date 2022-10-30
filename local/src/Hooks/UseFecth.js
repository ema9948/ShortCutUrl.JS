import React, { useContext, useEffect, useState } from 'react'
import { appContext } from '../components/UserProvider';
import { notifyLogin, notifyRegister, notifyRegisterError } from '../utils/toastNotify';
import { url } from '../utils/urlBackEnd';

const UseFecth = () => {
    const { user, setUser } = useContext(appContext);

    const userLogin = (user) => {
        const data = fetch(url + "/api/v1/user/login", {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((res) => res.json())
            .then((date) => {
                if (date?.msg) return notifyLogin(date?.msg)
                const { nombre, token } = date;

                setUser({ nombre })
                localStorage.setItem("token", JSON.stringify({ token }))
            })
            .catch((error) => console.log(error))


    }

    const registerUser = (user) => {
        const data = fetch(url + "/api/v1/user/register", {
            method: "post",
            credentials: "include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then((res) => {
                console.log(res)
                if (res?.ok) {
                    return notifyRegister()
                }
                if (res?.status == 401) {
                    return notifyRegisterError()
                }
            })
    }

    const logOut = () => {
        const data = fetch(url + "/api/v1/user/logout", {
            credentials: "include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*",
            },
        })
            .then((res) => console.log(res))
            .catch((error) => console.log(error))

    }
    return { userLogin, logOut, registerUser }
}

export default UseFecth