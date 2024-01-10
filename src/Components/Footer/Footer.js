import { Fragment, } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useLocation } from "react-router-dom";


const navigation = [
    { name: 'Github', href: 'https://github.com/dominick-simone', src: "./github.png" },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/dominick-simone-b6964b218/', src: "./linkedin.png" },
    { name: 'Email', href: 'mailto:domsimonedev@gmail.com', src: "./mail.png" },
]



function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Footer() {
    return (
                <>
                    <div className="bg-gray-800">
                        <div className="relative flex h-24 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => ((
                                        <a
                                            key={item.name}
                                            href={item.href}
                                            target="_blank"
                                        >
                                            <img
                                                src={item.src}
                                                className={classNames('h-12 px-3')}
                                                >
                                            </img>
                                        </a>
                                        )))}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </>
            )
}