
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const MyToyRow = ({ toy, toys, setToys }) => {
    const { _id, toyName, category, price, rating, quantity, picture, } = toy;

    const handelDelete = _id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://toy-land-server-murex.vercel.app/toy/${_id}`,{
                    method:"DELETE",
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                              Swal.fire(
                                'Deleted!',
                                'Your toy has been deleted.',
                                'success'
                              )
                        }
                        const remaining = toys.filter(t => t._id !== _id)
                        setToys(remaining)
                    })
            }
        })
    }
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{toyName}</div>
                    </div>
                </div>
            </td>
            <td>{category}</td>
            <td>$ {price}</td>
            <td>{quantity}</td>
            <td>{rating}</td>
            <td>
                <Link to={`/update/${_id}`} className="btn btn-primary">Update</Link>
            </td>
            <td><button onClick={() => handelDelete(_id)} className="btn btn-warning">Delete</button></td>

        </tr>
    );
};

export default MyToyRow;