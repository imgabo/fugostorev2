"use client";
import Image from "next/image";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
} from "@chakra-ui/react";
import logo from '../../public/img/logo.png'
import { useState } from "react";
import Link from "next/link";
export default function Home() {
  const [input, setInput] = useState("");

  const handleInputChange = (e) => setInput(e.target.value);

  return (
    <main className="h-screen w-screen bg-login bg-cover bg-center flex items-center justify-center">
      <div className="bg-white h-[90%]  md:h-[90vw] lg:h-[45vw] w-[90vw]   md:w-[80vw] lg:w-[60vw] rounded-md shadow-2xl">
        <div className="h-full w-full flex flex-col items-center ">
          <h1 className="pt-8 text-xl md:text-3xl lg-text-5xl font-medium ">
            FUGOSTORE
          </h1>
          <Image src={logo} alt="logo fugostore" width={130}></Image>
          <FormControl className="h-full w-[90%] md:w-[50%] flex flex-col  gap-10 md:gap-10 lg:gap-0 xl:gap-10">
            <div>
              <FormLabel>Correo:</FormLabel>
              <Input type="email" value={input} onChange={handleInputChange} />
            </div>
            <div>
              <FormLabel>Contraseña:</FormLabel>
              <Input
                type="password"
                value={input}
                onChange={handleInputChange}
              />
            </div>
            <Link href="/">
              <p className="text-center text-blue-600 hover:text-blue-400 hover:underline">
                Olvidaste tu contraseña?
              </p>
            </Link>
            <Link href="/">
              <Button colorScheme='purple'  size="lg" className="w-full">
                Iniciar sesión
              </Button>
            </Link>
            <p className="text-center ">
                No tienes cuenta? <Link href="/register" className="text-blue-600 hover:text-blue-400 hover:underline">Registrate</Link>
            </p>
          </FormControl>
        </div>
      </div>
    </main>
  );
}
