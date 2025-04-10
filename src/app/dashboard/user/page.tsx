'use client';

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const User = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true); 



  return (
    <div>
      <h1>Welcome to User Dashboard</h1>
    </div>
  );
};

export default User;