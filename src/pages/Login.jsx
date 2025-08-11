import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 border-2 w-full max-w-sm   p-4">
        <h2 className="text-2xl font-semibold text-center my-3">Login your account</h2>
        <div className="card-body ">
          <form className="fieldset ">
            <label className="label">Email</label>
            <input
              type="email"
              className="input border-red-500 w-full"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input border-red-500 w-full"
              placeholder="Password"
            />
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button className="btn btn-neutral mt-4 w-full">Login</button>
          </form>
          <p className="text-center font-semibold text-xs mt-4">Don't have an account ? {''} 
            <Link to='/auth/register' className="text-blue-600 link">Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
