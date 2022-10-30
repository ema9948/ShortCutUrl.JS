import React from 'react'
import UseDeleteUri from '../Hooks/UseDeleteUri'
import { notifyCopy } from '../utils/toastNotify';

const UrlTable = ({ item, update, url }) => {
    const { deleteUrl } = UseDeleteUri();
    return (
        <tr className='flex justify-around py-3 border border-t-0 border-r-0 border-l-0 border-black hover:bg-slate-500'>
            <td className='text-xs md:text-sm flex-auto text-center'>{item?.url}</td>
            <td className='text-xs md:text-sm flex-auto text-white cursor-pointer active:scale-105' onClick={() => { navigator.clipboard.writeText(item?.url); notifyCopy() }}>{item?.urlShortCut}</td>
            <td className='text-xs md:text-sm rounded px-2 bg-red-500 cursor-pointer active:scale-110 mx-1 ' onClick={() => deleteUrl(item?.id)}>x </td>
            <td className='text-xs  md:text-sm rounded px-2 bg-indigo-500 cursor-pointer active:scale-110 mx-1 lg:mx-10' onClick={() => { update(true); url({ url: item?.url, id: item?.id }) }}> i</td>
        </tr>

    )
}

export default UrlTable