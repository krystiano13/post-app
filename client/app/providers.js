'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from "@chakra-ui/react";

export function Providers({ children }) {
    return <ChakraProvider>
        <ColorModeScript initialColorMode="dark" />
        {children}
    </ChakraProvider>
}