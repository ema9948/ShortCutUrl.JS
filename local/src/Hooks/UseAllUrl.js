import { useContext } from 'react';
import { appContext } from '../components/UserProvider';
import { url } from '../utils/urlBackEnd';


const UseAllUrl = () => {
    const { setUrl } = useContext(appContext);

    const allUrl = () => {

        const data = fetch(url + "/api/v1/url/allUrl", {
            mode: "cors",
            credentials: "include",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': "*",
            },
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