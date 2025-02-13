'use client';
import React, { useState, useEffect } from 'react';
import { TransitionPanel } from '@/components/ui/transition-panel';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/sections/Navbar';
import { Footer1 } from '@/components/sections/Footer';

const Services = [
    {
        title: "Laboratoire Dimensionnel",
        description: "Précision dimensionnelle pour vos instruments de mesure",
        content: "Notre laboratoire dimensionnel offre des services d'étalonnage de haute précision pour les instruments de mesure linéaire, angulaire et de forme. Nous travaillons avec des micromètres, des pieds à coulisse, des comparateurs et des machines de mesure tridimensionnelle (MMT). Nos procédures respectent les normes ISO 17025 et garantissent une traçabilité métrologique complète.",
        id: "dimensionnel",
        propsings: [
            {
                title: "Étalonnage des calibres",
                description: "Bague cylindrique lisse en acier, Bague fileté cylindrique en acier, Broche étalon à bouts sphériques, à bouts plans en acier, Cale étalon en acier, Calibre à mâchoires, Pige étalon en acier, Pige étalon en carbure de tungstène, Tampon cylindrique lisse et jauge plate en acier, Tampon fileté cylindrique en acier, Tampon fileté en carbure de tungstène, Sphère de métrologie en acier",
                subtitle: "Précision dimensionnelle pour tous types de calibres"
            },
            {
                title: "Étalonnage des instruments variables",
                description: "Vérification de la précision des pieds à coulisse numériques et analogiques",
            },
            {
                title: "Comparateurs",
                description: "Contrôle de la précision des comparateurs à cadran et à levier",
            },
            {
                title: "Machines de mesure tridimensionnelle (MMT)",
                description: "Étalonnage des MMT pour garantir la précision des mesures dimensionnelles",
            },
        ]
    },
    {
        title: "Laboratoire Température",
        description: "Contrôle thermique précis pour vos instruments",
        content: "Spécialisés dans l'étalonnage des instruments de mesure de température, nous prenons en charge les thermomètres, les sondes de température, les enregistreurs de données et les fours de calibration. Notre laboratoire dispose de bains thermiques et de fours de précision couvrant une plage de -80°C to +1200°C, assurant des mesures fiables dans des conditions extrêmes.",
        id: "temperature"
    },
    {
        title: "Laboratoire Pression",
        description: "Solutions de mesure de pression certifiées",
        content: "Nous proposons l'étalonnage des manomètres, transmetteurs de pression et capteurs de pression différentielle. Notre laboratoire est équipé de générateurs de pression hydrauliques et pneumatiques couvrant une plage de 10 mbar à 1000 bar. Nous effectuons des tests de linéarité, d'hystérésis et de répétabilité pour garantir la précision de vos instruments.",
        id: "pression"
    },
    {
        title: "Laboratoire d'hygrométrie",
        description: "Maîtrise de l'humidité pour des mesures fiables",
        content: "Notre laboratoire d'hygrométrie est spécialisé dans l'étalonnage des hygromètres, des sondes d'humidité relative et des enregistreurs de données. Nous disposons de chambres climatiques permettant de simuler des conditions d'humidité relative de 10% à 95% avec une précision de ±0.8% RH, essentiel pour les industries pharmaceutiques et agroalimentaires.",
        id: "hygrometrie"
    },
    {
        title: "Laboratoire de pesage-Masse",
        description: "Précision gravimétrique pour vos balances",
        content: "Nous effectuons l'étalonnage des balances analytiques, balances industrielles et instruments de pesage. Notre laboratoire utilise des masses étalons certifiées OIML R111, couvrant une plage de 1 mg à 5000 kg. Nous proposons également des tests d'excentricité, de linéarité et de répétabilité pour garantir la précision de vos instruments de pesage.",
        id: "pesage-masse"
    },
    {
        title: "Laboratoire de Volume",
        description: "Mesures volumétriques certifiées",
        content: "Notre laboratoire de volume est spécialisé dans l'étalonnage des pipettes, burettes, fioles jaugées et réservoirs de mesure. Nous utilisons des méthodes gravimétriques et volumétriques conformes aux normes ISO 8655, garantissant une précision jusqu'à ±0.1% pour les instruments de mesure de volume critiques.",
        id: "volume"
    },
    {
        title: "Laboratoire d'electricite-magnetisme",
        description: "Précision électrique et magnétique",
        content: "Nous proposons l'étalonnage des multimètres, pinces ampèremétriques, ohmmètres et instruments de mesure de champ magnétique. Notre laboratoire dispose de sources de précision pour la tension, le courant et la résistance, couvrant des plages de mesure allant du microvolt au kilovolt et du nanoampère au kiloampère.",
        id: "electricite-magnetisme"
    },
    {
        title: "Laboratoire de Force",
        description: "Mesure de force certifiée",
        content: "Notre laboratoire de force est équipé pour l'étalonnage des dynamomètres, capteurs de force et machines d'essai universelles. Nous couvrons une plage de mesure de 1 N à 500 kN, avec des procédures conformes aux normes ISO 376 et ASTM E74, garantissant la précision de vos mesures de force dans les applications industrielles et de recherche.",
        id: "force"
    },
    {
        title: "Laboratoire d'anémométrie",
        description: "Mesure précise du débit d'air",
        content: "Nous effectuons l'étalonnage des anémomètres, débitmètres d'air et capteurs de vitesse du vent. Notre laboratoire dispose de tunnels à vent calibrés couvrant des plages de vitesse de 0.1 m/s à 50 m/s, essentiel pour les applications HVAC, aéronautiques et environnementales.",
        id: "anemometrie"
    },
    {
        title: "Laboratoire de Tachymétrie",
        description: "Précision dans la mesure de vitesse",
        content: "Notre laboratoire de tachymétrie est spécialisé dans l'étalonnage des tachymètres, compteurs de tours et capteurs de vitesse de rotation. Nous utilisons des bancs de calibration optiques et mécaniques couvrant des plages de 1 rpm à 100,000 rpm, garantissant la précision des mesures de vitesse dans les applications industrielles et automobiles.",
        id: "tachymetrie"
    },
    {
        title: "Laboratoire de contrôle de qualité",
        description: "Excellence dans la métrologie industrielle",
        content: "Notre laboratoire de contrôle de qualité offre des services complets d'étalonnage et de vérification des instruments de mesure utilisés dans les processus de contrôle qualité. Nous proposons des audits métrologiques, des formations et des services de conseil pour aider les entreprises à maintenir leurs systèmes de mesure conformes aux normes ISO 9001 et IATF 16949.",
        id: "controle-qualite"
    }
]
export default function Prestations() {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const hash = window.location.hash.substring(1);
        const index = Services.findIndex(service => service.id === hash);
        if (index !== -1) {
            setActiveIndex(index);
        }
    }, []);

    return (
        <div className='relative flex flex-col'>
            <Navbar />
            <div className="w-screen relative h-[300px] md:h-[400px] lg:max-h-[500px] shadow-md overflow-hidden">
                <div className="absolute inset-0 bg-neutral-950/40 backdrop-blur-xl"></div>
                <img 
                    src="em.webp" 
                    alt="Contactez Biomet Lab pour l'étalonnage de vos instruments - Métrologie, Calibration, Certification, Contrôle qualité, Laboratoire d'étalonnage, Instruments de mesure, Précision, Traçabilité, Normes ISO" 
                    className='object-cover size-full'
                />
                <div className="absolute inset-0 flex items-end justify-start px-4 md:px-8 lg:px-20 py-4 md:py-6 lg:py-8">
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold uppercase text-white px-4 py-2 rounded-lg">
                        Nos Prestations
                    </h1>
                </div>
            </div>
            <div className='flex flex-col lg:flex-row px-4 md:px-8 lg:px-20 w-full min-h-screen mt-8 md:mt-12 lg:mt-20'>
                <div className='w-full lg:w-1/4 p-2 md:p-4 border-b lg:border-r border-zinc-200 dark:border-zinc-700 overflow-x-auto lg:overflow-y-auto'>
                    <div className='flex lg:flex-col gap-2 overflow-x-auto pb-2'>
                        {Services.map((item, index) => (
                            <Button
                                key={index}
                                onClick={() => {
                                    setActiveIndex(index);
                                    window.location.hash = item.id;
                                }}
                                variant={activeIndex === index ? 'default' : 'outline'}
                                className='whitespace-nowrap lg:w-full mb-0 lg:mb-2 text-left'
                            >
                                {item.title}
                            </Button>
                        ))}
                    </div>
                </div>
                <div className='flex-1 items-start p-4 md:p-6 lg:p-8 overflow-y-auto'>
                    <TransitionPanel
                        activeIndex={activeIndex}
                        transition={{ duration: 0.2, ease: 'easeInOut' }}
                        variants={{
                            enter: { opacity: 0, y: -50, filter: 'blur(4px)' },
                            center: { opacity: 1, y: 0, filter: 'blur(0px)' },
                            exit: { opacity: 0, y: 50, filter: 'blur(4px)' },
                        }}
                    >
                        {Services.map((item, index) => (
                            <div key={index} className='py-2 md:py-3 lg:py-4'>
                                <h3 className='mb-2 md:mb-3 lg:mb-4 text-xl md:text-2xl font-semibold text-zinc-800 dark:text-zinc-100'>
                                    {item.title}
                                </h3>
                                <p className='text-zinc-600 dark:text-zinc-400 leading-relaxed text-sm md:text-base'>{item.content}</p>
                            </div>
                        ))}
                    </TransitionPanel>
                </div>
            </div>
            <Footer1 />
        </div>
    );
}
