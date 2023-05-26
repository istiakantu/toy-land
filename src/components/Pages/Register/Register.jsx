import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProviders";
import { getAuth, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.config";


const auth = getAuth(app);

const Register = () => {
    useEffect(()=>{
        document.title=('Toy-Land | Register')
    },[])

    const { createUser } = useContext(AuthContext)
    const [error, setError] = useState('');
    const [success, setSuccess] = useState();
    const navigate = useNavigate();

    const handelSignUp = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.pass.value;

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setSuccess('Account Created Successfully')
                updateProfile(auth.currentUser, {
                    displayName: name, photoURL: photo
                })
                    .then(() => {
                        navigate('/')
                    })
            })
            .catch(error => {
                setError(error.message)
            })
        form.reset()
    }
    return (
        <div className="hero min-h-screen bg-gray-900">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-4xl font-bold mb-4">Please Register...!</h1>
                    <form onSubmit={handelSignUp}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="name" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="URL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" required className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='pass' placeholder="password" required className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p className='text-red-500'><small>{error}</small></p>
                        <p className='text-green-500'><small>{success}</small></p>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sign Up" />
                        </div>
                    </form>
                    <p className='text-center my-4'>Already have an account? <Link to='/login' className=''><span className="text-orange-400">Login</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;