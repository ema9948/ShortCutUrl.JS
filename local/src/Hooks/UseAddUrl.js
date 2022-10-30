import React, { useState } from 'react'
import { notify, notifyError } from '../utils/toastNotify';
import { isValidURL } from '../utils/uriValidator';
import { url } from '../utils/urlBackEnd'
import UseAllUrl from './UseAllUrl';
import { token } from '../utils/urlBackEnd';
const UseAddUrl = () => {
    const { allUrl } = UseAllUrl()

    const add = (data) => {

        if (!isValidURL(data)) return notifyError()

        const date = fetch(`${url}/api/v1/url/add`, {
            method: "post",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (res?.ok) {
                    notify()
                    allUrl()
                }
                if (!res?.ok) {
                    notifyError();
                }
            })
            .catch((errors) => console.log(errors))

        return null;
    }

    return { add }
}

export default UseAddUrl