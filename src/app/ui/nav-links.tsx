'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Fragment } from 'react'

function classNames(...classes: (string | false | undefined | null | { [key: string]: any })[]): string {
    return classes.filter(Boolean).join(' ');
}
const links = [
    { name: 'Home', href: '/' },
    {
        name: 'Formación',
        href: '/formacion',
        submenu: [
            { name: 'opción 1', href: '/opcion1' },
            { name: 'opción 2', href: '/opcion1' },
            { name: 'opción 3', href: '/opcion1' },
        ]
    },
    { name: 'Servicios', href: '/servicios' },
    { name: 'Sistema de trading', href: '/sistematrading' },
    { name: 'Descargas', href: '/descargas' },
    { name: 'Contacto', href: '/contacto' },
];

export default function NavLinks() {
    const pathname = usePathname();
    return (
        <>
            <nav className="flex justify-around">
                {links.map((link) => {
                    if (link.submenu) {
                        const options = link.submenu.map((s) => ({ value: s.href, label: s.name }));
                        return (
                            <Menu as="div" className="relative inline-block text-left">
                                <div>
                                    <Menu.Button className="border-none inline-flex w-full justify-center px-3 py-2">
                                        {link.name}
                                        <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
                                    </Menu.Button>
                                </div>
                                <Transition
                                    as={Fragment}
                                    enter="transition ease-out duration-100"
                                    enterFrom="transform opacity-0 scale-95"
                                    enterTo="transform opacity-100 scale-100"
                                    leave="transition ease-in duration-75"
                                    leaveFrom="transform opacity-100 scale-100"
                                    leaveTo="transform opacity-0 scale-95"
                                >
                                    <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <div className="py-1">
                                            {options.map((option) => (
                                                <Menu.Item key={option.value}>
                                                    {({ active }) => (
                                                        <Link
                                                            href={option.value}
                                                            className={classNames(
                                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                                'block px-4 py-2 text-sm'
                                                            )}
                                                        >
                                                            {option.label}
                                                        </Link>
                                                    )}
                                                </Menu.Item>
                                            ))}
                                        </div>
                                    </Menu.Items>
                                </Transition>
                            </Menu>
                        )
                    };
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={clsx(
                                'md:p-2 md:px-3',
                                {
                                    'bg-sky-100 text-blue-600': pathname === link.href,
                                },
                            )}>
                            <p className="hidden sm:inline-block">{link.name}</p>
                        </Link>

                    );
                })}
            </nav>
        </>
    );
}