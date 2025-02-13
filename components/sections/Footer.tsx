import Link from "next/link";

export const Footer1 = () => {
  const navigationItems = [
    {
        title: "Accueil",
        href: "/",
        description: "",
    },
    {
        title: "Nos Prestations",
        description: "Découvrez nos services",
         
    },
    {
        title: "Contactez-Nous",
        href: "/Contact",

    },
];

  return (
    <div className="w-full px-8 py-20 lg:py-40 bg-blue-950 text-background">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="flex gap-8 flex-col items-start">
            <div className="flex gap-2 flex-col">
            <h1 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                BiometLab
              </h1>
              <h2 className="text-lg md:text-xl tracking-tighter max-w-xl font-regular text-left">
                BIOTECHNOLOGIE AND METROLOGIE LABORATORY
              </h2>
              <p className="text-lg max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                Expertise en métrologie et étalonnage de précision au Maroc
              </p>
            </div>
            <div className="flex gap-20 flex-row">
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <p>Siège : 276 BD IBN TACHEFINE 3EME ETAGE CASABLANCA</p>
                <p>Bureau : Office EL FERDOUAS IMM 2 ETAGE 5 N 49 AIN SEBAA CASABLANCA</p>
              </div>
              <div className="flex flex-col text-sm max-w-lg leading-relaxed tracking-tight text-background/75 text-left">
                <Link href="/">Conditions d&apos;utilisation</Link>
                <Link href="/">Politique de confidentialité</Link>
              </div>
            </div>
          </div>
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            {navigationItems.map((item) => (
              <div
                key={item.title}
                className="flex text-base gap-1 flex-col items-start"
              >
                <div className="flex flex-col gap-2">
                  {item.href ? (
                    <Link
                      href={item.href}
                      className="flex justify-between items-center"
                    >
                      <span className="text-xl">{item.title}</span>
                    </Link>
                  ) : (
                    <p className="text-xl">{item.title}</p>
                  )}
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};