import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import app from '../../firebase/firebase.config';
import { AuthContext } from '../../Provider/AuthProvider';

const Login = () => {
    const auth = getAuth(app);
  const {signIn ,createUser} = useContext(AuthContext);

const [users,setUsers]  = useState(null)

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const handleGoogleSignIn = event => {
  event.preventDefault();
    signInWithPopup(auth,googleProvider)
    .then(result => {
      const loggedInUser = result.user;
      console.log(loggedInUser);
      setUsers(loggedInUser)
      navigate(from,{replace:true})
    })
    .catch(error =>{
      console.log('error',error.message);
    })
}


  const handleGithubSignIn = event =>{
    event.preventDefault();
      console.log('github');
      signInWithPopup(auth,githubProvider )
      .then(result =>{
        const loggedUser  = result.user;
        console.log(loggedUser);
        setUsers(loggedUser)
        navigate(from,{replace:true})
      })
      .catch(error => {
        console.log(error);
      })
  }




  const handleLogIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    if(!password === password){
        setError('password did not matched')
        return setError();
  }

    console.log(email, password,);
    signIn(email,password)
    .then(result =>{
    //   const user = result.user;
        const loggedUser = result.user;
        console.log(loggedUser);
        // navigate(from,{replace:true})
    })
    .catch(error => console.log(error));
}



    return (

      <div>

      <div className="hero min-h-screen">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
              <div className="max-w-md">

                  <div className="hero min-h-screen">
                      <div className="hero-content flex-col ">
                          <div className="text-center lg:text-left">
                              <h1 className="text-5xl font-bold">Login now!</h1>
                          </div>
                          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                              <div className="card-body">
                                  <form onSubmit={handleLogIn}>
                                  {/* <form> */}
                                      <div className="form-control">
                                          <label className="label">
                                              <span className="label-text">Email</span>
                                          </label>
                                          <input type="text" name='email' placeholder="email" className="input input-bordered" />
                                      </div>
                                      <div className="form-control">
                                          <label className="label">
                                              <span className="label-text">Password</span>
                                          </label>
                                          <input type="text" name='password' placeholder="password" className="input input-bordered" />
                                          <label className="label">
                                              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                          </label>
                                      </div>
                                      <div className="form-control mt-6">

                                          <input className="btn btn-warning  bg-cyan-700" type="submit" value="Login" />
                                      </div>

                                      <button onClick={handleGoogleSignIn} className="btn btn-outline mt-5">Google SignIn</button>
                                      <button onClick={handleGithubSignIn} className="btn btn-outline mt-5">Github SignIn</button>
                                  </form>
                                  <p className='text-cyan-700'>Don't Have an account <Link className=' text-cyan-700 border border-slate-950 rounded-sm' to="/register">Register</Link></p>
                              </div>
                          </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>

</div>


















//         <div>
//             <div className="hero min-h-screen bg-base-200">

//   <div className="hero-content flex-col ">
//   <h1 className="text-5xl font-bold">Login now!</h1>
//     <div className="text-center lg:text-left">

//     </div>
//     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//       <form className="card-body">
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Email</span>
//           </label>
//           <input type="text" placeholder="email" className="input input-bordered" />
//         </div>
//         <div className="form-control">
//           <label className="label">
//             <span className="label-text">Password</span>
//           </label>
//           <input type="text" placeholder="password" className="input input-bordered" />
//           <label className="label">
//             <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//           </label>
//         </div>
//         <div className="form-control mt-6">
//         <input className="btn btn-primary" type="submit" value="Login" />
//         </div>
//       </form>
//     </div>
//   </div>
// </div>
//         </div> 
    );
};

export default Login;