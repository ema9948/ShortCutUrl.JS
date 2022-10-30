import React, { useState } from 'react'
import { notifyUpdate, notifyUpdateError } from '../utils/toastNotify';
import { url as urlBackEnd } from '../utils/urlBackEnd'
import UseAllUrl from './UseAllUrl';

const UsePatchUrl = () => {
    const { allUrl } = UseAllUrl();

    const [url, setUrl] = useState({});
    const [urlUpdate, setUrlUpdate] = useState(false);

    const patchUrl = (data) => {

        const res = fetch(urlBackEnd + "/api/v1/url/edit/" + url?.id, {
            method: "PATCH",
            credentials: "include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((res) => {
                if (res?.ok) {
                    allUrl()
                    notifyUpdate()
                }
                if (!res?.ok) {
                    notifyUpdateError()
                }
            })
            .catch((error) => console.log(error))
    }
    return { patchUrl, url, setUrl, urlUpdate, setUrlUpdate }
}

export default UsePatchUrl