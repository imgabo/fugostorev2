"use client";

import { Roboto } from "next/font/google";
import "./globals.css";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { CacheProvider } from "@chakra-ui/next-js";

const roboto = Roboto({ weight:['100','400','700'], style:['normal','italic'], subsets:['latin'] });

const theme = extendTheme({
  colors :{
    principal: {
      50: '#bf97ed',

      500: '#9a54ea',

      900: '#862eea',

    }
  },
  components: {
    Button: {
      // Configura el colorScheme del botón personalizado
      baseStyle: {
        // Estilo base para todos los botones
      },
      variants: {
        primary: {
          // Estilo para el botón con color primario
          bg: "principal.900",
          color: "white",
        },
        secondary: {
          // Estilo para el botón con color secundario
          bg: "principal.50",
          color: "white",
        },
        // Agrega más variantes según tus necesidades
      },
    },
  },
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>Fugostore</title>
      </head>
      <body className={roboto.className}>
        <CacheProvider >
          <ChakraProvider theme={theme}>{children}</ChakraProvider>
        </CacheProvider>
      </body>
    </html>
  );
}
