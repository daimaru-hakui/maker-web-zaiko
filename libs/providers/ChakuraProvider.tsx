"use client";

import { CacheProvider } from "@chakra-ui/next-js";
import { ChakraProvider } from "@chakra-ui/react";

export function ChakuraProvider({ children }: { children: React.ReactNode }) {
  return (
    
      <CacheProvider>
        <ChakraProvider>{children}</ChakraProvider>
      </CacheProvider>
  );
}
