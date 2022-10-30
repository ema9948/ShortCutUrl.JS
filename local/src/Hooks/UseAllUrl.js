import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { appContext } from '../components/UserProvider';
import { notify, notifyLogin } from '../utils/toastNotify';
import { url } from '../utils/urlBackEnd';

const UseAllUrl = () => {

    const { setUrls } = useContext(appContext);

    const allUrl = () => {
        const token = JSON.parse(localStorage.getItem('token'))

        const data = fetch(url + "/api/v1/url/allUrl", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then((res) => res.json())
            .then((res) => {
                setUrls(res)
            })
            .catch((error) => console.log(error))


    }

    return { allUrl };
}

export default UseAllUrl