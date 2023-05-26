import { useContext } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../Providers/AuthProviders";


const ToyRow = ({ toy }) => {
    const {_id, sellerName, toyName, category, price, rating, quantity} = toy;
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
        <tr>
            <td>{toyName}</td>
            <td>{sellerName}</td>
            <td>{category}</td>
            <td>$ {price}</td>
            <td>{rating}</td>
            <td>{quantity}</td>
            <td>
                <Link to={`/toys/${_id}`}><button onClick={handelShowDetails} className="btn btn-primary">Details</button></Link>
            </td>
        </tr>
    );
};

export default ToyRow;