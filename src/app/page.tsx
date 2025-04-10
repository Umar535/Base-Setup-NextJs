"use client"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import React from 'react'

function page() {
  const queryClient=new QueryClient();
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <h1>Welcome to Home Page</h1>
        
      </QueryClientProvider>
    </div>
  )
}

export default page
