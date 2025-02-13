import { FAQ1 } from '@/components/sections/Faqs'
import { Footer1 } from '@/components/sections/Footer'
import React from 'react'
import { ContactForm } from './contact-form'
import { ContactInfo } from './contact-info'
import Navbar from '@/components/sections/Navbar'

export default function Contact() {
    return (
        <div className="size-full relative">
            <div className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
            <Navbar />
            <div className="w-screen relative max-h-[700px] shadow-md overflow-hidden ">
                <img 
                    src="em.webp" 
                    alt="Contactez Biomet Lab pour l'étalonnage de vos instruments - Métrologie, Calibration, Certification, Contrôle qualité, Laboratoire d'étalonnage, Instruments de mesure, Précision, Traçabilité, Normes ISO" 
                    className='object-cover size-full   ' 
                />
             </div>
            <main className="max-w-7xl mx-auto px-4  py-12">
                <h1 className="text-4xl font-bold mb-6">
                    Contactez-nous
                </h1>
                <div className="grid md:grid-cols-2 gap-12">
                    <ContactForm />
                    <ContactInfo />
                </div>

                <FAQ1 />
            </main>
            <Footer1 />
        </div>
    )
}
