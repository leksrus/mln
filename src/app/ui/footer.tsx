'use client';

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';


export default function Component() {
  return (
    <footer className="flex justify-content-end w-full min-h-48 h-auto bg-black space-x-2 flex-row pl-6" id="nosotros">
      <div className='w-4/5 flex space-x-6 p-6'>
        <p className="text-xl text-principal">Acerca de</p>
        <p className="text-lg text-gray-300">Inversionistas</p>
        <p className="text-lg text-gray-300">Términos y condiciones</p>
        <p className="text-lg text-gray-300">Mercado No Lineal</p>
      </div>
      <div className='float-right  h-auto w-1/5 footer'></div>
    </footer>
  );
}