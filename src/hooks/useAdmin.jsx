import React, { useEffect, useState } from "react";

const useAdmin = (email) => {
    const [isAdmin,setIsAdmin] = useState(false)
    const[isAdminLoading,setIsAdminLoading]= useState(true)
  if (email) {
    useEffect(() => {
      fetch(`http://localhost:3000/users/admin/${email}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data.isAdmin);
            setIsAdmin(data.isAdmin)
            setIsAdminLoading(false)
        });
    }, [email]);
  }
  return [isAdmin,isAdminLoading]
};

export default useAdmin;
