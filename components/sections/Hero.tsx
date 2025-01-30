import { MoveRight, PhoneCall } from "lucide-react";
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

export default function Hero() {
    return (
        <motion.div
            className="w-full py-10 px-6 xl:px-0 lg:py-16 "
            initial="hidden"
            animate="visible"
        >
            <div className="container mx-auto">
                <motion.div
                    className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2"
                    variants={containerVariants}
                >
                    <div className="flex gap-4 flex-col">
                        <motion.div variants={itemVariants}>
                            <Badge variant="outline"
                                className="bg-orange-500 text-white border-0"
                            >
                                Nous sommes encore en développement
                            </Badge>
                        </motion.div>
                        <div className="flex gap-4 flex-col">
                            <motion.h1
                                className="text-5xl md:text-6xl max-w-lg tracking-tighter text-left font-regular"
                                variants={itemVariants}
                            >
                                Solutions de Mesure de Précision
                            </motion.h1>
                            <motion.p
                                className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md text-left"
                                variants={itemVariants}
                            >
                                BiometLab se spécialise dans les services de métrologie et d'étalonnage de haute précision au Maroc, garantissant l'exactitude et la fiabilité de vos mesures critiques.
                            </motion.p>
                        </div>
                        <motion.div
                            className="flex flex-row gap-4"
                            variants={itemVariants}
                        >
                            <Button size="lg" className="gap-4 w-3/5 bg-blue-500 hover:bg-blue-700">

                                Demander un Devis
                                <PhoneCall className="w-4 h-4" />
                            </Button>
                        </motion.div>
                    </div>
                    <motion.div
                        className="bg-muted overflow-hidden rounded-md aspect-square"
                        variants={imageVariants}
                    >
                        <img
                            src="https://images.pexels.com/photos/9574556/pexels-photo-9574556.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&dpr=1"
                            alt=""
                            className="object-cover size-full"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </motion.div>
    )
}