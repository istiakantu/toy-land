
import { useEffect } from "react";
import HotDeal from "../HotDeal/HotDeal";
import NewArrival from "../NewArrival/NewArrival";
import Toys from "../Toys/Toys";
import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";


const Home = () => {
    useEffect(()=>{
        document.title=('Toy-Land | Home')
    },[])
    
    return (
        <div>
            <Banner></Banner>
            <Gallery></Gallery>
            <Toys></Toys>
            <NewArrival></NewArrival>
            <HotDeal></HotDeal>
        </div>
    );
};

export default Home;