import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const SignUp = () => {
  const navigate = useNavigate()
  const {createUser,updateUser,continueWithGoogle} = useContext(AuthContext)
    const {handleSubmit,register,reset, formState: { errors },} = useForm()

    const handleGoogleButton=()=>{
      continueWithGoogle()
        .then(result =>{
          const user = result.user;
          console.log(user)
           saveUser(user.displayName,user.email)
        })
        .catch(error =>{
          console.log(error);
        })
    }

    const handleSignUp=(data)=>{
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
          const user = result.user;
          console.log(user)
          const useInfo={
            displayName: data.name
          }
          updateUser(useInfo)
          .then(()=>{
            saveUser(data.name,data.email)
            navigate('/')
          })
          .catch(error=>console.log(error))
        })
        .catch(error =>{
          console.log(error);
        })
        reset()
    }


    const saveUser =(name,email)=>{
      const user  ={ name,email }
      fetch("api",{
        method:"POST",
        headers:{
          'content-type':'application/json'
        },
        body:JSON.stringify(user)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
        if(data.insertedId){
          alert("Successfully Create an Account")
        }
      })
      .catch(error=>{
        console.log(error);
      })

    }


  return (
    <div className="flex justify-center items-center min-h-[80vh] py-10">
      <div>
        <h2 className="mb-4 text-primary text-2xl font-bold text-center">
          Sign Up
        </h2>
        <div className="card-body shadow-2xl w-96 rounded-2xl">
          <form onSubmit={handleSubmit(handleSignUp)} className="fieldset ">
            <label className="label mt-2">Name</label>
            <input
              type="text"
              className="input w-full "
              placeholder="Name"
              {...register('name',{ required: "Name is required" })}
            />
            {
                errors.name && <p className="text-red-400">{errors.name.message}</p>
            }

            <label className="label mt-2">Email</label>
            <input
              type="email"
              className="input w-full "
              placeholder="Email"
               {...register('email',{ required: "Email is required" })}
            />
             {
                errors.email && <p className="text-red-400">{errors.email.message}</p>
            }

            <label className="label mt-2">Password</label>
            <input
              type="password"
              className="input w-full "
              placeholder="Password"
               {...register('password',{ required: "Password is required",
                minLength:{value:6, message:"Password should be six characters log"},
                pattern:{value: /(?=.*[A-Z])(?=.*[!#$%&?"])(?=.*[0-9])/,message:"Password should One Uppercase, Special Characters and a Number" },
            })}
            />
             {
                errors.password && <p className="text-red-400">{errors.password.message}</p>
            }

            <div>
                
              <Link to="/login" className="link link-hover text-primary">
                Already have an account? Please Login
              </Link>
            </div>
            <button type="submit" className="btn btn-primary mt-4">
              Sign Up
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

export default SignUp;
