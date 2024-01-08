'use client';

import { Button, Navbar, Dropdown } from 'flowbite-react';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


export default function TopNav() {
    const pathname = usePathname();
    return (
        <Navbar className='sticky top-0 z-10 bg-white'>
            <Navbar.Collapse>
                <Navbar.Link href="#">
                    Home
                </Navbar.Link>
                <Dropdown
                    inline
                    label={
                        <p>Formación</p>
                    }
                >
                    <Dropdown.Item>Nuestra metodología</Dropdown.Item>
                    <Dropdown.Item>Cursos</Dropdown.Item>
                    <Dropdown.Item>Análisis técnico</Dropdown.Item>
                    <Dropdown.Item>Libros</Dropdown.Item>
                    <Dropdown.Item>Coaching</Dropdown.Item>
                </Dropdown>
                <Navbar.Toggle />
                <Navbar.Link href="#">Descargas</Navbar.Link>
                <Navbar.Link href="#">Contacto</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}