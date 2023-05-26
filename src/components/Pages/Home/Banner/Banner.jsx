

const Banner = () => {
    return (
        <div className="">
            <div className="hero h-[650px] my-7" style={{ backgroundImage: `url(https://live.staticflickr.com/2843/8813964275_6d4d9df26a_b.jpg)` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold ">Welcome to Toy Land - Where Imagination Comes to Life!</h1>
                        <p className="mb-5 text-3xl">Unleash Your Heroic Adventures with Action Figure Toys!</p>
                        <button className="btn btn-primary">Explore Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;