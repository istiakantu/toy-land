import { Link } from 'react-router-dom';
import logo from '../../../../assets/logo.png';
import { UserCircleIcon } from '@heroicons/react/24/solid'
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';

const Navbar = () => {
    const { user, logout } = useContext(AuthContext)

    const handelLogout = () => {
        logout()
            .then()
            .catch()
    }
    const navbar = <>
        <Link to='/'>Home</Link>
        <Link to='/allToys'>All Toys</Link>
        {
            user ?
                <>
                    <Link to='/myToys'>My Toys</Link>
                    <Link to='/addToy'>Add A Toy</Link>
                    <button onClick={handelLogout}><Link>Log Out</Link></button>
                </>
                : <Link to='/login'>Login</Link>
        }
        
        <Link to='/blog'>Blog</Link>
    </>
    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 gap-5">
                        {
                            navbar
                        }
                    </ul>
                </div>
                <div>
                    <Link to='/'><img src={logo} alt="" className='h-20' /></Link>
                    <h2 className='font-bold text-2xl ms-7'>Toy Land</h2>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-5">
                    {
                        navbar
                    }
                </ul>
            </div>
            <div className="navbar-end mr-2">
                {
                    user ?
                        <div className="avatar">
                            <div className="w-16 rounded-full">
                                <img src={user ? user.photoURL : ''} title={user ? user.displayName : ''} alt="" />
                            </div>
                        </div>
                        : <UserCircleIcon className='h-16'></UserCircleIcon>
                }
            </div>
        </div>
    );
};

export default Navbar;