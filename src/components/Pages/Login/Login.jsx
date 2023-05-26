import { useContext, useEffect, useState } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from '../../Providers/AuthProviders';



const Login = () => {
    useEffect(()=>{
        document.title=('Toy-Land | Login')
    },[])

    const {loginUser, googleLogin} = useContext(AuthContext)
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handelGoogleLogin= ()=>{
        googleLogin()
        navigate(from, {replace : true})
    }

    const handelLogin = event =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email , password)
        .then(result=>{
           const logedUser = result.user;
           navigate(from, {replace : true})
        })
        .catch(error=>(
            setError(error.message)
        ))
        form.reset()
    }
    return (
        <div className="hero min-h-screen bg-gray-900">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                    <h1 className="text-5xl font-bold mb-4">Login now....!</h1>
                    <form onSubmit={handelLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <p className='text-red-500'><small>{error}</small></p>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Login" />
                        </div>
                    </form>
                    <div className="divider">OR</div>
                    <div className='mx-auto'>
                        <button onClick={handelGoogleLogin} className='border flex items-center gap-2 p-3 btn btn-info'>
                            <FaGoogle></FaGoogle> Login with Google
                        </button>
                    </div>
                    <p className='text-center my-4'>No account yet? <Link to='/register' className=''><span className='text-orange-400'>Register</span></Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;