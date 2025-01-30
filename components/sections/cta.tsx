import { MoveRight, PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
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

const CTA = () => (
    <motion.div 
        className="w-full py-20 lg:py-40"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
    >
        <div className="container mx-auto">
            <motion.div 
                className="flex flex-col text-center bg-gradient-to-tr from-blue-500 to-green-500 rounded-md p-4 lg:p-14 gap-8 items-center"
                variants={containerVariants}
            >
                <motion.div variants={itemVariants}>
                    <Badge>Get started</Badge>
                </motion.div>
                <motion.div className="flex flex-col gap-4" variants={itemVariants}>
                    <h3 className="text-3xl md:text-5xl tracking-tighter max-w-2xl font-regular text-white">
                        Faites confiance à notre expertise en métrologie dès aujourd'hui !
                    </h3>
                    <p className="text-lg leading-relaxed tracking-tight text-muted max-w-2xl">
                        La métrologie de précision est essentielle pour garantir la qualité et la fiabilité de vos mesures. Évitez les erreurs coûteuses en confiant l'étalonnage de vos instruments à des experts certifiés. Notre objectif est de vous fournir des résultats précis et conformes aux normes internationales les plus strictes.
                    </p>
                </motion.div>
                <motion.div 
                    className="flex flex-row gap-4"
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <Button className="gap-4">
                        Contactez-Nous <MoveRight className="w-4 h-4" />
                    </Button>
                </motion.div>
            </motion.div>
        </div>
    </motion.div>
);

export default CTA;