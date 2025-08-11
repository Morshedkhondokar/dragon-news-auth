import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 border-2 w-full max-w-sm   p-4">
        <h2 className="text-2xl font-semibold text-center my-3">
          Register your account
        </h2>
        <div className="card-body ">
          <form className="fieldset ">
            <label className="label">Name</label>
            <input
              type="text"
              className="input border-red-500 w-full"
              placeholder="Name"
            />
            <label className="label">Photo url</label>
            <input
              type="text"
              className="input border-red-500 w-full"
              placeholder="Photo url"
            />
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
            <button className="btn btn-neutral mt-4 w-full">Register</button>
          </form>
          <p className="text-center font-semibold text-xs mt-4">
            Allredy have an account {" "}
            <Link to='/auth/login' className="text-blue-600 text-xs link">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
