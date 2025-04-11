'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Vendor = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true); 
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedRole = localStorage.getItem("role");
    setRole(storedRole);

    if (!storedRole || storedRole !== "vendor") {
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
      <h1>Welcome to Vendor Dashboard</h1>
    </div>
  );
};

export default Vendor;