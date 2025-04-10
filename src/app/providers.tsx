"use client";
import React from 'react';
import { AppProps } from 'next/app';
import { ConfigProvider } from 'antd';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
//import DashboardLayout from '@/components/layouts/page';
//import DashboardLayout from '@/components/dashboard';

const queryClient = new QueryClient()

export default function Providers({children}:{children:React.ReactNode}) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#008444",
          colorPrimaryHover: "#008444",
          colorPrimaryActive: "#008444",
          colorPrimaryBorder: "#008444",
        },
      }}
    >
      <QueryClientProvider client={queryClient}>
{children}
      </QueryClientProvider>
    </ConfigProvider>
  )
}




// import React from 'react'
// import { ConfigProvider } from 'antd'
// import {QueryClient, QueryClientProvider } from '@tanstack/react-query'
// import MainDashboardLayout from './Layout/MainDashboardLayout'

// function App() {
//   const queryClient = new QueryClient()
//   return (
//     <div>
//      <ConfigProvider
//      theme={{
//       token: {
//         colorPrimary:  "#008444", 
//         colorPrimaryHover: "#008444",
//         colorPrimaryActive: "#008444",
//         colorPrimaryBorder: "#008444",
//         // colorBgBase:"#008444",
//       },
//     }}
//      >
//      <QueryClientProvider client={queryClient}>
//       <MainDashboardLayout />
//       </QueryClientProvider>
//      </ConfigProvider>
//     </div>
//   )
// }

// export default App

// import Image from "next/image";

// export default function Home() {
//   return (

//   );
// }
