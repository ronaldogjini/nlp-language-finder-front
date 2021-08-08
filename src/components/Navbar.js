import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Transition } from "@headlessui/react";
import { StaticImage } from 'gatsby-plugin-image';


function Navbar() {

    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="bg-black fixed w-full shadow-md z-50">
            <div className=" mx-auto max-w-screen-xl px-4 sm:px-0 lg:px-0">
                <div className="flex items-center h-16">
                    <div className="flex justify-center items-center w-full">
                        <div className="flex-shrink-0">
                            <div className="h-full text-white font-light text-2xl">
                                <Link className="flex gap-4 items-center" to="/">
                                    <p >
                                        Language Identifier
                                    </p>
                                    <StaticImage
                                        placeholder="dominantColor"
                                        src="../images/language.png"
                                        alt="what language is this"
                                        height={35}
                                    >
                                    </StaticImage>
                                </Link>
                            </div>
                        </div>
                        {/* <div className="hidden md:block ">
                            <div className="ml-10 flex items-baseline space-x-4">
                                <Link className="text-black hover:bg-gray-200 px-3 py-2 rounded-md text-md font-medium" to="/about">About</Link>
                            </div>
                        </div> */}
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isOpen ? (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="black"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="block h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="black"
                                    aria-hidden="true"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            <Transition
                show={isOpen}
                enter="transition ease-out duration-100 transform"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="transition ease-in duration-75 transform"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
            >
                {(ref) => (
                    <div className="md:hidden" id="mobile-menu">
                        <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link to="/about" onClick={() => setIsOpen(!isOpen)} className="hover:bg-gray-100 text-black block px-3 py-2 rounded-md text-base font-medium">About</Link>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    );
}

export default Navbar
