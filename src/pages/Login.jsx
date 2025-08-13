import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const Login = () => {
  const {userLogin, setUser} = useContext(AuthContext);
  const [error, setError] = useState({});
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email,password)

    userLogin(email,password)
    .then(result => {
      const user = result.user ;
      setUser(user)
      navigate(location.state ? location.state : '/' )
    })
    .catch((err) => {
   setError({error, login:err.code})
  });

  }

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 border-2 w-full max-w-sm   p-4">
        <h2 className="text-2xl font-semibold text-center my-3">Login your account</h2>
        <div className="card-body ">
          <form onSubmit={handleSubmit} className="fieldset ">
            <label className="label">Email</label>
            <input
              name="email"
              type="email"
              className="input border-red-500 w-full"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              name="password"
              type="password"
              className="input border-red-500 w-full"
              placeholder="Password"
            />
            {
              error?.login && (<p className="text-red-600 text-sm my-4">{error.login}</p>)
            }
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4 w-full">Login</button>
          </form>
          <p className="text-center font-semibold text-xs mt-4">Don&apos;t have an account ? {''} 
            <Link to='/auth/register' className="text-blue-600 link">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
