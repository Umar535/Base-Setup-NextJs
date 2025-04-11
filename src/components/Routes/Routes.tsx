
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const Route = () => {

  const router = useRouter();
  
  useEffect(() => {

    router.push('/login');
  }, [router]);

  return <div>Loading...</div>;
};

export default Route;
