'use client';

import Link from "next/link";
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import heroImage from '../components/WideImage.jpg';

export default function Navbar() {
    const pathname = usePathname();

    const getPageDetails = () => {
        switch (pathname) {
            case '/':
                return {
                    title: 'Emerging Electronics Materials Lab',
                    description: ''
                };
            case '/research':
                return {
                    title: 'Research',
                    description: ''
                };
            case '/publications':
                return {
                    title: 'Publications',
                    description: ''
                };
            case '/team':
                return {
                    title: 'Team',
                    description: ''
                };
            case '/gallery':
                return {
                    title: 'Gallery',
                    description: ''
                };
            case '/contact':
                return {
                    title: 'Contact',
                    description: ''
                };
            default:
                return {
                    title: 'ABATE Lab',
                    description: ''
                };
        }
    };

    const navItems = [
        'HOME', 'RESEARCH', 'PUBLICATIONS',
        'TEAM', 'GALLERY', 'CONTACT'
    ];

    const pageDetails = getPageDetails();

    return (
        <>
            <header className="bg-black shadow-sm">
                <div className="container mx-auto px-30 py-11">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                        <Link href="/" className="text-2xl font-bold text-white hover:text-blue-600 transition-colors">
                            LOGO
                        </Link>
                        <nav className="mt-4 md:mt-0">
                            <ul className="flex flex-wrap justify-center gap-4 md:gap-6">
                                {navItems.map((item) => {
                                    const itemPath = item === 'HOME' ? '/' : `/${item.toLowerCase()}`;
                                    return (
                                        <li key={item}>
                                            <Link
                                                href={itemPath}
                                                className={`text-sm md:text-base font-medium ${pathname === itemPath
                                                    ? 'text-blue-500'
                                                    : 'text-white hover:text-blue-400'
                                                    } transition-colors`}
                                            >
                                                {item}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </nav>
                    </div>
                </div>

                <section className="relative h-96 bg-gray-900 text-white">
                    <div className="absolute inset-0 z-0">

                        <Image
                            src={heroImage}
                            alt="Lab Background"
                            fill
                            className="object-cover"
                            priority
                        />
                        <div className="absolute inset-0 bg-black opacity-40"></div>
                    </div>

                    <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">
                        <h1 className="text-4xl md:text-6xl font-bold mb-4">
                            {pageDetails.title}
                        </h1>
                        {pageDetails.description && (
                            <p className="text-xl md:text-2xl text-gray-300">
                                {pageDetails.description}
                            </p>
                        )}
                    </div>
                </section>
            </header>
        </>
    );
}