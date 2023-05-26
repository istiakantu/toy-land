
import { useEffect, useState } from "react";
import Toy from "./Toy";


const Toys = () => {
    const [toys, setToys] = useState([]);
    const [activeTab, setActiveTab] = useState('Marvel')


    useEffect(() => {
        fetch(`https://toy-land-server-murex.vercel.app/toys/${activeTab}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [activeTab])


    const handelTabClick = (tabName) => {
        setActiveTab(tabName);
    }
    return (
        <div className="mt-20 bg-base-300 pt-10">
            <h2 className="text-3xl text-center font-bold mt-5 pb-3">Shop by category</h2>
            <div className="flex justify-center gap-5 mb-5 p-4">
                <button onClick={() => handelTabClick("Marvel")} className={`btn ${activeTab == "Marvel" ? 'btn-primary' : ""
                    }`}>Marvel</button>
                <button onClick={() => handelTabClick("DC")} className={`btn ${activeTab == "DC" ? 'btn-primary' : ""
                    }`}>DC</button>
                <button onClick={() => handelTabClick("Disney")} className={`btn ${activeTab == "Disney" ? 'btn-primary' : ""
                    }`}>Disney</button>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-5">
                {
                    toys.map(toy => <Toy
                        key={toy._id}
                        toy={toy}
                    >
                    </Toy>)
                }
            </div>
        </div>
    );
};

export default Toys;