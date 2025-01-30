"use client"

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            delayChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: { type: "spring", stiffness: 100 }
    }
};

const imageVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
        scale: 1,
        opacity: 1,
        transition: { type: "spring", stiffness: 100, delay: 0.5 }
    }
};

const AboutUs = () => (
    <div className="w-full py-20 px-6 xl:px-0 lg:py-40">
        <div className="container mx-auto">
            <motion.div
                className="grid grid-cols-1 gap-8 items-center md:grid-cols-2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={containerVariants}
            >
                <motion.div className="flex gap-4 flex-col order-2">
                    <motion.div variants={itemVariants}>
                        <Badge variant="outline">À Propos de Nous</Badge>
                    </motion.div>
                    <div className="flex gap-4 flex-col">
                        <motion.h1
                            className="text-5xl md:text-7xl tracking-tighter text-left font-regular"
                            variants={itemVariants}
                        >
                            Laboratoire d'Étalonnage de Précision
                        </motion.h1>
                        <motion.p
                            className="text-xl leading-relaxed tracking-tight text-muted-foreground text-left"
                            variants={itemVariants}
                        >
                            BiometLab est un laboratoire de métrologie de pointe au Maroc, spécialisé dans l'étalonnage et la vérification d'instruments de mesure. Notre équipe d'experts certifiés garantit des résultats précis et fiables pour répondre aux normes internationales les plus strictes.
                        </motion.p>
                    </div>
                    <motion.div
                        className="flex flex-row gap-4"
                        variants={itemVariants}
                    >
                        <Button size="lg" className="gap-4 w-3/5 bg-blue-500 hover:bg-blue-700">
                            Contactez-nous
                        </Button>
                    </motion.div>
                </motion.div>
                <motion.div
                    className="grid grid-cols-2 gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    variants={containerVariants}
                >
                    <motion.div
                        className="bg-muted rounded-md aspect-square overflow-hidden"
                        variants={imageVariants}
                    >
                        <img
                            src="https://images.pexels.com/photos/414860/pexels-photo-414860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Calibration tools"
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                    <motion.div
                        className="bg-muted rounded-md row-span-2 overflow-hidden"
                        variants={imageVariants}
                    >
                        <img
                            src="https://images.pexels.com/photos/8940469/pexels-photo-8940469.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1"
                            alt="Laboratory calibration"
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                    <motion.div
                        className="bg-muted rounded-md aspect-square overflow-hidden"
                        variants={imageVariants}
                    >
                        <img
                            src="https://images.pexels.com/photos/256262/pexels-photo-256262.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Precision measurement"
                            className="object-cover w-full h-full"
                        />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    </div>
);

export default AboutUs;