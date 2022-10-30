import { useContext } from 'react';
import { appContext } from '../components/UserProvider';
import { url } from '../utils/urlBackEnd';
import { token } from '../utils/urlBackEnd';

const UseAllUrl = () => {

    const { setUrl } = useContext(appContext);


    const allUrl = () => {

        const data = fetch(url + "/api/v1/url/allUrl", {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            }
        })
            .then((res) => res.json())
            .then((res) => {
                setUrl(res.reverse())
            })
            .catch((error) => console.log(error))


    }

    return { allUrl };
}

export default UseAllUrl