"use client"
import React from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetTitle,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { VisuallyHidden } from "@radix-ui/react-visually-hidden"

const navItems = [
    { name: 'Nos Services', link: '/services' },
    { name: 'A Propos', link: '/aboutUs' },
    { name: 'Contact', link: '/contact' },
]

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between p-4   md:px-40">
            {/* Logo */}
            <div className="flex items-center">
                <Link href="/">
                    <h1 className='text-2xl font-bold text-gray-900'>
                        BiometLab
                    </h1>
                </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-2">
                {navItems.map((item, index) => (
                    <Button
                        key={index}
                        asChild
                        variant="ghost"
                        className='font-medium'
                    >
                        <Link
                            href={item.link}
                             
                        >
                            {item.name}
                        </Link>
                    </Button>
                ))}
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon">
                            <Menu className="h-6 w-6" />
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-[300px]">
                        <VisuallyHidden>
                            <SheetTitle>Navigation Menu</SheetTitle>
                        </VisuallyHidden>
                        <div className="flex flex-col space-y-4 mt-8">
                            {navItems.map((item, index) => (
                                <Link
                                    key={index}
                                    href={item.link}
                                    className="text-lg px-4 py-2 hover:bg-gray-100 rounded-md"
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
        </nav>
    )
}
