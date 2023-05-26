import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProviders";
import MyToyRow from "./MyToyRow";

const MyToys = () => {
    useEffect(() => {
        document.title = ('Toy-Land | My-toy')
    }, [])

    const { user } = useContext(AuthContext);
    const [toys, setToys] = useState([]);

    const url = `https://toy-land-server-murex.vercel.app/toys?sellerEmail=${user?.email}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setToys(data)
            })
    }, [url])
    return (
        <div className="overflow-x-auto mx-5 mt-8">
            <table className="table table-compact w-full">
                <thead>
                    <tr>
                        <th>Toy Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Rating</th>
                        <th>Update</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        toys.map(toy => <MyToyRow
                            key={toy._id}
                            toy={toy}
                            toys={toys}
                            setToys={setToys}
                        ></MyToyRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyToys;