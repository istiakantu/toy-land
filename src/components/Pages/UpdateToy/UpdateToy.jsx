import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useEffect } from "react";

const UpdateToy = () => {
    useEffect(()=>{
        document.title=('Toy-Land | Update')
    },[])


    const toy = useLoaderData()
    const { _id } = toy


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        fetch(`https://toy-land-server-murex.vercel.app/toy/${_id}`, {
            method:"PUT",
            headers:{
                'content-type':'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'success!',
                        text: 'Your toy Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }
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
                                {...register("price")}
                                placeholder="Price"
                                type="text"
                            />
                            <input
                                className=" hidden"
                                {...register("_id")}
                                value={_id}
                            />
                            <input
                                className="w-full mb-5 p-5"
                                {...register("quantity")}
                                placeholder="Available Quantity"
                                type="number"
                            />
                            <input
                                className="w-full mb-5 p-5"
                                {...register("description")}
                                placeholder="Description"
                                type="text"
                            />
                        </div>
                        <div className="text-center">
                            <input className="btn btn-primary px-28" value="Update Toy" type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateToy;