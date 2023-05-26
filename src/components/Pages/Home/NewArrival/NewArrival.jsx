import img1 from '../../../../assets/images/hulkbuster.jpg'
import img2 from '../../../../assets/images/ironman.jpg'
import img3 from '../../../../assets/images/batman.jpg'
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'

const NewArrival = () => {

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    return (
        <section className='bg-white m-8 rounded mt-24'>
            <h2 className='font-bold text-5xl text-center py-5 text-cyan-600'>New Arrivals</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 p-4'>
                <div className='mx-auto mb-5 border p-5' data-aos='fade-right'>
                    <img src={img1} alt="" className='h-[400px]' />
                    <div className='text-center font-semibold  mt-3 text-zinc-900'>
                        <h2 className='text-5xl mb-2'>Hulk Buster</h2>
                        <p className='text-2xl'>Price : $595</p>
                    </div>
                </div>
                <div className='mx-auto mb-5 border p-5' data-aos='fade-down'>
                    <img src={img3} alt="" className='h-[400px]' />
                    <div className='text-center font-semibold  mt-3 text-zinc-900'>
                        <h2 className='text-5xl mb-2'>Batman</h2>
                        <p className='text-2xl'>Price : $205</p>
                    </div>
                </div>
                <div className='mx-auto mb-5 border p-5' data-aos='fade-left'>
                    <img src={img2} alt="" className='h-[400px]' />
                    <div className='text-center font-semibold  mt-3 text-zinc-900'>
                        <h2 className='text-5xl mb-2'>Mark-70</h2>
                        <p className='text-2xl'>Price : $483</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewArrival;