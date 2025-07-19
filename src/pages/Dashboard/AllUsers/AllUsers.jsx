import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Loading from "../../Shared/Loading/Loading";

const AllUsers = () => {
   const {data:users=[],isLoading} = useQuery({
    queryKey:['users'],
    queryFn: async ()=>{
     const res = await fetch("http://localhost:3000/users");
     const data = await res.json();
     return data
    }
  })



  const handleMakeAdmin = (id) => {
    // console.log('handleMakeAdmin',id);
    fetch(`http://localhost:3000/users/admin/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          toast.success("Make Admin");
        }
      });
  };


  if(isLoading){
    return <Loading></Loading>
  }



  return (
    <div>
      <h1>All Users {users.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Serial</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>

                <td>
                  {user.role =="admin" ? (
                   <>
                   <p>Admin</p>
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-sm btn-outline"
                    >
                      Cancel Admin
                    </button>
                   </>
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn btn-sm btn-outline"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
