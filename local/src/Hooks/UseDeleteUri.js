import React, { useState } from 'react'
import { notifyDelete, notifyDeleteError } from '../utils/toastNotify'
import { url } from '../utils/urlBackEnd'
import UseAllUrl from './UseAllUrl'
const UseDeleteUri = () => {
    const { allUrl } = UseAllUrl();

    const [errorDelete, setErrorDelete] = useState(false)

    const deleteUrl = (id) => {

        const token = JSON.parse(localStorage.getItem('token'))

        const res = fetch(`${url}/api/v1/url/${id}`, {
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then(res => {

                if (res?.ok) {
                    allUrl()
                    notifyDelete()
                }
                if (!res?.ok) {

                    notifyDeleteError()
                }
            })
            .then(err => console.log(err))
    }
    return { deleteUrl, errorDelete }
}

export default UseDeleteUri