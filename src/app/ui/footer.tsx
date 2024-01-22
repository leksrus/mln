'use client';

import { Footer} from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';


export default function Component() {
    return (
      <footer className="w-full h-auto bg-black p-6 space-y-2" id="nosotros">
      <p className="text-lg text-principal">Acerca de</p>
      <p className="text-sm text-gray-300">Inversionistas</p>
      <p className="text-sm text-gray-300">Empleos</p>
      <p className="text-sm text-gray-300">Términos y condiciones</p>
      <p className="text-sm text-gray-300">Platzi travel, Inc</p>
    </footer>
    );
}