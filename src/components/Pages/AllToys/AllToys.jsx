import { useLoaderData } from "react-router-dom";
import ToyRow from "./ToyRow";
import { useEffect, useState } from "react";


const AllToys = () => {
    useEffect(()=>{
        document.title=('Toy-Land | All-Toys')
    },[])

    const loadedToys = useLoaderData();
    const [toys, setToys] = useState(loadedToys)
    const [searchText, setSearchText] = useState()

    const handelSearch = () => {
        fetch(`https://toy-land-server-murex.vercel.app/searchToysByText/${searchText}`)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }


    // Pagination

    // Tried But got Error

    // const toysPerPage = 20;
    // const totalPages = Math.ceil(loadedToys.length / toysPerPage);


    // const pageNumbers = [...Array(totalPages).key()];




    return (
        <div>
            <h2 className="text-5xl font-bold text-center mb-5">All Toys</h2>
            <div className="text-center">
                <input onChange={(e) => setSearchText(e.target.value)} type="search" className="p-4 rounded-lg mr-3" />
                <button onClick={handelSearch} className="btn btn-primary">Search</button>
            </div>
            <div className="overflow-x-auto mx-5 mt-8">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th>Toy Name</th>
                            <th>Seller</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Rating</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <ToyRow
                                key={toy._id}
                                toy={toy}
                            ></ToyRow>)
                        }
                    </tbody>
                </table>
            </div>
            {/* <div>
                {
                    pageNumbers.map(number => <button key={number}>{number}</button>)
                }
            </div> */}
        </div>
    );
};

export default AllToys;