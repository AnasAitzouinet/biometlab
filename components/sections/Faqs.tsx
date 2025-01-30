import {    PhoneCall } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQ1 = () => (
  <div className="w-full py-20 lg:py-40">
    <div className="container mx-auto">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="flex gap-10 flex-col">
          <div className="flex gap-4 flex-col">
            <div>
              <Badge variant="outline">FAQ</Badge>
            </div>
            <div className="flex gap-2 flex-col">
              <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-regular">
                Questions fréquentes sur la métrologie
              </h4>
              <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                La métrologie est un domaine complexe et essentiel pour garantir la précision des mesures. Nous répondons ici aux questions les plus courantes concernant nos services d&apos;étalonnage et de métrologie légale.
              </p>
            </div>
            <div className="">
              <Button className="gap-4" variant="outline">
                Des questions ? Contactez-nous <PhoneCall className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={"index-" + index}>
              <AccordionTrigger className="text-lg font-semibold">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
);

const faqs = [
    {
      question: "Quelle est la fréquence recommandée pour l&apos;étalonnage des instruments ?",
      answer: "La fréquence d&apos;étalonnage dépend de plusieurs facteurs : utilisation, environnement, et exigences réglementaires. Nous recommandons généralement un étalonnage annuel."
    },
    {
      question: "Quelles sont les normes de métrologie appliquées ?",
      answer: "Nous suivons les normes internationales ISO/IEC 17025 et les exigences du système métrique légal marocain."
    },
    {
      question: "Pouvez-vous certifier des instruments pour l&apos;export ?",
      answer: "Oui, nous délivrons des certificats d&apos;étalonnage reconnus internationalement, conformes aux exigences OIML."
    },
    {
      question: "Quel est le délai moyen pour un étalonnage ?",
      answer: "Le délai varie selon le type d&apos;instrument, mais en moyenne, nous effectuons les étalonnages sous 3 à 5 jours ouvrables."
    },
    {
      question: "Proposez-vous des services de métrologie sur site ?",
      answer: "Oui, nous disposons d&apos;équipements portables pour effectuer des étalonnages directement dans vos locaux lorsque cela est possible."
    },
    {
      question: "Comment garantir la traçabilité des mesures ?",
      answer: "Nous utilisons des étalons de référence certifiés, traçables aux étalons nationaux et internationaux."
    },
    {
      question: "Quels types d&apos;instruments étalonnez-vous ?",
      answer: "Nous étalonnons une large gamme d&apos;instruments : balances, thermomètres, manomètres, instruments de mesure électrique, etc."
    },
    {
      question: "Proposez-vous des formations en métrologie ?",
      answer: "Oui, nous offrons des programmes de formation adaptés aux besoins des entreprises, allant des bases de la métrologie aux techniques avancées."
    }
  ]