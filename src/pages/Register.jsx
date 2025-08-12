import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../Context/AuthContext";

const Register = () => {

  const {createNewUser,setUser} = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    // get form data
    const form = new FormData(e.target)
    const name = form.get('name')
    const photo = form.get('photo')
    const email = form.get('email')
    const password = form.get('password')
    console.log({name,photo,email,password})

    createNewUser(email,password)
    .then(result => {
      const user = result.user;
      setUser(user)
      console.log(user)
    })
    .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
    console.log(errorCode,errorMessage)
  });
  }

  


  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 border-2 w-full max-w-sm p-4">
        <h2 className="text-2xl font-semibold text-center my-3">
          Register your account
        </h2>
        <div className="card-body ">
          <form onSubmit={handleSubmit}  className="fieldset ">
            <label className="label">Name</label>
            <input
              name="name"
              type="text"
              className="input border-red-500 w-full"
              placeholder="Name"
            />
            <label className="label">Photo url</label>
            <input
              name="photo"
              type="text"
              className="input border-red-500 w-full"
              placeholder="Photo url"
            />
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
