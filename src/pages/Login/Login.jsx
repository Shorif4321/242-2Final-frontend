import React, { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";
import toast from "react-hot-toast";

const Login = () => {

    useEffect(() => {
          window.scrollTo(0, 0);
        }, []);
  


  const { signIn,continueWithGoogle } = useContext(AuthContext);
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();

   const handleGoogleButton=()=>{
      continueWithGoogle()
        .then(result =>{
          const user = result.user;
          toast.success("Successfully Login");
        })
        .catch(error =>{
          console.log(error);
        })
    }

  const loginUser = (data) => {
    console.log(data);
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success('Your are login Successfully!');
        reset()

        
      })
      .catch((error) => {
        if(error.message == "Firebase: Error (auth/invalid-credential).")
         toast.error("Email or Password does not Matched");
      });

    // reset()
  };

  return (
    <div className="flex justify-center items-center min-h-[80vh] py-10">
      <div>
        <h2 className="mb-4 text-primary text-2xl font-bold text-center">
          Log in
        </h2>
        <div className="card-body shadow-2xl w-96 rounded-2xl">
          <form onSubmit={handleSubmit(loginUser)} className="fieldset ">
            <label className="label mt-2">Email</label>
            <input
              type="email"
              className="input w-full "
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-400">{errors.email.message}</p>
            )}

            <label className="label mt-2">Password</label>
            <input
              type="password"
              className="input w-full "
              placeholder="Password"
              {...register("password", { required: "Password is required" })}
            />
            {errors.password && (
              <p className="text-red-400">{errors.password.message}</p>
            )}

            <div>
              <Link to="/sign-up" className="link link-hover text-primary">
                New to Website ? Please crete an account
              </Link>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Login in
            </button>
          </form>

          <button onClick={handleGoogleButton} className="btn btn-primary mt-4">
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
