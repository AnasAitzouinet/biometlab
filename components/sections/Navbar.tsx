"use client";

import { Button } from "@/components/ui/button";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, MoveRight, X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {

    const navigationItems = [
        {
            title: "Accueil",
            href: "/",
            description: "",
        },
        {
            title: "Nos Prestations",
            description: "Découvrez nos services",
            items: [
                {
                    "title":"Laboratoire Dimensionnel",
                    "description":"Etalonnage des instruments de mesure dimensionnelle",
                    "href":"/nos-prestations#dimensionnel"
                },
                {
                    title:"Laboratoire Température",
                    description:"Etalonnage des instruments de mesure de température",
                    "href":"/nos-prestations#temperature"
                },
                {
                    title:"Laboratoire Pression",
                    description:"Etalonnage des instruments de mesure de pression",
                    "href":"/nos-prestations#pression"
                },
                {
                    title:"Laboratoire d'hygrométrie",
                    description:"Etalonnage des instruments de mesure d'hygrométrie",
                    "href":"/nos-prestations#hygrometrie"
                },
                {
                    title:"Laboratoire de pesage-Masse",
                    description:"Etalonnage des instruments de mesure de masse",
                    "href":"/nos-prestations#pesage-masse"
                },
                {
                    title:"Laboratoire de Volume",
                    description:"Etalonnage des instruments de mesure de volume",
                    "href":"/nos-prestations#volume"
                },
                {
                    title:"Laboratoire d'electricite-magnetisme",
                    description:"Etalonnage des instruments de mesure d'electricite-magnetisme",
                    "href":"/nos-prestations#electricite-magnetisme"
                },
                {
                    title:"Laboratoire de Force",
                    description:"Etalonnage des instruments de mesure de force",
                    "href":"/nos-prestations#force"
                },
                {
                    title:"Laboratoire d'anémométrie",
                    description:"Etalonnage des instruments de mesure d'anémométrie",
                    "href":"/nos-prestations#anemometrie"
                },
                {
                   title:"Laboratoire de Tachymétrie",
                   description:"Etalonnage des instruments de mesure de tavhymétrie",
                   "href":"/nos-prestations#tachymetrie"    
                },
                {
                    title:"Laboratoire de contrôle de qualité",
                    description:"Etalonnage des instruments de mesure de contrôle de qualité",
                    "href":"/nos-prestations#controle-qualite"
                }
            ]
        },
        {
            title: "Contactez-Nous",
            href: "/Contact",

        },
    ];

    const [isOpen, setOpen] = useState(false);
    return (
        <header className="w-full z-40    fixed top-0 left-0 bg-background">
            <div className="container relative mx-auto min-h-20 flex gap-4 flex-row lg:grid lg:grid-cols-3 items-center">
                <div className="justify-start items-center gap-4 lg:flex hidden flex-row">
                    <NavigationMenu className="flex justify-start items-start">
                        <NavigationMenuList className="flex justify-start gap-4 flex-row">
                            {navigationItems.map((item) => (
                                <NavigationMenuItem key={item.title}>
                                    {item.href ? (
                                        <>
                                            <NavigationMenuLink href={item.href}>
                                                <Button variant="ghost" >
                                                    {item.title}
                                                </Button>
                                            </NavigationMenuLink>
                                        </>
                                    ) : (
                                        <>
                                            <NavigationMenuTrigger className="font-medium text-sm">
                                                {item.title}
                                            </NavigationMenuTrigger>
                                            <NavigationMenuContent className="!w-[450px] p-4">
                                                <div className="flex flex-col lg:grid grid-cols-2 gap-4">
                                                    <div className="flex flex-col h-full justify-between">
                                                        <div className="flex flex-col">
                                                            <p className="text-base">{item.title}</p>
                                                            <p className="text-muted-foreground text-sm">
                                                                {item.description}
                                                            </p>
                                                        </div>
                                                        <Button size="sm" className="mt-10" asChild>
                                                            <Link href="/Contact">Demander un devis</Link>
                                                        </Button>
                                                    </div>
                                                    <div className="flex flex-col text-sm h-full justify-end">
                                                        {item.items?.map((subItem) => (
                                                            <NavigationMenuLink
                                                                href={subItem.href}
                                                                key={subItem.title}
                                                                className="flex flex-row justify-between items-center hover:bg-muted py-2 px-4 rounded"
                                                            >
                                                                <span>{subItem.title}</span>
                                                                <MoveRight className="w-4 h-4 text-muted-foreground" />
                                                            </NavigationMenuLink>
                                                        ))}
                                                    </div>
                                                </div>
                                            </NavigationMenuContent>
                                        </>
                                    )}
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>
                <div className="flex lg:justify-center">
                    <p className="font-semibold text-blue-900 text-3xl">
                        <span className="text-green-600">B</span>IOMET <span className="text-green-600">L</span>AB
                    </p>
                </div>
                <div className="flex justify-end items-cente r w-full gap-4">
                    <div className="flex flex-col item-center justify-center text-sm">
                        <a href="https://wa.me/212668290152" target="_blank" rel="noopener noreferrer" className="hover:underline">
                            +212 668290152
                        </a>
                        <a href="mailto:biometlaboratory@gmail.com" className="hover:underline">
                            biometlaboratory@gmail.com
                        </a>
                    </div>
                    <div className="border-r hidden md:inline"></div>

                    <Button
                        variant="outline"
                        className="hidden md:inline" asChild>
                        <Link href="/Contact">Demander un devis</Link>
                    </Button>
                </div>
                <div className="flex w-12 shrink lg:hidden items-end justify-end">
                    <Button variant="ghost" onClick={() => setOpen(!isOpen)}>
                        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </Button>
                    {isOpen && (
                        <div className="absolute top-20 border-t flex flex-col w-full right-0 bg-background shadow-lg py-4 container gap-8">
                            {navigationItems.map((item) => (
                                <div key={item.title}>
                                    <div className="flex flex-col gap-2">
                                        {item.href ? (
                                            <Link
                                                href={item.href}
                                                className="flex justify-between items-center"
                                            >
                                                <span className="text-lg">{item.title} </span>
                                                <MoveRight className="w-4 h-4 stroke-1 text-muted-foreground" />
                                            </Link>
                                        ) : (
                                            <p className="text-lg">{item.title}</p>
                                        )}
                                        {item.items &&
                                            item.items.map((subItem) => (
                                                <Link
                                                    key={subItem.title}
                                                    href={subItem.href}
                                                    className="flex justify-between items-center"
                                                >
                                                    <span className="text-muted-foreground">
                                                        {subItem.title}
                                                    </span>
                                                    <MoveRight className="w-4 h-4 stroke-1" />
                                                </Link>
                                            ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};