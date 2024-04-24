'use client'

import React from 'react'
import { QueryClientProvider, QueryClient } from 'react-query'
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function Provider({ children }: React.PropsWithChildren) {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  )
}

export default Provider
