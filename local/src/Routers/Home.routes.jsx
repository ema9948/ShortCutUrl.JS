import { useContext, useEffect, useState } from 'react';
import { get, set, useForm } from 'react-hook-form';
import avatar from "../img/astronaut.svg"
import { Toaster } from 'react-hot-toast';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import UrlTable from '../components/UrlTable';
import { appContext } from '../components/UserProvider';
import UseAddUrl from '../Hooks/UseAddUrl';
import UseAllUrl from '../Hooks/UseAllUrl';
import UsePatchUrl from '../Hooks/UsePatchUrl';

const Home = () => {
    const { urls, setUrls } = useContext(appContext)
    const { register, handleSubmit, watch, formState: { errors }, setValue, reset } = useForm();
    const { urlUpdate, setUrlUpdate, patchUrl, setUrl, url: urlForm } = UsePatchUrl();
    const { add } = UseAddUrl();
    const { allUrl } = UseAllUrl();

    useEffect(() => {
        allUrl()
    }, [])

    return (
        <div className='w-screen h-screen grid grid-rows-6 grid-cols-1 bg-fondo relative'>
            <img src={avatar} alt="" className="absolute  z-0 animate-infinity hidden lg:block lg:top-1/4  lg:right-3/4" />

            {/* //? NAVBAR */}
            <div className='row-span-1 col-span-1'>
                <Navbar />
            </div>

            {/* //? ADD URL */}
            <div className='row-span-1 col-span-1 text-center z-10'>
                {
                    urlUpdate &&
                    <form onSubmit={handleSubmit((data) => { patchUrl(data); setUrlUpdate(false); reset({ url: "" }) })} className='w-80 h-auto md:h-32 md:w-96  mx-auto flex flex-col justify-around items-center'>
                        <label htmlFor="add" className='text-3xl font-extrabold'>Editar ShortCutUrl</label>
                        <input type="text" id='add'  {...register("url", { required: "Campo requerido." }, setValue("url", urlForm.url))} className='rounded border-2 border-black w-48 px-1 mx-5' />
                        <h4 className='text-red-600 text-sm font-extrabold'>{errors?.url?.message}</h4>
                            <button type='submit' className='rounded border border-black font-extrabold active:scale-110 bg-sky-600 w-32'  >Editar</button>

                    </form>

                }
                {
                    !urlUpdate &&
                    <form onSubmit={handleSubmit(data => { add(data); reset({ url: "" }) })} className='w-80 h-auto md:h-32 md:w-96  mx-auto flex flex-col justify-around items-center'>
                        <label htmlFor="add" className='text-3xl font-extrabold'>Generar ShortCutUrl</label>
                        <input type="text" id='add' {...register("url", { required: "Campo requerido." })} className='rounded border-2 border-black w-48 px-1 mx-5' />
                        <h4 className='text-red-600 text-sm font-extrabold'>{errors?.url?.message}</h4>
                        <button type='submit' className='rounded border border-black font-extrabold active:scale-110 bg-sky-600 w-32'  >Agregar</button>
                    </form>
                }
                {
                    <Toaster />
                }
            </div>

            {/* //? All url */}
            <div className='row-span-3 col-span-1 flex justify-center z-20 px-1 '>
                <table className='h-full w-full  md:w-[800px] roud border border-black'>
                    <thead className=' border  border-black bg-gray-600 text-white'>
                        <tr className='flex justify-between lg:justify-around px-2 lg:px-0'>
                            <th className=''>Url</th>
                            <th>ShortCurlUrl</th>
                            <th>Accciones</th>
                        </tr>
                    </thead>
                    <tbody className='w-full h-full flex flex-col overflow-auto bg-gray-400'>
                        {
                            urls.map((item) => <UrlTable key={item.id} item={item} update={setUrlUpdate} url={setUrl} />)
                        }
                    </tbody>
                </table>
            </div>

            {/* //? FOOTER */}
            <div className='row-span-1 col-span-1 flex flex-col justify-end'>
                <Footer />
            </div>
        </div >
    )
}

export default Home