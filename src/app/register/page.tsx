import { Button, FormControl, FormLabel, Input } from "@chakra-ui/react";
import logo from '../../../public/img/logo.png'
import Image from "next/image";
import Link from "next/link";
export default function Register() {
  return (
    <main className="h-screen w-screen bg-login bg-cover bg-center flex items-center justify-center">
      <div className="bg-white h-[90%]  md:h-[90vw] lg:h-[100%] xl:h-[45vw] w-[90vw]   md:w-[80vw] lg:w-[60vw] rounded-md shadow-2xl">
        <div className="h-full w-full flex flex-col items-center ">
          <h1 className="pt-8 text-xl md:text-3xl lg-text-5xl font-medium ">
            FUGOSTORE
          </h1>
          <Image src={logo} alt="logo fugostore" width={130}></Image>
          <FormControl className="h-full w-[90%] md:w-[50%] flex flex-col  gap-2 md:gap-2 lg:gap-2 xl:gap-5">
            <div>
              <FormLabel>Nombre:</FormLabel>
              <Input type="text" />
            </div>
            <div>
              <FormLabel>Correo:</FormLabel>
              <Input type="email" />
            </div>
            <div>
              <FormLabel>Contraseña:</FormLabel>
              <Input
                type="password"
             
              />
            </div>
            <Link href="/">
              
            </Link>
            <Link href="/">
              <Button colorScheme="purple" size="lg" className="w-full">
                Registrarme
              </Button>
            </Link>
            <p className="text-center ">
              Me arrepenti :C{" "}
              <Link
                href="/"
                className="text-blue-600 hover:text-blue-400 hover:underline"
              >
                Regresar
              </Link>
            </p>
          </FormControl>
        </div>
      </div>
    </main>
  );
}
