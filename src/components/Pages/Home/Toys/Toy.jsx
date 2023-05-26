import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Providers/AuthProviders";
import Swal from "sweetalert2";


const Toy = ({ toy }) => {
    const {_id, picture, toyName, price, rating} = toy;
    const {user} = useContext(AuthContext)

    const handelShowDetails = ()=>{
        if(!user){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'You have to login first!',
              })
        }
    }
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl mb-10 py-3">
            <figure><img src={picture} alt="Shoes" className="h-64 w-60 rounded-lg"/></figure>
            <div className="card-body">
                <h2 className="text-4xl text-center">{toyName}</h2>
                <div className="flex mx-auto gap-8">
                    <p className="text-2xl">Price : ${price}</p>
                    <p className="text-2xl">Rating: {rating}</p>
                </div>
                <div className="card-actions justify-center">
                    <Link to={`toys/${_id}`}><button onClick={handelShowDetails} className="btn btn-primary">Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Toy;