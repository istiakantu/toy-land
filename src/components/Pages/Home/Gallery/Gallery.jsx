import img1 from '../../../../assets/images/gallery/1.jpg'
import img2 from '../../../../assets/images/gallery/2.jpg'
import img3 from '../../../../assets/images/gallery/3.jpg'
import img4 from '../../../../assets/images/gallery/4.jpg'
import img5 from '../../../../assets/images/gallery/5.jpg'
import img6 from '../../../../assets/images/gallery/6.jpg'
import img7 from '../../../../assets/images/gallery/7.jpg'

const Gallery = () => {
    return (
        <div className='mt-20 py-20 px-5 bg-gray-900'>
            <h2 className='text-3xl font-bold text-center mb-8'>Toy Gallery</h2>
            <div className="carousel rounded-box gap-5 mx-9">
                <div className="carousel-item h-60">
                    <img src={img1} alt="Burger" className=' w-60'/>
                </div>
                <div className="carousel-item h-60">
                    <img src={img2} alt="Burger" className=' w-60'/>
                </div>
                <div className="carousel-item h-60">
                    <img src={img3} alt="Burger" className=' w-60'/>
                </div>
                <div className="carousel-item h-60">
                    <img src={img4} alt="Burger h-60" className=' w-60'/>
                </div>
                <div className="carousel-item h-60">
                    <img src={img5} alt="Burger h-60" className=' w-60'/>
                </div>
                <div className="carousel-item h-60">
                    <img src={img6} alt="Burger h-60" className=' w-60'/>
                </div>
                <div className="carousel-item h-60">
                    <img src={img7} alt="Burger" className=' w-60'/>
                </div>
            </div>
        </div>
    );
};

export default Gallery;