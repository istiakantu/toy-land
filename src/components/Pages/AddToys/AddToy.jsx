import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Providers/AuthProviders";
import Swal from "sweetalert2";

const AddToy = () => {
    useEffect(()=>{
        document.title=('Toy-Land | Add-Toy')
    },[])

    const { user } = useContext(AuthContext)


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        
        fetch('https://toy-land-server-murex.vercel.app/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Your toy added Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })
    };


    return (
        <div className="m-12">
            <div className="">
                <div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        {errors.exampleRequired && <span>This field is required</span>}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                            <input
                                className="w-full mb-5 p-5"
                                {...register("toyName")}
                                placeholder="Toy Name"
                            />

                            <input
                                className="w-full mb-5 p-5"
                                {...register("sellerName", { required: true })}
                                placeholder="Your Name"
                                defaultValue={user?.displayName}
                            />
                            <input
                                className="w-full mb-5 p-5"
                                {...register("picture", { required: true })}
                                placeholder="Photo URL"
                                type="url"
                            />
                            <input
                                className="w-full mb-5 p-5"
                                {...register("sellerEmail")}
                                placeholder="Your Email"
                                type="email"
                                defaultValue={user?.email}
                            />
                            <select className="w-full mb-5 p-5" {...register("category")}>
                                <option value="Marvel">Marvel</option>
                                <option value="Marvel">Avenger</option>
                                <option value="DC">DC</option>
                                <option value="Disney">Disney</option>
                            </select>
                            <input
                                className="w-full mb-5 p-5"
                                {...register("price")}
                                placeholder="Price"
                                type="text"
                            />
                            <input
                                className="w-full mb-5 p-5"
                                {...register("quantity")}
                                placeholder="Available Quantity"
                                type="number"
                            />
                            <input
                                className="w-full mb-5 p-5"
                                {...register("rating")}
                                placeholder="Rating"
                                type="text"
                            />

                            <input
                                className="w-full mb-5 p-5"
                                {...register("description")}
                                placeholder="Description"
                            />
                        </div>
                        <div className="text-center">
                            <input className="btn btn-primary px-28" value="Add Toy" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddToy;