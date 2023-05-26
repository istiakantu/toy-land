import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


const ToyDetails = () => {
    useEffect(()=>{
        document.title=('Toy-Land | Toy-Details')
    },[])

    const toyDetails = useLoaderData();
    const { picture, toyName, sellerName, sellerEmail, price, rating, quantity, description } = toyDetails;

    return (
        <div className="hero min-h-screen bg-base-200 text-slate-300">
            <div className="hero-content flex-col lg:flex-row">
                <img src={picture} className="max-w-sm rounded-lg shadow-2xl" />
                <div className="ml-16">
                    <h1 className="text-5xl font-bold text-center">{toyName}</h1>
                    <div className="mt-10">
                        <div className="grid grid-cols-2 mb-5">
                            <p className="text-2xl">Seller : {sellerName}</p>
                            <p className="text-2xl">Email : {sellerEmail}</p>
                        </div>
                        <div className="flex gap-32">
                            <p className="text-2xl">Price : ${price}</p>
                            <p className="text-2xl">Available Quantity : {quantity}</p>
                            <p className="text-2xl">Rating : {rating}</p>
                        </div>
                    </div>
                    <p className="py-6">{description}</p>
                    <button className="btn btn-primary">Bye Now</button>
                </div>
            </div>
        </div>
    );
};

export default ToyDetails;