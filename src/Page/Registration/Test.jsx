import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../provider/AuthProvider';
import UseTitle from '../../hooks/UseTitle';

const Register = () => {
    const {createUser} = useContext(AuthContext);


        UseTitle('Register')

    const handleRegister = event => {
            event.preventDefault();
            const form =event.target;
            const name =form.name.value;
            const email =form.email.value;
            const password =form.password.value;
            const photo =form.photo.value;
         console.log(name,email,password,photo);



         createUser(email,password)
         .then(result =>{
            const user = result.user;
            console.log(user);
         })
         .catch(error => console.log(error))
    }
    return (
        <div>

            <div className="hero min-h-screen" style={{ backgroundImage: `url('../../../src/assets/banner4.jpg')` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">

                        <div className="hero min-h-screen">
                            <div className="hero-content flex-col ">
                                <div className="text-center lg:text-left">
                                    <h1 className="text-5xl font-bold">Register now!</h1>
                                </div>
                                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                    <div className="card-body">
                                        <form onSubmit={handleRegister}>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Name</span>
                                                </label>
                                                <input type="text" name='name' placeholder="name" className="input input-bordered"  required/>
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Email</span>
                                                </label>
                                                <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                                            </div>
                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">Password</span>
                                                </label>
                                                <input type="text" name='password' placeholder="password" className="input input-bordered" required />
                                                
                                            </div>

                                            <div className="form-control">
                                                <label className="label">
                                                    <span className="label-text">PhotoURL</span>
                                                </label>
                                                <input type="text" name='photo' placeholder="PhotoURL" className="input input-bordered" />
                                                <label className="label">
                                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                                </label>
                                            </div>
                                            <div className="form-control mt-6">

                                                <input className="btn btn-warning" type="submit" value="Register" />
                                            </div>
                                        </form>
                                        <p> Have an account ?<Link className='text-yellow-600' to="/login">Login</Link></p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;