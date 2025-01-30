"use client";

import { useEffect, useState } from "react";
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";
import { User } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "../ui/badge";


const features = [
    {
        title: "Masse Balance",
        description: "Étalonnage de précision des balances analytiques et industrielles pour des mesures de masse exactes",
        image: "https://cdn.shopify.com/s/files/1/2800/3434/files/precision-analytical_grande.jpg?v=1531853520"
    },
    {
        title: "Temperature Hygrometrie",
        description: "Contrôle et étalonnage des thermomètres, hygromètres et systèmes de contrôle climatique",
        image: "https://static.testo.com/image/upload/v1696854973/HQ/testo-moisture-meters-product-range.png"
    },
    {
        title: "Pression",
        description: "Étalonnage des manomètres, transmetteurs de pression et systèmes de mesure de vide",
        image: "https://mclmaroc.com/wp-content/uploads/2019/04/pression-1024x1024.jpg"
    },
    {
        title: "Force Couple",
        description: "Étalonnage des dynamomètres et capteurs de couple pour des mesures de force précises",
        image: "https://mclmaroc.com/wp-content/uploads/2019/04/1805152253110_3.jpg"
    },
    {
        title: "Dimensionnel",
        description: "Vérification des instruments de mesure dimensionnelle : micromètres, pieds à coulisse, etc.",
        image: "https://mclmaroc.com/wp-content/uploads/2019/04/dimension-1-300x300.jpg"
    },
    {
        title: "Electrique Magnetisme",
        description: "Étalonnage des multimètres, oscilloscopes et autres instruments de mesure électrique",
        image: "https://mclmaroc.com/wp-content/uploads/2019/05/electrique-300x300.jpg"
    },
    {
        title: "Salle Blanche Hotte PSM",
        description: "Contrôle et certification des salles blanches et hottes à flux laminaire",
        image: "https://mclmaroc.com/wp-content/uploads/2021/09/77-300x209.jpg"
    },
    {
        title: "Volume",
        description: "Étalonnage des instruments de mesure volumétrique : pipettes, burettes, fioles",
        image: "https://mclmaroc.com/wp-content/uploads/2019/05/researching-laboratory_1384-149-300x200.jpg"
    },
    {
        title: "Debitmetre compteur d'eau",
        description: "Vérification et étalonnage des débitmètres et compteurs d'eau industriels",
        image: "https://mclmaroc.com/wp-content/uploads/2020/07/2-mini-300x176.jpg"
    },
    {
        title: "Autoclave Sterilisateur",
        description: "Validation et contrôle des autoclaves et stérilisateurs médicaux",
        image: "https://mclmaroc.com/wp-content/uploads/2019/11/AUTOCLAVE-300x169.jpg"
    },
    {
        title: "Analyseur detecteur de gaz",
        description: "Étalonnage des analyseurs et détecteurs de gaz pour la sécurité industrielle",
        image: "https://images.pexels.com/photos/8940469/pexels-photo-8940469.jpeg"
    },
    {
        title: "Sonometre Luxmetre",
        description: "Vérification des sonomètres et luxmètres pour les mesures acoustiques et lumineuses",
        image: "https://images.pexels.com/photos/9574556/pexels-photo-9574556.jpeg"
    },
    {
        title: "Tachymetre chronometre anemometre",
        description: "Étalonnage des instruments de mesure de vitesse, temps et débit d'air",
        image: "https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg"
    },
    {
        title: "PH Metre Conductimetre spectrophotometre",
        description: "Contrôle des instruments de mesure chimique : pH, conductivité, spectrophotométrie",
        image: "https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg"
    }
]


const Features = () => {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setTimeout(() => {
            if (api.selectedScrollSnap() + 1 === api.scrollSnapList().length) {
                setCurrent(0);
                api.scrollTo(0);
            } else {
                api.scrollNext();
                setCurrent(current + 1);
            }
        }, 4000);
    }, [api, current]);

    return (
        <div className="w-full py-20 px-6 xl:px-0 lg:py-40">
            <div className="container mx-auto">
                <div className="flex flex-col gap-10">
                    <h2 className="text-3xl md:text-5xl tracking-tighter lg:max-w-4xl font-regular text-left">
                        BiometLab - Expertise en Métrologie et Étalonnage d'Instruments de Mesure au Maroc

                    </h2>
                    <Carousel setApi={setApi} className="w-full">
                        <CarouselContent>
                            {features.map((_, index) => (
                                <CarouselItem className="lg:basis-1/2" key={index}>
                                    <div className="relative bg-white border rounded-md h-full lg:col-span-2  overflow-hidden aspect-video flex justify-between flex-col">
                                        <img src={_.image} alt="" className="absolute z-0" />
                                        <div className="bg-gradient-to-t size-full from-neutral-950 to-transparent absolute z-10" />
                                        <User className="w-8 h-8 stroke-1 opacity-0" />
                                        <div className="flex flex-col gap-4 z-20 p-6">
                                            <div className="flex flex-col">
                                                <h3 className="text-2xl tracking-tight text-white font-semibold">
                                                    {_.title}
                                                </h3>
                                                <p className="text-muted max-w-xs text-base">
                                                    {_.description}
                                                </p>
                                            </div>

                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                </div>
            </div>
        </div>
    );

};



export default Features;


