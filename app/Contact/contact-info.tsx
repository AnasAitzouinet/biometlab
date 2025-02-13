import { MapPin, Phone } from "lucide-react"
 
export function ContactInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-bold mb-4">BIOTECHNOLOGIE AND METROLOGIE LABORATORY</h1>
      </div>

      <div>
        <h2 className="font-medium mb-2">Nous contacter par téléphone</h2>
        <p className="text-gray-600 mb-2">
          Notre équipe est disponible du lundi au vendredi de 8h à 18h pour répondre à vos questions et vous accompagner dans vos projets.
        </p>
        <a href="tel:+212522123456" className="text-blue-500 hover:text-blue-600 flex items-center gap-2">
          <Phone className="h-4 w-4" />
          +212 6682 90152
        </a>
      </div>

      <div>
        <h2 className="font-medium mb-2">Nous rendre visite</h2>
        <p className="text-gray-600 mb-2">
          Notre laboratoire est situé à Casablanca. Nous vous accueillons sur rendez-vous pour discuter de vos besoins en métrologie.
        </p>
        <div className="text-blue-500 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Siège : 276 BD IBN TACHEFINE 3EME ETAGE CASABLANCA
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            Bureau : Office EL FERDOUAS IMM 2 ETAGE 5 N 49 AIN SEBAA CASABLANCA
          </div>
        </div>
      </div>

      <div>
        <h2 className="font-medium mb-2">Chat en direct</h2>
        <p className="text-gray-600 mb-2">
          Notre service client est disponible en ligne pour répondre à vos questions en temps réel.
        </p>
        <a href="https://wa.me/212668290152" className="text-blue-500 hover:text-blue-600 flex items-center gap-2">
          Démarrer le chat
        </a>
      </div>
    </div>
  )
}
