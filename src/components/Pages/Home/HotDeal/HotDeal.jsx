import { useEffect, useState } from 'react';
import img from '../../../../assets/images/background.jpg'
import Aos from 'aos';
import 'aos/dist/aos.css'

const HotDeal = () => {


    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 15);

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(()=>{
        Aos.init({duration:2000})
    },[])

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            const daysRemaining = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hoursRemaining = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutesRemaining = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const secondsRemaining = Math.floor((distance % (1000 * 60)) / 1000);

            setDays(daysRemaining);
            setHours(hoursRemaining);
            setMinutes(minutesRemaining);
            setSeconds(secondsRemaining);

            if (distance < 0) {
                clearInterval(interval);
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section className='py-5 bg-base-200 mb-20 my-20 mx-8 rounded-lg'>
            <h2 className='font-bold text-5xl text-center py-5 text-cyan-600'>Hot Deal</h2>
            <div className="hero  ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={img} className="max-w-sm rounded-lg shadow-2xl w-full"  data-aos='fade-left'/>
                <div className='w-full lg:w-1/2 m-5'  data-aos='fade-right'>
                    <div className="grid grid-flow-col gap-5 text-center auto-cols-max">
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": days }}></span>
                            </span>
                            days
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": hours }}></span>
                            </span>
                            hours
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": minutes }}></span>
                            </span>
                            min
                        </div>
                        <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                            <span className="countdown font-mono text-5xl">
                                <span style={{ "--value": seconds }}></span>
                            </span>
                            sec
                        </div>
                    </div>
                    <h1 className="text-5xl font-bold my-5">Bye One Get One <span className='text-red-500'>FREE</span></h1>
                    <button className="btn btn-warning">Bye Now!</button>
                </div>
            </div>
        </div>
        </section>
    );
};

export default HotDeal;