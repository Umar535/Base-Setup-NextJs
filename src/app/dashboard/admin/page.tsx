"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Admin = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);

    if (!storedRole || storedRole !== "admin") {
      toast.error("Unauthorized access! Please login.");
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return (
      <div className="h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div>
      <h1>Welcome to {role} Dashboard</h1>
    </div>
  );
};

export default Admin;

// 'use client';

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";
// import { toast } from "sonner";

// const Admin = () => {
//   const router = useRouter();
//   const [loading, setLoading] = useState(true);
//   const role=localStorage.getItem("role")

//   useEffect(() => {
//     const role = localStorage.getItem("role");

//     if (!role || role !== "admin") {
//       toast.error("Unauthorized access! Please login.");
//       router.push("/login");
//     }

//   }, [router]);

//   return (

//     <div>
//       <h1>Welcome to {role} Dashboard  </h1>
//     </div>
//   );
// };

// export default Admin;
